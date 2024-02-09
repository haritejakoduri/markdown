const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const {marked} = require('marked');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 

app.post('/markdown', (req, res) => {
    const { markdownText } = req.body;
    const htmlText = marked(markdownText);
    res.json({ htmlText });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
