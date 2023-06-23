import { useEffect, useState } from "react";
import './Astros.css'
const API_URL = 'http://api.open-notify.org/astros.json';

const Astros = () => 
{
    const [astros,setAstros] = useState([]);

    const fetchData = () => 
    {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setAstros(data.people))  
        .catch(error => console.error(error)); 
    }

    useEffect(() => {
        fetchData();

    }, []);

    const astrosCard = astros.map((astro, index) => (
        <div className="astro--card" key={astro.name}>
            <h1 className="astro--name">
                {astro.name}
                 </h1>
                 <h3 className="astro--craft">
                 {astro.craft}
                 </h3>
        </div>


    ))


    return (

        <div className="astros--card">
            {astrosCard}
        </div>

    )

}


export default Astros;


// function App() {
//     const [astronautas, setAstronautas] = useState([]);
  
//     useEffect(() => {
//       fetch('http://api.open-notify.org/astros.json')
//         .then(response => response.json())
//         .then(data => setAstronautas(data.people))
//         .catch(error => console.error(error));
//     }, []);
