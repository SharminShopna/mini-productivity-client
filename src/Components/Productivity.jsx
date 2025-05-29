import React, { useEffect, useState } from 'react';

const Productivity = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/tasks.json')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-5xl text-center text-teal-800 italic font-bold mb-6">Positive Habits for a Better You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-teal-700 border border-orange-400 px-5 py-6 rounded-xl shadow-md overflow-hidden"
          >
            <div className="text-5xl text-center mb-4">{task.icon}
              <h2 className="text-lg text-orange-400 font-semibold">{task.name}</h2>
              <p className="text-sm text-gray-200">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productivity;
