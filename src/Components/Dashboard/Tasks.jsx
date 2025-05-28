import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err));
    }, []);

    // Mark button ----->
    const handleMarkComplete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/tasks/${id}/complete`, {
                method: 'PATCH',
                credentials: 'include'
            });
            const data = await res.json();
            if (data.modifiedCount > 0) {
                setTasks(prev =>
                    prev.map(task =>
                        task._id === id ? { ...task, status: 'completed' } : task
                    )
                );
            }
        } catch (err) {
            console.error('Error marking task complete:', err);
        }
    };


    return (
        <div className="mt-10 md:mt-32 p-4 overflow-x-auto">
            <h1 className="text-5xl text-center text-teal-800 italic font-bold mb-6">MY TASKS</h1>
            <table className="w-full border mt-12 md:mt-24 rounded text-sm md:text-base">
                <thead className="bg-teal-800 text-gray-200">
                    <tr>
                        <th className="py-2 px-3 border">Title</th>
                        <th className="py-2 px-3 border">Description</th>
                        <th className="py-2 px-3 border">Due Date</th>
                        <th className="py-2 px-3 border">Priority</th>
                        <th className="py-2 px-3 border">Status</th>
                        <th className="py-2 px-3 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task._id} className="text-center hover:bg-teal-100 transition">
                            <td className="py-2 px-3 border">{task.title}</td>
                            <td className="py-2 px-3 border">{task.description}</td>
                            <td className="py-2 px-3 border">{task.dueDate}</td>
                            <td className="py-2 px-3 border capitalize">{task.priority}</td>
                            <td className="py-2 px-3 border capitalize">{task.status}</td>
                            <td className="py-2 px-3 border-t flex justify-center gap-3">
                                {task.status === 'completed' ? (
                                    <span className="text-green-600"><FaCheckCircle className="opacity-50" /></span>
                                ) : (
                                    <button onClick={() => handleMarkComplete(task._id)} className="text-green-600 hover:text-green-800">
                                        <FaCheckCircle />
                                    </button>
                                )}
                                <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                                <button className="text-red-600 hover:text-red-800"><FaTrashAlt /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tasks;
