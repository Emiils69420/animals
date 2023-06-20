import{useEffect, useState} from "react";

function App() {
  const [zoodarzs, setZoodarzs] = useState([]);
  useEffect(()=>{
    async function getData(){
    const response = await fetch("animals.json");
    const animals = await response.json();
    console.log(animals);
    setZoodarzs(animals);
  }
  getData();

  },[]);    
const renderZoodarzs = zoodarzs.map(nebrunurupucis =>{
  return(
<article>
    <img src={nebrunurupucis["image"]} alt={nebrunurupucis.animal}/>
<div className="info">
<h2>{nebrunurupucis["animal"]}</h2>
<p>{nebrunurupucis["description"]}</p>
<ul>
  {nebrunurupucis["answers"].map(viensAnswer=>
    <li>{viensAnswer}</li>)}
</ul>
</div>
</article>
  )




});

return <main>{renderZoodarzs}</main>

}

export default App;
