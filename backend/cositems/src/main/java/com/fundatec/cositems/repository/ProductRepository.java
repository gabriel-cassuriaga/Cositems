package com.fundatec.cositems.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.math.BigDecimal;

import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.model.ProductModel;


public interface ProductRepository extends MongoRepository<ProductModel, String>{
    @Query("{'size' : ?0}")
    List<ProductModel> findBySize(Size size);

    @Query("{'name' : ?0}")
    List<ProductModel> findByName(String name);

    @Query("{'price' : ?0}")
    List<ProductModel> findByPrice(BigDecimal price);

}
