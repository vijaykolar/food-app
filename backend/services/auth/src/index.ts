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
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
