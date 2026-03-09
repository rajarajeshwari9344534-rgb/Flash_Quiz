import { useParams,useNavigate } from "react-router-dom"
import { quizData } from "../data/quizData"
import { useState } from "react"

import ProgressBar from "../components/ProgressBar"
import Timer from "../components/Timer"

function Quiz(){

const {topic} = useParams()

const navigate = useNavigate()

const questions = quizData[topic]

const [current,setCurrent] = useState(0)
const [score,setScore] = useState(0)
const [time,setTime] = useState(10)

function nextQuestion(){

if(current+1 < questions.length){

setCurrent(current+1)
setTime(10)

}
else{

const history = JSON.parse(localStorage.getItem("history")) || []

history.push({
topic,
score,
date:new Date().toLocaleString()
})

localStorage.setItem("history",JSON.stringify(history))

navigate("/result",{state:{score,total:questions.length}})

}

}

function handleAnswer(option){

if(option===questions[current].answer){
setScore(score+1)
}

nextQuestion()

}

return(

<div className="quiz">

<ProgressBar current={current+1} total={questions.length}/>

<Timer time={time} setTime={setTime} nextQuestion={nextQuestion}/>

<h2>{questions[current].question}</h2>

<div className="options">

{questions[current].options.map((opt,index)=>(
<button key={index} onClick={()=>handleAnswer(opt)}>
{opt}
</button>
))}

</div>

</div>

)

}

export default Quiz