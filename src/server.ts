import express from 'express';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello World"});
})

app.post("/courses", (req, res) => {
  const { name } = req.body;

  return res.json({ name });
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
