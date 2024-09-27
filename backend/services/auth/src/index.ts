import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { usersRouter } from './routes/users';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

console.log('Hello World');

app.get('/api/v1/users', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  res.send({ todos: todos.slice(0, 3), count: 10 });
});

app.use(usersRouter);

// app.get('/api/v1/users/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ userid: id, count: 10 });
// });

// app.use('/api/v1', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
