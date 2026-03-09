import { useNavigate } from "react-router-dom"

function TopicCard({topic}){

const navigate = useNavigate()

return(

<div
className="card"
onClick={()=>navigate(`/quiz/${topic.name}`)}
>

<img src={topic.img} alt={topic.name}/>

<h3>{topic.name}</h3>

</div>

)

}

export default TopicCard