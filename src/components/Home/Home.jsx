import "./Home.css";
import Header from "../Header/Header";

import htmlImg from "../../assets/html.jpg";
import cssImg from "../../assets/css.jpg";
import jsImg from "../../assets/js.jpg";



function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>
          Accelerate Your <span>Learning</span> Curve
        </h1>

        <p>
          Premium interactive courses designed to take you from beginner
          to professional engineer in record time.
        </p>
      </section>

      <section className="courses">
        <h2>Featured Curriculum</h2>

        <div className="course-grid">

          <div className="course-card">
            <img src={jsImg} alt="JavaScript"/>
            <h3>JavaScript Fundamentals</h3>
            <p>Learn core JavaScript concepts.</p>
            <button>Start Course</button>
          </div>

          <div className="course-card">
            <img src={htmlImg} alt="React"/>
            <h3>React Development</h3>
            <p>Build modern apps using React.</p>
            <button>Start Course</button>
          </div>

          <div className="course-card">
            <img src={cssImg} alt="Python"/>
            <h3>Python Programming</h3>
            <p>Master Python from basics.</p>
            <button>Start Course</button>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;