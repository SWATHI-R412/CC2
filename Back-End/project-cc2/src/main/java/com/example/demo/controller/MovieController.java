package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Movie;
import com.example.demo.service.MovieService;


@RestController
public class MovieController {
@Autowired
MovieService service; 

@CrossOrigin
@PostMapping("/movie")
public Boolean create(@RequestBody Movie movie) {
return service.addMovie(movie);
}

@CrossOrigin
@GetMapping("/movie")
public List<Movie> get(){
return service.getMovie();
}

@CrossOrigin
@GetMapping("/movie/{id}")
public Optional<Movie> getById(@PathVariable int id){
return service.getMovieById(id);
}

@CrossOrigin
@DeleteMapping("/movie/{id}")
public Boolean delete(@PathVariable int id) {
return service.deleteMovieById(id);
}

@CrossOrigin
@PutMapping("/movie/{id}")
public Movie update(@RequestBody Movie movie ) {
return service.updateMovieById(movie);
}
}