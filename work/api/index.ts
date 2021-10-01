import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Test Express!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));