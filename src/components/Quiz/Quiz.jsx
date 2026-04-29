import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Quiz.css";
import courseData from "../../data/courseData"; // Import static data

function Quiz() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [questions, setQuestions] = useState(courseData[id]?.questions || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false); // No loading for static data

  useEffect(() => {
    if (courseData[id]) {
      setQuestions(courseData[id].questions);
    }
  }, [id]);


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    if (!selectedOption) return;

    // Check answer
    if (selectedOption === questions[currentIndex].correct_option) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      // Static mode: We don't save to backend. 
      // Progress is handled locally via CourseDetail's localStorage if needed.
    }

  };

  if (loading) return <div className="quiz-bg">Loading Quiz...</div>;
  if (questions.length === 0) return <div className="quiz-bg">No questions found!</div>;

  if (isFinished) {
    return (
      <div className="quiz-container">
        <div className="quiz-card result-card">
          <h2>Quiz Completed! 🎉</h2>
          <div className="score-display">
            <span className="score">{score}</span> / {questions.length}
          </div>
          <p>{score / questions.length >= 0.5 ? "Well done! You passed the quiz." : "Keep practicing! You can do better."}</p>
          <button className="next-btn" onClick={() => navigate("/")}>Go Home</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
        <span className="progress">Question {currentIndex + 1} of {questions.length}</span>
      </div>

      <div className="quiz-card">
        <div className="course-tag">{id.toUpperCase()}</div>
        <p className="question">{currentQuestion.question_text}</p>

        <div className="options">
          {['A', 'B', 'C', 'D'].map((opt) => {
            const optionText = currentQuestion[`option_${opt.toLowerCase()}`];
            if (!optionText) return null;
            return (
              <button 
                key={opt}
                className={`option-btn ${selectedOption === opt ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(opt)}
              >
                <span className="opt-letter">{opt}</span>
                {optionText}
              </button>
            );
          })}
        </div>

        <button 
          className="next-btn" 
          disabled={!selectedOption}
          onClick={handleNext}
        >
          {currentIndex + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;