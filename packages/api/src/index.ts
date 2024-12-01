import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.listen(1337, () => {
  console.log('Server is running on http://localhost:1337');
});
