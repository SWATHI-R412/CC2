package com.example.demo.model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity

public class Movie {

@Id

private int id;

private String movieName;

private float rating;

private String theatreName;

private float ticketPrice;

private String directorName;

private String actorName;

private String actressName;

public int getId() {

return id;

}

public void setId(int id) {

this.id = id;

}

public String getMovieName() {

return movieName;

}

public void setMovieName(String movieName) {

this.movieName = movieName;

}

public float getRating() {

return rating;

}

public void setRating(float rating) {

this.rating = rating;

}

public String getTheatreName() {

return theatreName;

}

public void setTheatreName(String theatreName) {

this.theatreName = theatreName;

}

public float getTicketPrice() {

return ticketPrice;

}

public void setTicketPrice(float ticketPrice) {

this.ticketPrice = ticketPrice;

}

public String getDirectorName() {

return directorName;

}

public void setDirectorName(String directorName) {

this.directorName = directorName;

}

public String getActorName() {

return actorName;

}

public void setActorName(String actorName) {

this.actorName = actorName;

}

public String getActressName() {

return actressName;

}

public void setActressName(String actressName) {

this.actressName = actressName;

}

}