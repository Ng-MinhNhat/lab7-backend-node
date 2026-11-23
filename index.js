const express = require('express');
const app = express();

// Render tự động cấp cổng qua biến môi trường PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    project: 'Lab 7 - CI/CD Backend Node.js',
    status: 'Running',
    version: 'Phiên bản 1' // Đổi thành Phiên bản 2 ở bước kiểm thử
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});