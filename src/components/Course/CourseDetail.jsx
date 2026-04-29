import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import courseData from "../../data/courseData";
import "./Course.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(courseData[id]);
  const [loading, setLoading] = useState(false); // No loading for static
  const [video, setVideo] = useState("");
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    // Static mode: Always use courseData[id]
    if (courseData[id]) {
      setCourse(courseData[id]);
      setVideo(courseData[id].lessons[0].videoId);
    } else {
      setCourse(null);
    }
  }, [id]);





  const markComplete = (lessonId) => {
    if (!completed.includes(lessonId)) {
      setCompleted([...completed, lessonId]);
    }
  };

  if (loading) return <div className="course-container">Loading...</div>;
  if (!course) return <div className="course-container"><h1>Course Not Found</h1></div>;

  const progressCount = completed.length;

  return (
    <div className="course-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back to Catalog
      </button>

      <div className="course-layout">
        <div className="course-main">
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${video}?enablejsapi=1&autoplay=1&rel=0`}
              title="Lesson Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="course-info-card">
            <h1>{course.title}</h1>
            <p className="course-desc">
              Master this course by completing all lessons and passing the final quiz with excellence.
            </p>

            <div className="action-row">
              <button
                className="complete-btn"
                onClick={() => {
                  const currentLesson = course.lessons.find((l) => l.videoId === video);
                  if (currentLesson) markComplete(currentLesson.id);
                }}
              >
                {completed.includes(course.lessons.find(l => l.videoId === video)?.id)
                  ? "Completed ✓"
                  : "Mark Lesson as Complete"}
              </button>

              <button className="quiz-nav-btn" onClick={() => navigate(`/quiz/${id}`)}>
                Open Final Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="course-sidebar">
          <div className="sidebar-header">
            <h2>Course Content</h2>
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(progressCount / course.lessons.length) * 100}%` }}
                ></div>
              </div>
              <div className="progress-stats">
                {Math.round((progressCount / course.lessons.length) * 100)}% Complete ({progressCount}/{course.lessons.length})
              </div>
            </div>
          </div>

          <div className="lesson-list">
            {course.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`modern-lesson-card ${video === lesson.videoId ? "active" : ""}`}
                onClick={() => setVideo(lesson.videoId)}
              >
                <div className="lesson-status-icon">
                  {completed.includes(lesson.id) ? "✅" : (video === lesson.videoId ? "▶️" : "⭕")}
                </div>
                <div className="lesson-title">
                  {index + 1}. {lesson.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;