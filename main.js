import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// Crud Operation For adding Student Data in Database

//Create
app.post("/student", (req, res) => {
  res.json({
    message: "Data Created Successfully",
  });
});

//Read
app.fetch("/student", (req, res) => {
  res.json({
    message: "Data Fetched Successfully",
  });
});

//Update
app.put("/student:id", (req, res) => {
  res.json({
    message: "Data Updated Successfully",
  });
});

//Delete

app.delete("/student:id", (req, res) => {
  res.json({
    message: "Data Deleted Successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
