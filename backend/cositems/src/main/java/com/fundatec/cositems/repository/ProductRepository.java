package com.fundatec.cositems.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fundatec.cositems.model.ProductModel;

public interface ProductRepository extends MongoRepository<ProductModel, String>{
    
}
