const contactM = require('../models/contactModel');

exports.index = async(req, res) => {
  const contacts = await contactM.getContacts();
  res.render('index', { contacts });
};
