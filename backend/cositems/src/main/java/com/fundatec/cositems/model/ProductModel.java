package com.fundatec.cositems.model;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.enums.Categories;
import com.fundatec.cositems.dto.ProductRequestDTO;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String nameCharacter;
    private List<String> image;
    private String description;
    private Size size;
    private BigDecimal price;
    
    public ProductModel(ProductRequestDTO data) {
        this.name = data.name();
        this.image = data.image();
        this.description = data.description();
        this.price = data.price();
    }
}
