import { Link } from "react-router-dom";

function Topics() {
  return (
    <div>

      <h2>Select Topic</h2>

      <Link to="/quiz/React">
        <button>React Quiz</button>
      </Link>

      <Link to="/quiz/JavaScript">
        <button>JavaScript Quiz</button>
      </Link>

    </div>
  );
}

export default Topics;