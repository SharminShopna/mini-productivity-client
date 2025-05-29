import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddGoals = () => {
  const [goal, setGoal] = useState('');
  const [type, setType] = useState('weekly');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://mini-productivity-server-2.onrender.com/goals',
        { goal, type },
        { withCredentials: true }
      );
      toast.success('Goal added successfully');
      setGoal('');
      setType('weekly');
    } catch (error) {
      console.error('Error adding goal', error);
      toast.error('Failed to add goal');
    }
  };

  return (
    <div className="mt-12 md:mt-42 p-4 max-w-xl mx-auto">
      <h2 className="text-5xl text-center text-teal-800 italic font-bold mb-4">ADD GOAL</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-12">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal"
          className="w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button
          type="submit"
          className="proCardButton w-full text-lg font-semibold"
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoals;
