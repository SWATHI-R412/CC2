package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Movie;
import com.example.demo.repository.MovieRepository;


@Service
public class MovieService {
@Autowired
MovieRepository repository;

public Boolean addMovie(Movie movie) {
repository.save(movie);
return true;
}
public List<Movie> getMovie(){
return repository.findAll();
}

public Optional<Movie> getMovieById(int id){
return repository.findById(id);
}

public Movie updateMovieById(Movie movie) {
repository.save(movie);
return movie;
}

public Boolean deleteMovieById(int id) {
repository.deleteById(id);
return true;
}

}