function History(){

const history = JSON.parse(localStorage.getItem("history")) || []

function clearHistory(){

localStorage.removeItem("history")

window.location.reload()

}

return(

<div className="history">

<h1>Quiz History</h1>

{history.map((item,index)=>(

<div key={index} className="history-card">

<p>Topic : {item.topic}</p>
<p>Score : {item.score}</p>
<p>Date : {item.date}</p>

</div>

))}

<button onClick={clearHistory}>
Clear History
</button>

</div>

)

}

export default History