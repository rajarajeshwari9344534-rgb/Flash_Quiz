import { useNavigate } from "react-router-dom";
import { topics } from "../utils/topics";

function Topics (){
    const navigate =useNavigate();


    return(
        <div className="center">
            <h1>Select Your Topic</h1>

            {topics.map((topic,index) =>(
                <button key={index} className="btn" onClick={()=> navigate(`/quiz/${topic}`)} >
                    {topic}  
                </button>
            ))}
        </div>
    )
}

export default Topics