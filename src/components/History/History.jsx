import React, { useState, useEffect } from "react";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({ name: "Admin", role: "admin" }); // Hardcoded for demo
    
    // Mock history data for static demo
    const mockHistory = [
      { course_name: "HTML", score: 2, total: 2, date: new Date().toISOString() },
      { course_name: "CSS", score: 1, total: 2, date: new Date().toISOString() },
      { course_name: "JAVASCRIPT", score: 2, total: 2, date: new Date().toISOString() },
    ];
    setHistory(mockHistory);
    setLoading(false);
  }, []);



  if (loading) return <div className="history-page">Loading History...</div>;

  return (
    <div className="history-page">
      <div className="history-container">
        <div className="history-header">
          <h1>Your Quiz History</h1>
          <p>Track your learning progress over time</p>
        </div>

        {!user ? (
          <p className="no-data">Please login to view your history.</p>
        ) : history.length === 0 ? (
          <p className="no-data">No quiz results found. Start a quiz to see your history here!</p>
        ) : (
          <div className="history-grid">
            {history.map((item, index) => (
              <div key={index} className="history-card">
                <div className="card-top">
                  <span className="course-name">{item.course_name}</span>
                  <span className="date">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <div className="card-bottom">
                  <div className="score-box">
                    <span className="score-val">{item.score}</span>
                    <span className="score-total">/ {item.total}</span>
                  </div>
                  <div className="percentage">
                    {Math.round((item.score / item.total) * 100)}%
                  </div>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${(item.score / item.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;