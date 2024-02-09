import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [htmlText, setHtmlText] = useState('');

  const handleInputChange = (event) => {
    const text = event.target.value;
    setMarkdownText(text);

    // Making a request to the server to convert Markdown to HTML
    axios.post('http://localhost:3001/markdown', { markdownText: text })
      .then(response => setHtmlText(response.data.htmlText))
      .catch(error => console.error('Error converting Markdown:', error));
  };

  return (
    <div className="App">
      <h1 className='markdown-text'>Markdown Editor</h1>
      <div className="pane-labels">
      <div className="editor-pane">
        <textarea
          className='editor-textarea'
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
        />
      </div>
      <div className="preview-pane">
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
      </div>
    </div>
    </div>
  );
}

export default App;
