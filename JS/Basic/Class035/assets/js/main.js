const elementos = [
  {tag: 'p', text: 'Qualquer texto que você quiser.'},
  {tag: 'div', text: 'Frase 2'},
  {tag: 'section', text: 'Frase 3'},
  {tag: 'footer', text: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, text } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(text);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
