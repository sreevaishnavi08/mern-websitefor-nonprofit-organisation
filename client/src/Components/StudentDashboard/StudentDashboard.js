import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CounterContext } from '../CounterContext';
import Api from '../Api'

function StudentDashboard() {
    const [evaluations, setEvaluations] = useState([]);
    const { user } = useContext(CounterContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvaluations() {
            try {
                if (user && user.email) {
                    const res = await axios.get(`http://localhost:4000/evaluations/${user.email}`);
                    setEvaluations(res.data.evaluations);
                }
            } catch (error) {
                console.error('Error fetching evaluations:', error);
            } finally {
                setLoading(false);
            }
        }

        if (user && user.email) {
            fetchEvaluations();
        }
    }, [user]); // Dependency on user to re-fetch evaluations when user changes

    if (loading) {
        return <p>Loading...</p>; // Show loading indicator while fetching data
    }

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">Student Dashboard</h1>
                    <h2 className="card-subtitle mb-4">Evaluations</h2>
                    <ul className="list-group">
                        {evaluations.map(evaluation => (
                            <li key={evaluation._id} className="list-group-item">
                                <p><strong>Attendance:</strong> {evaluation.attendance}</p>
                                <p><strong>Marks:</strong> {evaluation.marks}</p>
                                <p><strong>Grade:</strong> {evaluation.grade}</p>
                                <p><strong>Therapy Type:</strong> {evaluation.therapyType}</p>
                                <p><strong>Remarks:</strong> {evaluation.remarks}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Api/>
        </div>
    );
}

export default StudentDashboard;
