const express = require('express');
const multer = require('multer');
const {spawn} = require('child_process');
const cors = require('cors');

const app = express()
const port = 3001
const upload = multer({ dest: 'uploads/' });
app.use(cors());

app.post('/processImage', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded.');
        }

        const uploadedFile = req.file;
        const pythonProcess = spawn('python', ['testing.py', uploadedFile.path]);

        pythonProcess.stdout.on('data', (data) => {
            const imageRes = data.toString();
            res.json({ imageRes });
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error from Python script: ${data}`);
            res.status(500).json({ error: 'Image process failed' });
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python Script exited with code ${code}`);
        });
    } catch (error) {
        console.error(`Error processing file: ${error.message}`);
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});