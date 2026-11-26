import express, {type Request, type Response} from 'express';
import cors from "cors";

const app = express();
app.use(cors({origin :"http://localhost:4000/"}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req : Request, res : Response) => {

  res.send("Hello Express Browser")
})

export default app;