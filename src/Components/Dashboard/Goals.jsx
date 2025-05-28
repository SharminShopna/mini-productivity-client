import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/goals', { withCredentials: true })
            .then(res => {
                setGoals(res.data);
            })
            .catch(err => {
                console.error('Error fetching goals:', err);
            });
    }, []);


    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this goal!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/goals/${id}`, {
                    withCredentials: true,
                });
                setGoals(prev => prev.filter(goal => goal._id !== id));

                Swal.fire(
                    'Deleted!',
                    'Your goal has been deleted.',
                    'success'
                );
            } catch (err) {
                console.error('Error deleting goal:', err);
                Swal.fire('Error', 'Something went wrong while deleting.', 'error');
            }
        }
    };



    return (
        <div className='max-w-5xl mx-auto mt-12 md:mt-32 px-4'>
            <h2 className='text-5xl text-center text-teal-800 italic font-bold mb-4'>MY GOALS</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg mt-12">
                <table className="table-auto w-full border-collapse">
                    <thead className='bg-teal-800 text-gray-200'>
                        <tr>
                            <th className='p-4 border'>#</th>
                            <th className='p-4 border'>Goal</th>
                            <th className='p-4 border'>Type</th>
                            <th className='p-4 border'>Created At</th>
                            <th className='p-4 border text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goals.map((goal, index) => (
                            <tr key={goal._id} className='hover:bg-teal-100 transition'>
                                <td className='p-3 border text-center'>{index + 1}</td>
                                <td className='p-3 border'>{goal.goal}</td>
                                <td className='p-3 border capitalize'>{goal.type}</td>
                                <td className='p-3 border'>{new Date(goal.createdAt).toLocaleDateString()}</td>
                                <td className='p-3 border text-center'>
                                    <div className="flex justify-center gap-3 text-xl">
                                        <button onClick={() => navigate(`/dashboard/updateGoals/${goal._id}`)} className="hover:text-green-500 text-green-700">
                                            <FiEdit />
                                        </button>
                                        <button onClick={() => handleDelete(goal._id)} className="text-red-600 hover:text-red-500 ">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {!goals.length && (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-gray-500">No goals found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Goals;
