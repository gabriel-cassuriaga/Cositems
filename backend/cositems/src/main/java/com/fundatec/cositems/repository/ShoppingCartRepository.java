package com.fundatec.cositems.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fundatec.cositems.model.ShoppingCartModel;

public interface ShoppingCartRepository extends MongoRepository<ShoppingCartModel, String>{

}
