const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/user', (req, res) => {
    res.json({ name: 'John Doe', age: 30, email: 'john@gmail.com' });
})

app.post('/add-line', (req, res) => {
    console.log(req.body);
    fs.appendFile('data.txt', req.body.line + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ message: 'Error writing to file', success: false });
        } else {
            console.log('Line added successfully');
            res.json({ message: 'Line added successfully', success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});