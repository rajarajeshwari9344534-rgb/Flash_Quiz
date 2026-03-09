import TopicCard from "../components/TopicCard";

function Home() {

const topics = [
{
name:"HTML",
img:"https://cdn-icons-png.flaticon.com/512/732/732212.png"
},
{
name:"CSS",
img:"https://cdn-icons-png.flaticon.com/512/732/732190.png"
},
{
name:"JavaScript",
img:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
},
{
name:"React",
img:"https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
}
]

return(

<div className="home">

<div className="hero">

<h1>⚡ Flash Quiz</h1>
<p>Test your programming knowledge in seconds</p>

</div>

<div className="topics">

{topics.map((topic,index)=>(
<TopicCard key={index} topic={topic}/>
))}

</div>

</div>

)

}

export default Home