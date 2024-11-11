import express from "express";
import mongoose from "mongoose";
import guestbookRouter from "./routes/guestbook.route.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(process.cwd(), "public")));

app.use('/guestbook', guestbookRouter)
/*
//미들웨어
app.use((req,res,next)=>{
    console.log(`요청이 온 시간: ${new Date().toISOString()}`);
    next(); //나머지 것들 실행 위해 필요
});
//요청을 json으로 바꿔준다. body도 json처럼 볼 수 있음
app.use(express.json());
//
*/

//라우터
app.get("/", (req, res)=>{
    res.send("루트 경로입니당");
})

//서버실행
app.listen(8080, () => {
    console.log(`${PORT}번 포트로 서버 실행`);
});