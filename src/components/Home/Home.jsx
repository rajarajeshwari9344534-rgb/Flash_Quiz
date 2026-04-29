import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import coursesData from "../../data/courses"; // Use static data
// Fallback local images for demo
import htmlImg from "../../assets/html.webp";
import cssImg from "../../assets/css.jpg";
import jsImg from "../../assets/js.jpg";

function Home() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(coursesData); // Initialize with static data
  const [loading, setLoading] = useState(false); // No loading for static
  const [user, setUser] = useState({ role: "admin", name: "Admin" }); // Hardcoded Admin

  const getImg = (course) => {
    if (course.img_url && course.img_url.startsWith("http")) {
      return course.img_url;
    }
    const pathId = course.path_id || course.path; // Handle both
    if (pathId === "html") return htmlImg;
    if (pathId === "css") return cssImg;
    if (pathId === "js" || pathId === "javascript") return jsImg;
    return jsImg;
  };

  useEffect(() => {
    // Static mode: No longer reading from localStorage
  }, []);



  const handleDelete = async (e, courseId) => {
    e.stopPropagation(); // Prevent card click
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      const response = await fetch(`http://localhost:8000/courses/${courseId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCourses(courses.filter((c) => c.id !== courseId));
      } else {
        alert("Failed to delete course");
      }
    } catch (err) {
      alert("Error deleting course");
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Accelerate Your <span>Learning</span> Curve
          </h1>
          <p>FlashQuiz - Simple coding lessons for everyone. Start your journey today.</p>
          <button className="cta-btn" onClick={() => document.getElementById('featured').scrollIntoView({behavior: 'smooth'})}>
            Explore Courses
          </button>
        </div>
      </section>

      <section className="courses" id="featured">
        <h2>Featured Courses</h2>
        
        {loading ? (
          <div className="loader">Loading amazing lessons...</div>
        ) : (
          <div className="course-grid">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <div
                  key={index}
                  className="course-card"
                  onClick={() => navigate(`/course/${course.path || course.path_id}`)}
                >
                  <img src={getImg(course)} alt={course.name} />
                  <div className="card-info">
                    <h3>{course.name}</h3>
                    <p>Beginner Friendly</p>
                    
                    {user && user.role === "admin" ? (
                      <div className="admin-actions">
                        <button 
                          className="edit-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/edit-course/${course.path || course.path_id}`);
                          }}
                        >
                          Edit
                        </button>
                        <button 
                          className="delete-btn" 
                          onClick={(e) => {
                            e.stopPropagation();
                            alert("Demo Mode: Course deleted (not persisted)!");
                            setCourses(courses.filter((c) => (c.path || c.path_id) !== (course.path || course.path_id)));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <button className="start-btn">Start Learning</button>
                    )}
                  </div>
                </div>

              ))
            ) : (
              <p className="error-msg">Backend is not running. Please start FastAPI to see courses.</p>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default Home;