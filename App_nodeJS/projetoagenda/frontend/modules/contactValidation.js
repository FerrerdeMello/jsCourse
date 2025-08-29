import validator  from 'validator';

export default class contactValidation {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nameInput = el.querySelector('input[name="name"]');
    const surnameInput = el.querySelector('input[name="surname"]');     
    const emailInput = el.querySelector('input[name="email"]');
    const phonedInput = el.querySelector('input[name="phone"]'); 
    let error = false;
    
    if(nameInput.value.length <1) {
      alert('The field name is required.');
      error = true;
    }
    if(!validator.isEmail(emailInput.value)) {
      alert('Invalid e-mail!');
      error = true;
    }
    if(emailInput.value.length <1 && phonedInput.value.length <1) {
      alert('At least one contact must be provided: email or telephone.');  
      error = true;
    }
 
    if(!error) el.submit();

  }
}
