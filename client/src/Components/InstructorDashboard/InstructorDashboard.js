import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InstructorDashboard() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [evaluation, setEvaluation] = useState({
        attendance: '',
        marks: '',
        grade: '',
        therapyType: '',
        remarks: ''
    });

    useEffect(() => {
        async function fetchStudents() {
            try {
                const res = await axios.get('http://localhost:4000/students');
                setStudents(res.data.students);

            } catch (error) {
                console.error('Error fetching students:', error);
            }
        }

        fetchStudents();
    }, []);

    const handleEvaluationSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/evaluate-student/${selectedStudent.email}`, evaluation);
            if (res.data.message === 'evaluation saved') {
                alert('Evaluation saved successfully');
                setEvaluation({
                    attendance: '',
                    marks: '',
                    grade: '',
                    therapyType: '',
                    remarks: ''
                });
                setSelectedStudent(null);
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.error('Error saving evaluation:', error);
        }
    };

    return (
        <div className="container mt-4 mb-4">
            <h1 className="mb-2">Instructor Dashboard</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Students</h2>
                    <ul className="list-group">
                        {students.map(student => (
                            <li key={student._id} className={`list-group-item ${selectedStudent === student ? 'active' : ''}`} onClick={() => setSelectedStudent(student)}>
                                {student.firstname} {student.lastname}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {selectedStudent && (
                        <div>
                            <h2>Evaluate {selectedStudent.firstname} {selectedStudent.lastname}</h2>
                            <form onSubmit={handleEvaluationSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Attendance:</label>
                                    <input type="text" className="form-control" value={evaluation.attendance} onChange={(e) => setEvaluation({ ...evaluation, attendance: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Marks:</label>
                                    <input type="number" className="form-control" value={evaluation.marks} onChange={(e) => setEvaluation({ ...evaluation, marks: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Grade:</label>
                                    <input type="text" className="form-control" value={evaluation.grade} onChange={(e) => setEvaluation({ ...evaluation, grade: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Therapy Type:</label>
                                    <input type="text" className="form-control" value={evaluation.therapyType} onChange={(e) => setEvaluation({ ...evaluation, therapyType: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Remarks:</label>
                                    <textarea className="form-control" value={evaluation.remarks} onChange={(e) => setEvaluation({ ...evaluation, remarks: e.target.value })} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Evaluation</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InstructorDashboard;
