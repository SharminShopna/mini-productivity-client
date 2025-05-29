import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateGoals = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');
  const [type, setType] = useState('weekly');

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const res = await axios.get(`https://mini-productivity-server-2.onrender.com/goals/${id}`, {
          withCredentials: true,
        });
        setGoal(res.data.goal);
        setType(res.data.type);
      } catch (err) {
        console.error('Failed to fetch goal:', err);
      }
    };
    fetchGoal();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://mini-productivity-server-2.onrender.com/goals/${id}`, {
        goal,
        type
      }, {
        withCredentials: true
      });

      toast.success('Goal updated successfully!');
      navigate('/dashboard/goals'); 
    } catch (err) {
      toast.error('Update failed:', err);
    }
  };

  return (
    <div className="mt-12 md:mt-42 p-4 max-w-xl mx-auto">
      <h2 className="text-5xl text-center text-teal-800 italic font-bold mb-4">UPDATE GOAL</h2>
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
          Update Goal
        </button>
      </form>
    </div>
  );
};

export default UpdateGoals;
