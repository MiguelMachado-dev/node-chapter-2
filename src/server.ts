import express from 'express';

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello World"});
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
