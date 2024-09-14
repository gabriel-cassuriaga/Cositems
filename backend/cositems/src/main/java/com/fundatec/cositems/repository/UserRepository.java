package com.fundatec.cositems.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fundatec.cositems.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    
}
