import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const COLORS = ['#14B8A6', '#115E59'];

const DashboardHome = () => {
    const [taskStats, setTaskStats] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {

            try {

                // Fetch tasks
                const taskRes = await axios.get('https://mini-productivity-server-2.onrender.com/tasks', {
                    withCredentials: true,
                });

                const completed = taskRes.data.filter(task => task.status === 'completed').length;
                const incomplete = taskRes.data.filter(task => task.status === 'incomplete').length;
                const total = completed + incomplete;

                if (total === 0) {
                    setTaskStats([]);
                } else {
                    setTaskStats([
                        { name: 'Completed', value: completed },
                        { name: 'Incomplete', value: incomplete },
                    ]);
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="mt-20 p-6 text-center">
            <h1 className="text-5xl text-center text-teal-800 italic font-bold mb-4">WELCOME TO DASHBOARD!</h1>

            <h2 className="text-4xl text-center text-orange-400 italic font-bold mt-12 mb-4">MY TASK STATUS</h2>

            {taskStats.length === 0 ? (
                <p className="text-teal-800 mt-4">No task data available yet.</p>
            ) : (
                <div className="flex justify-center">
                    <PieChart width={420} height={420}>
                        <Pie
                            data={taskStats}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) =>
                                percent > 0 ? `${name}: ${(percent * 100).toFixed(0)}%` : ''
                            }
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {taskStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            )}
        </div>
    );
};

export default DashboardHome;
