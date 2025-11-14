import 'core-js/stable';
import 'regenerator-runtime/runtime';
import contactValidation from './modules/contactValidation';
import Login from './modules/login';

const register = new Login('.form-register');
const signIn = new Login('.form-signIn');
const contact = new contactValidation('.form-contact');

register.init();
signIn.init();
contact.init();

// import './assets/css/style.css';
