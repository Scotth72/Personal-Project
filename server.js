const express = require('express');
const PORT = 5000;

const server = express();

server.get('/', (req, res) => {
    res.send('Hello World, from Express!');
});
server.get('/hobbits', (req, res) => {
    const hobbits = [
  {
    id: 1,
    name: 'Samwise Gamgee',
  },
  {
    id: 2,
    name: 'Frodo Baggins',
  },
  {
    id: 3,
    name: 'Test Hobbit',
  },
  
];
res.status(200).json(hobbits);
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${port}`)
});