package com.fundatec.cositems.model;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fundatec.cositems.model.subClasses.SizeStorage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Document(collection = "products")
public class ProductModel {
    @Id
    private String id;
    private String name;
    private String anime;
    private List<String> image;
    private String description;
    private List<SizeStorage> storage;
    private BigDecimal price;
    
}
