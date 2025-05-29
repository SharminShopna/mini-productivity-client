import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      // 🌐 Changed from direct API to backend API
      const res = await fetch('http://localhost:5000/quote', {
        credentials: 'include' // needed if backend is using cookies
      });

      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to fetch motivational quote.');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="mt-24 max-w-xl mx-auto p-6 bg-orange-50 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">✨ Random Motivational Quote</h2>
      <button
        onClick={fetchQuote}
        className="mb-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 block mx-auto"
      >
        Get Another Quote
      </button>

      {quote && (
        <div className="text-center">
          <p className="text-xl italic text-gray-800 mb-2">"{quote}"</p>
          <p className="text-md font-semibold text-orange-600">- {author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
