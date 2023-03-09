import {useEffect,useState} from "react"
import "./Get.css"
import axios from  'axios'

export default function Get(){
    const[data,setData] = useState([]);
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8080/movie/${id}`)
        .then(res=>setData(res.data))
    }
    useEffect(()=> {
        fetch("http://localhost:8080/movie")
        .then(res=>res.json())
        .then(res=>setData(res))
    })
    return(
        <div className="App">
            <table>
            <tr>
                <th>id</th>
                <th>movieName</th>
                <th>rating</th>
                <th>theatreName</th>
                <th>ticketPrice</th>
                <th>directorName</th>
                <th>actorName</th>
                <th>actressName</th>
            </tr>
            {data.map(u=>(
                <tr>
                    <th>{u.id}</th>
                    <th>{u.movieName}</th>
                    <th>{u.rating}</th>
                    <th>{u.theatreName}</th>
                    <th>{u.ticketPrice}</th>
                    <th>{u.directorName}</th>
                    <th>{u.actorName}</th>
                    <th>{u.actressName}</th>
                    <th>
                        <button className="update">Update</button>
                        <button className="delete" type="button" onClick={()=>handleDelete(u.id)}>Delete</button>
                    </th>
                </tr>
            ))}
            </table>
        </div>
    );
}