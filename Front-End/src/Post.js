import React, {useState} from 'react';
import axios from'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Post.css'

function RegistrationForm() 
{
    const[id,setId]=useState('');
    const[movieName,setMovieName]=useState("");
    const[rating,setRating]=useState("");
    const[theatreName,setTheatreName]=useState("");
    const[ticketPrice,setTicketPrice]=useState("");
    const[directorName,setDirectorName]=useState("");
    const[actorName,setActorName]=useState('');
    const[actressName,setActressName]=useState('');
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post('http://localhost:8080/movie',
        {
            id:id,
            movieName:movieName,
            rating:rating,
            theatreName:theatreName,
            ticketPrice:ticketPrice,
            directorName:directorName,
            actorName:actorName,
            actressName:actressName,
        });
          alert("Details of the Movie are added!!");
          setId("");
          setMovieName("");
          setRating("");
          setTheatreName("");
          setTicketPrice("");
          setDirectorName("");
          setActorName("");
          setActressName("");
        }
    catch(err)
        {
          alert("Failed:(");
        }
   }

    return(
        <>
        <div className="form">
            <h2 style={{textAlign:"center",
                        color:"#f41149"}}>
                YOUR BOOKING!!
            </h2>
            <br></br>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
             noValidate
             autoComplete="on"
            >
            <div>
                <TextField
                    id="id"
                    label="id"
                    placeholder='Enter movie id'
                    value={id}
                    onChange={(event) =>
                                    {
                                        setId(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="movieName"
                    label="movieName"
                    placeholder='Enter the Movie Name'
                    value={movieName}
                    onChange={(event) =>
                                    {
                                        setMovieName(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="rating"
                    label="rating"
                    placeholder='Enter the rating'
                    value={rating}
                    onChange={(event) =>
                                    {
                                        setRating(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="theatreName"
                    label="theatreName"
                    placeholder='Theatre Name'
                    value={theatreName}
                    onChange={(event) =>
                                    {
                                        setTheatreName(event.target.value);      
                                    }}
                />
                <br></br>
                <TextField
                    id="ticketPrice"
                    label="ticketPrice"
                    placeholder='Enter the Ticket Price'
                    value={ticketPrice}
                    onChange={(event) =>
            {
              setTicketPrice(event.target.value);      
            }}
        />
        <TextField
          id="directorName"
          label="directorName"
          placeholder='Enter the Director Name'
          value={directorName}
          onChange={(event) =>
            {
              setDirectorName(event.target.value);      
            }}
        />
        <TextField
          id="actorName"
          label="actorName"
          placeholder='Enter the Actor Name'
          value={actorName}
          onChange={(event) =>
            {
              setActorName(event.target.value);      
            }}
        />
        <TextField
          id="actressName"
          label="actressName"
          placeholder='Enter the Actress Name'
          value={actressName}
          onChange={(event) =>
            {
              setActressName(event.target.value);      
            }}
        />
        <br>
        </br>
        <b>
    <button onClick ={save}>SUBMIT</button>
    </b>
            </div>
    </Box>
    
    </div>
    </>
    )       
}
export default RegistrationForm