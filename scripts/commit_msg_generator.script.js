const Clipboards = require('@book-junction/clipboard/build');
const clipboard = new Clipboards.default();

async function write(text = '') {
  await clipboard.copy(text);
  console.log(text);
}

const type = process.argv[3];
const date = new Date().toLocaleDateString('hi-In');
let message = '';

for (let i = 5; i < process.argv.length - 1; i++) message += process.argv[i] + ' ';
message += process.argv[process.argv.length - 1];

message = `${date} - ${type}: ${message}`;
write(message);
