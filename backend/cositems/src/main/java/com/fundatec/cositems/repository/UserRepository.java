package com.fundatec.cositems.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fundatec.cositems.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    
    @Query("{'username' : ?0, 'email' : ?1, 'password' : ?2}")
    UserModel findByUsernameAndEmailAndPassword(String username, String email, String password);

    @Query("{'id' : ?0, 'email' : ?1, 'password' : ?2}")
    UserModel login(String id, String email, String password);
}
