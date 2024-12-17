import express from "express";

const app = express();

app.use((req, res, next) => {
  const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.get("/cookie", (req, res) => {
  res.cookie("test", "cookie", {
    maxAge: 5000,
  });
  res.send("GET to '/cookie' successful (it's response from the server).");
});

app.listen(3000, () => console.log("Server is running on port 3000."));
