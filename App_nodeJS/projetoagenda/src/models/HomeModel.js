const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  titulo: { type: String, required: true},
  descrição: String
});

const homeModel = mongoose.model('home', homeSchema);

class home {

}

module.exports =  home;
