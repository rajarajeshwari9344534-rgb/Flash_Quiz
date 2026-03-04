import {Link } from "react-router-dom"

function Home(){
    return (
        <div className="center">
            <h1>Welcome To Flash Quiz </h1>
            <Link to="/topics">
            <button className="btn"> Start Your Quiz</button>
            </Link>  
            <img src="quiz-image.jpg" alt="Quiz" /> 
        </div>
    )
}

export default Home