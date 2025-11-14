const express = require('express');
const app = express();

//          Criar,  ler,  atualizar, apagar
// CRUD ->  CREATE, READ, UPDATE,    DELETE
//          POST,   GET,  PUT,       DELETE

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      NomeCliente: <input type="text" name="name">
      <button> Send </button>
      <br>
      <button> Cancel </button>
    </form>
  `);
});

app.post('/', (req, res) => {
  res.send('I received the form: ');
});

app.get('/', (req, res) => {
  res.send('Hello <b>world!</b>');
});

app.get('/contact', (req, res) => {
  res.send('Thanks for your contact...');
});

app.listen(3000, () => {
  console.log('Please access this page: http://localhost:3000');
  console.log('Server running on port 3000!!!');
});


