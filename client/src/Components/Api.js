import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'bootstrap/dist/css/bootstrap.min.css';

// Replace with your actual API key
const API_KEY = 'AIzaSyCjU_hIPVvzoi5_s0bfP31ytdJP2CM8OS4';
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const Api = () => {
  const [ans, setAns] = useState('');
  const [que, setQue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const prompt = que;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Remove special symbols and clean up the text
      const cleanedText = cleanText(text);

      // Format text to make certain words bold
      const formattedText = formatText(cleanedText);

      setAns(formattedText);
    } catch (error) {
      console.error('Error generating content:', error);
      setAns('Error generating content');
    }
  };

  // Function to remove special symbols and clean up text
  const cleanText = (text) => {
    // Remove special symbols using regex
    return text.replace(/[^\w\s]/gi, '');
  };

  // Function to format text with bold where needed
  const formatText = (text) => {
    // Example: making certain words bold
    const boldWords = ['important', 'note', 'warning']; // Add words to be bolded as needed
    const words = text.split(' ');

    return (
      <div>
        {words.map((word, index) => {
          if (boldWords.includes(word.toLowerCase())) {
            return <strong key={index}>{word} </strong>;
          } else {
            return <span key={index}>{word} </span>;
          }
        })}
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="questionInput" className='mb-3'>Enter your question:</label>
          <input
            type="text"
            className="form-control"
            id="questionInput"
            value={que}
            onChange={(e) => setQue(e.target.value)}
            placeholder="Type your question here"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <div className="border p-3">
          {ans}
        </div>
      </div>
    </div>
  );
};

export default Api;
