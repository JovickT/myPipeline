const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the Backend! 🚀" });
});

// Route de Healthcheck (indispensable pour le DevOps)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});