  import React, { useState, useEffect } from "react";
  import "./AddCourse.css"; // Reuse AddCourse styling
  import { useNavigate, useParams } from "react-router-dom";

  function EditCourse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState({
      name: "",
      path_id: "",
      img_url: "",
    });
    const [lessons, setLessons] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
      // Static mode: Mock loading from courseData.js
      // Since 'id' in URL might be numeric index or path_id, we try to find it
      const foundCourse = Object.keys(courseData).find(key => key === id) || 
                          Object.values(courseData).find(c => c.id === parseInt(id));
      
      if (courseData[id] || foundCourse) {
        const data = courseData[id] || foundCourse;
        setCourseData({
          name: data.title,
          path_id: id,
          img_url: data.img_url || "",
        });
        setLessons(data.lessons || []);
        setQuestions(data.questions || []);
      }
      setLoading(false);
    }, [id]);

    const handleCourseChange = (e) => {
      setCourseData({ ...courseData, [e.target.name]: e.target.value });
    };

    const handleLessonChange = (index, e) => {
      const updatedLessons = [...lessons];
      updatedLessons[index][e.target.name] = e.target.value;
      setLessons(updatedLessons);
    };

    const addLesson = () => {
      setLessons([...lessons, { title: "", video_id: "" }]);
    };

    const removeLesson = (index) => {
      if (lessons.length === 1) return;
      setLessons(lessons.filter((_, i) => i !== index));
    };

    const handleQuestionChange = (index, e) => {
      const updatedQuestions = [...questions];
      updatedQuestions[index][e.target.name] = e.target.value;
      setQuestions(updatedQuestions);
    };

    const addQuestion = () => {
      setQuestions([
        ...questions,
        {
          question_text: "",
          option_a: "",
          option_b: "",
          option_c: "",
          option_d: "",
          correct_option: "A",
        },
      ]);
    };

    const removeQuestion = (index) => {
      if (questions.length === 1) return;
      setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess("");

      // Mock save for static demo
      setTimeout(() => {
        setSuccess("Demo Mode: Changes updated successfully (not persisted)!");
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
      }, 1000);
    };

    if (loading) return <div className="add-course-container">Loading data...</div>;

    return (
      <div className="add-course-container">
        <div className="add-course-card">
          <div className="demo-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "8px", borderRadius: "6px", marginBottom: "15px", fontSize: "14px", textAlign: "center", border: "1px solid #f59e0b" }}>
            ⚠️ <strong>Static Demo Mode:</strong> Updates made here will not be saved to a database.
          </div>
          <h2> Edit Course Details</h2>

          {error && <div className="error-banner">{error}</div>}
          {success && <div className="success-banner">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3> Course Details</h3>
              <div className="input-group">
                <label>Course Name</label>
                <input
                  type="text"
                  name="name"
                  value={courseData.name}
                  onChange={handleCourseChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Path ID</label>
                <input
                  type="text"
                  name="path_id"
                  value={courseData.path_id}
                  onChange={handleCourseChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="img_url"
                  value={courseData.img_url}
                  onChange={handleCourseChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h3> Course Lessons (Videos)</h3>
              {lessons.map((lesson, index) => (
                <div key={index} className="lesson-form-row">
                  <div className="input-group">
                    <label>Lesson Title</label>
                    <input
                      type="text"
                      name="title"
                      value={lesson.title}
                      onChange={(e) => handleLessonChange(index, e)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>YouTube Video ID</label>
                    <input
                      type="text"
                      name="video_id"
                      value={lesson.video_id}
                      onChange={(e) => handleLessonChange(index, e)}
                      required
                    />
                  </div>
                  {lessons.length > 1 && (
                    <button type="button" onClick={() => removeLesson(index)} className="remove-btn">Remove</button>
                  )}
                </div>
              ))}
              <button type="button" className="add-question-btn" onClick={addLesson}>
                + Add Another Lesson
              </button>
            </div>

            <div className="form-section">
              <h3> Quiz Questions</h3>
              {questions.map((q, index) => (
                <div key={index} className="question-form">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4>Question {index + 1}</h4>
                    {questions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeQuestion(index)}
                        style={{ color: "#ef4444", background: "none", border: "none", cursor: "pointer" }}
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="input-group">
                    <label>Question Text</label>
                    <textarea
                      name="question_text"
                      rows="2"
                      value={q.question_text}
                      onChange={(e) => handleQuestionChange(index, e)}
                      required
                    />
                  </div>

                  <div className="options-grid">
                    {["a", "b", "c", "d"].map((opt) => (
                      <div className="input-group" key={opt}>
                        <label>Option {opt.toUpperCase()}</label>
                        <input
                          type="text"
                          name={`option_${opt}`}
                          value={q[`option_${opt}`]}
                          onChange={(e) => handleQuestionChange(index, e)}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div className="input-group">
                    <label>Correct Option</label>
                    <select
                      name="correct_option"
                      value={q.correct_option}
                      onChange={(e) => handleQuestionChange(index, e)}
                      required
                    >
                      <option value="A">Option A</option>
                      <option value="B">Option B</option>
                      <option value="C">Option C</option>
                      <option value="D">Option D</option>
                    </select>
                  </div>
                  <hr style={{ margin: "20px 0", border: "0.5px solid #f1f5f9" }} />
                </div>
              ))}
              <button type="button" className="add-question-btn" onClick={addQuestion}>
                + Add Another Question
              </button>
            </div>

            <button type="submit" className="submit-all-btn" disabled={loading}>
              {loading ? "Saving..." : "Update Course"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  export default EditCourse;
