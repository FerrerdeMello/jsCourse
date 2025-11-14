const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true},
  createdIn: { type: Date, required: true}
});

const loginModel = mongoose.model('Login', loginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.success = [];
    this.user = null;
  }

  async signIn(){
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await loginModel.findOne({ email: this.body.email });

    if(!this.user) {
      this.errors.push('User not found.');
      return;
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Invalid PassWord');
      this.user = null;
      return;
    }
  }

  async register() {
    this.valida();
    if(this.errors.length > 0) return;

    await this.userExists();

    if(this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    
    this.user = await loginModel.create(this.body);
  }

  async userExists() {
    this.user = await loginModel.findOne({ email: this.body.email });
    if(this.user) this.errors.push('User already exists.');
  }

  valida() {
    this.cleanUp();
    // The email address must be valid.
    if(!validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
    // The password must be between 3 and 50 characters long.    
    if(this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('Password must be between 3 and 50 characters long.');
    }
  }

  cleanUp() {
    for(const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
      createdIn: new Date()
    };
  }
}

module.exports =  Login;
