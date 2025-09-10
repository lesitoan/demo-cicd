import app from './app';
const port = 3000;

console.log('hello');

app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('Hello World!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
