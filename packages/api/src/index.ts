import express, { Express, Request, Response } from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 1337;
const clientBuildPath = path.resolve(__dirname, '../../client/build');

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use(express.json());

app.use(express.static(clientBuildPath));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.post('/api/calculations', (req: Request, res: Response) => {
  const formData = req.body;

  res.json({ message: 'Calculation received', data: formData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
