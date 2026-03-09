import { useEffect } from "react"

function Timer({time,setTime,nextQuestion}){

useEffect(()=>{

if(time===0){
nextQuestion()
return
}

const timer = setTimeout(()=>{
setTime(time-1)
},1000)

return ()=>clearTimeout(timer)

},[time])

return <h3>Time : {time}s</h3>

}

export default Timer