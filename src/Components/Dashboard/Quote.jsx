import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import quoteImg from '../../assets/logo/w1.png'; 
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const { isDarkMode } = useContext(AuthContext);

  const fetchQuote = async () => {
    try {
      const res = await fetch('http://localhost:5000/quote'); 
      const data = await res.json();

      if (data.quote) {
        setQuote(data.quote);
        setAuthor(data.author || 'Unknown');
      } else {
        toast.info("No quotes found.");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error("Failed to fetch quote.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="mt-24 max-w-xl mx-auto p-6">
      <h2 className="text-5xl text-center text-teal-800 italic font-bold mb-4"> RANDOM MOTIVATIONAL QUOTE</h2>

      <button
        onClick={fetchQuote}
        className="mb-6 px-4 py-2 proCardButton block mx-auto text-lg font-semibold"
      >
        Get Another Quote
      </button>

      {quote && (
        <div className={` border border-teal-800 border-dashed p-4 rounded-lg shadow-md text-center ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
          {/* ✅ Image inside the quote card */}
          <img src={quoteImg} alt="Quote" className="w-full h-52 rounded-2xl mx-auto mb-4" />

          <p className={`text-xl italic  mb-2 ${isDarkMode ? "text-gray-200" : "text-teal-800"}`}>"{quote}"</p>
          <p className={`text-md font-semibold ${isDarkMode ? "text-teal-400" : "text-orange-600"}`}>- {author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
