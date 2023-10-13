import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

//Handling Get Requests at root 
const greeting = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Hello World");
}

app.get("/", greeting)

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});