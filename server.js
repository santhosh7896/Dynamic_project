const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit', upload.single('profilePicture'), (req, res) => {
  const formData = req.body;
  const fileData = req.file;

  console.log('Form Data:', formData);
  console.log('Uploaded File:', fileData);

  res.json({
    success: true,
    message: 'Form submitted successfully!',
    data: formData,
    file: fileData ? fileData.filename : null,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
