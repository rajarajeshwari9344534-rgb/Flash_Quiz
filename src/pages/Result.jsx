import { useLocation,useNavigate } from "react-router-dom"

function Result(){

const location = useLocation()
const navigate = useNavigate()

const {score,total} = location.state

return(

<div className="result">

<h1>Your Score</h1>

<h2>{score} / {total}</h2>

<button onClick={()=>navigate("/")}>
Go Home
</button>

</div>

)

}

export default Result