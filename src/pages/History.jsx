import { useEffect, useState } from "react";
function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("quizHistory")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="center">
      <h1> Attempt History</h1>
      {history.length === 0 ? (
        <p>No attempts yet</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="card">
            <p><b>Score:</b> {item.score} / {item.total}</p>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Topic:</b> {item.topic}</p>
          </div>
        ))
      )}
    </div>
  );
}


export default History