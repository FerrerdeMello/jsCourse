
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz @| 0123456789 |';

const cpfs = `
Os CPFs válidos são:
123.456.789-10
987.654.321-00
111.222.333-44
555.666.777-88
`;

const cpfs2 = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a-00
`;

const ips = `
  Lista de IPs:
  0.0.0.0
  192.168.0.25
  10.10.5.12
  255.255.255.255
`;


const files = [
  'Attention.jpg',
  'PHOTO.jpeeeeeeg',
  'My dog.jpg',
  'My dog.JPG',
  'My dog.JPEG',
  'husband.png',
  'shopping list.txt'
];

const html = `<p>Olá mundo!</p> <p>Olá de novo!</p> <div>Conteúdo da div</div> <span>Conteúdo do span</span>`;

const text = `The Beatles foi uma banda de rock britânica formada na cidade de Liverpool em 1960. Com os integrantes John Lennon, Paul McCartney, George Harrison e Ringo Starr, tornou-se amplamente reconhecido como o maior e mais influente grupo musical da história — tendo sido essencial para o desenvolvimento da contracultura da década de 1960 e para o reconhecimento da música popular como forma de arte. Enraizados no skiffle, beat e o rock and roll dos anos 1950, os Beatles mais tarde experimentaram com diversos gêneros, desde baladas pop e a música indiana até a música psicodélica e o hard rock, e incorporaram elementos clássicos de maneiras inovadoras. Em meados da década de 1960, a imensa popularidade da banda tornou-se conhecida como a "Beatlemania", mas conforme a música do grupo crescia em sofisticação, liderada pelos principais compositores Lennon e McCartney, seus membros começaram a ser percebidos como uma incorporação dos ideais compartilhados pelas revoluções socioculturais da era. Grupo de músicos até hoje reverenciado! Gruuuupoooo!!!`;

module.exports = {
  alphabet,
  cpfs,
  cpfs2,
  ips,
  files,
  html,
  text,
}