const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  phone: { type: String, required: false, default: '' },
  createdIn: { type: Date, default: Date.now },
});

const contactModel = mongoose.model('Contact', contactSchema);

function contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

contact.prototype.register = async function() {
  this.valida();
  if (this.errors.length > 0) return;
     this.contact = await contactModel.create(this.body);
}

contact.prototype.valida = function() {
  this.cleanUp();
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
  if(!this.body.name) this.errors.push('The field name is required.');
  if(!this.body.email && !this.body.phone) this.errors.push('At least one contact must be provided: email or telephone.');  
}

contact.prototype.cleanUp = function() {
  for(const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }
  this.body = {
    name: this.body.name,    
    surname: this.body.surname,
    email: this.body.email,
    phone: this.body.phone,
  };
};

contact.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.contact = await contactModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Statics Methods
contact.getById = async function(id) {
  if(typeof id !== 'string') return;
  const contactById = await contactModel.findById(id);
  return contactById;
};

contact.getContacts = async function() {
  const contacsSearched = await contactModel.find()
    .sort({ createdIn: -1 });
  return contacsSearched;
};

contact.delete = async function(id) {
  if(typeof id !== 'string') return;
  if (!mongoose.Types.ObjectId.isValid(id)) return null; // invalid id
  const contacDeleted = await contactModel.findOneAndDelete({ _id: id });
  return contacDeleted;
};

module.exports =  contact;
