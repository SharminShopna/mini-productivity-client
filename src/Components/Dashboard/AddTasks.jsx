import React, { useState } from 'react';
import "../../Shared/Pro.css"
import { toast } from 'react-toastify';

const AddTasks = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(task),
      });

      const data = await res.json();
      if (data.insertedId) {
         toast.success('Task added successfully!');
        setTask({ title: '', description: '', dueDate: '', priority: 'medium' });
      }  else {
        toast.error('Failed to add task!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error adding task!');
    }
  };

  return (
    <div className='mt-24 md:mt-36 max-w-md mx-auto p-4 rounded '>
      <h1 className='text-5xl text-center text-teal-800 italic font-bold mb-4'>ADD NEW TASK</h1>
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
          className='w-full p-2 text-teal-800  border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        />
        <input
          type='date'
          name='dueDate'
          value={task.dueDate}
          onChange={handleChange}
          className='w-full p-2 text-teal-800  border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        />
        <select
          name='priority'
          value={task.priority}
          onChange={handleChange}
          className='w-full p-2 text-teal-800  border-2 border-teal-700 focus:border-teal-500 focus:outline-none focus:ring-0 rounded'
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
        <button type='submit' className='proCardButton w-full text-lg font-semibold'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
