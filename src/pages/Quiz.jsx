import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { quizData } from "../utils/quizData";
import ProgressBar from "../components/ProgressBar";

export default function Quiz() {
  const { topic } = useParams();
  const questions = quizData[topic] || [];

  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];

  //  Timer
  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          nextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index, showResult]);

  //  Next
  const nextQuestion = () => {
    if (selected === current?.answer) {
      setScore((s) => s + 1);
    }

    setSelected(null);

    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setTimeLeft(10);
    } else {
      setShowResult(true);
      saveHistory();
    }
  };

  //  Save history
  const saveHistory = () => {
    const history =
      JSON.parse(localStorage.getItem("quizHistory")) || [];

    history.push({
      score,
      total: questions.length,
      topic,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("quizHistory", JSON.stringify(history));
  };

  //  Restart
  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setTimeLeft(10);
    setSelected(null);
    setShowResult(false);
  };

  if (!current) {
    return <div className="center"><h2>No questions</h2></div>;
  }

  //  Result
  if (showResult) {
    return (
      <div className="center">
        <h1>Quiz Completed 🎉</h1>
        <h2>Score: {score} / {questions.length}</h2>
        <button className="btn" onClick={restartQuiz}>
          Restart Quiz 🔁
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <ProgressBar current={index} total={questions.length} />

      <h2>⏱️{timeLeft}s</h2>
      <h3>{current.question}</h3>

      {current.options.map((opt, i) => (
        <button
          key={i}
          className={`option ${selected === opt ? "selected" : ""}`}
          onClick={() => setSelected(opt)}
        >
          {opt}
        </button>
      ))}

      <button className="btn" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}