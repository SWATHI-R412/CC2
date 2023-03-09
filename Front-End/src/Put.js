import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import './patient.css';

export default function UpdateForm() {
    const[id,setId]=useState('');
    const[movieName,setMovieName]=useState("");
    const[rating,setRating]=useState("");
    const[theatreName,setTheatreName]=useState("");
    const[ticketPrice,setTicketPrice]=useState("");
    const[directorName,setDirectorName]=useState("");
    const[actorName,setActorName]=useState('');
    const[actressName,setActressName]=useState('');
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/movie/Put",

                { id:id,
                    movieName:movieName,
                    rating:rating,
                    theatreName:theatreName,
                    ticketPrice:ticketPrice,
                    directorName:directorName,
                    actorName:actorName,
                    actressName:actressName,

                });
            alert("Movie details Updation Successfully Completed");
            setId("");
            setMovieName("");
            setRating("");
            setTheatreName("");
            setTicketPrice("");
            setDirectorName("");
            setActorName("");
            setActressName("");


        }
        catch (err) {
            alert("User Updation Failed");
        }
    }

    return (
        <div>
           
           <center ><h2>Update The Details</h2></center> 

        <form>
       <center> 
       <TextField required id="outlined-basic" label="id" variant="outlined"
        onChange={(event)=>setId(event.target.value)}/> 
        <br></br><br></br>
        <TextField required id="outlined-basic" label="movieName" variant="outlined"
        onChange={(event)=>setMovieName(event.target.value)}/> 
        <br></br><br></br>
        <TextField id="outlined-basic" label="rating" variant="outlined"
        onChange={(event)=>setRating(event.target.value)}/> 
        <br></br><br></br>
        <TextField required id="outlined-basic" label="theatreName" variant="outlined" 
        onChange={(event)=>setTheatreName(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="ticketPrice" variant="outlined" 
        onChange={(event)=>setTicketPrice(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="directorName" variant="outlined" 
        onChange={(event)=>setDirectorName(event.target.value)}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="actorName" variant="outlined" 
        onChange={(event)=>setActorName(event.target.value)}/>
        <br></br>
        <br></br>
        <TextField required id="outlined-basic" label="actressName" variant="outlined" 
        onChange={(event)=>setActressName(event.target.value)}/>
        <br></br><br></br>
        </center>
        <div/>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
        <div/>   
            </form>
            

        </div>
    );
}