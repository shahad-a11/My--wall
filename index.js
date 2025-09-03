const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// خدمة الملفات الثابتة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// نقطة البداية: إرسال واجهة المستخدم
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
