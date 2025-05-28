import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
  });

  // Fetch existing task
  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setTask({
            title: data.title || '',
            description: data.description || '',
            dueDate: data.dueDate || '',
            priority: data.priority || 'medium',
          });
        }
      })
      .catch(err => console.error('Failed to fetch task:', err));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(task),
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success('Task updated successfully');
        navigate('/dashboard/tasks'); 
      }
    } catch (err) {
      toast.error('Update failed:', err);
    }
  };

  return (
    <div className='mt-24 md:mt-36 max-w-md mx-auto p-4 rounded '>
      <h1 className='text-5xl text-center text-teal-800 italic font-bold mb-4'>UPDATE TASK</h1>
      <form onSubmit={handleSubmit} className='space-y-4 mt-16'>
        <input
          name='title'
          value={task.title}
          onChange={handleChange}
          placeholder='Task Title'
          className='w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
          required
        />
        <textarea
          name='description'
          value={task.description}
          onChange={handleChange}
          placeholder='Description'
          className='w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        />
        <input
          type='date'
          name='dueDate'
          value={task.dueDate}
          onChange={handleChange}
          className='w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        />
        <select
          name='priority'
          value={task.priority}
          onChange={handleChange}
          className='w-full p-2 text-teal-800 border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
        <button type='submit' className='proCardButton w-full text-lg font-semibold'>
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
