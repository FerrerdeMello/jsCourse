const { cpfs, ips } = require("./base");

  console.log(cpfs);
  let regExp1 = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
  console.log('CPF : More complex: ', cpfs.match(regExp1));
    regExp1 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
  console.log('CPF : More Simple: ',cpfs.match(regExp1));
    regExp1 = /(\d{3}\.){2}\d{3}-\d{2}/g;
  console.log('CPF : More Simple +++: ',cpfs.match(regExp1));

  console.log(ips);
  const regex = /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;
  console.log(ips.match(regex));

