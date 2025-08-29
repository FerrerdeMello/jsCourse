const contactModel = require('../models/contactModel');

exports.index = (req, res) => {
  res.render('contact', {
    contactById: {}
  });
};

exports.register = async (req, res) => {
  try {
    const contactById = new contactModel(req.body);
    await contactById.register();
    if(contactById.errors.length > 0) {
      req.flash('errors', contactById.errors);
      req.session.save(() => res.redirect(`/contact/index/${req.params.id}`));
      return;
    }
    req.flash('success', 'The contact was successfully registered.');
    req.session.save(() => res.redirect(`/contact/index/${contactById.contact._id}`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404');
  const contactById = await contactModel.getById(req.params.id);
  if(!contactById) return res.render('404');
  res.render('contact', { contactById });
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const contactById = new contactModel(req.body);
    await contactById.edit(req.params.id);
    if(contactById.errors.length > 0) {
      req.flash('errors', contactById.errors);
      req.session.save(() => res.redirect(`/contact/index/${req.params.id}`));
      return;
    }
    req.flash('success', 'The contact has been updated successfully.');
    req.session.save(() => res.redirect(`/contact/index/${contactById.contact._id}`));
    return;
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404');
  const contactById = await contactModel.delete(req.params.id);
  if(!contactById) return res.render('404');
  req.flash('success', 'The contact was successfully deleted.');
  req.session.save(() => res.redirect(`/`));
  return;
};
