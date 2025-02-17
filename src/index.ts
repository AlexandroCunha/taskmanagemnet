import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API de Gestão de Tarefas rodando com TypeScript!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
