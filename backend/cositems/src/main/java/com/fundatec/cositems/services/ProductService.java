package com.fundatec.cositems.services;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.ProductModel;
import com.fundatec.cositems.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public ProductResponseDTO findById(String id) throws EmptyExceptions {
        if (id.isEmpty()) {
            throw new EmptyExceptions("Id vazio");
        }

        ProductResponseDTO productReturn = objectMapper.convertValue(productRepository.findById(id), ProductResponseDTO.class);
        return productReturn;

    }

    public List<ProductResponseDTO> findBySize(String size) throws EmptyExceptions {
        if (size.isEmpty()) {
            throw new EmptyExceptions("Tamanho inexistente");
        }
        List<ProductModel> products = productRepository.findAll();
        List<ProductResponseDTO> productsToReturn = products.stream()
        .filter(retorno -> retorno.getStorage().stream().anyMatch(s -> s.getSize().equals(size)))
        .map(newProducts -> ProductResponseDTO.builder()
        .id(newProducts.getId())
        .name(newProducts.getName())
        .price(newProducts.getPrice())
        .description(newProducts.getDescription())
        .image(newProducts.getImage())
        .storage(newProducts.getStorage()).build()).toList();
        return productsToReturn;

    }

    public List<ProductResponseDTO> findByName(String name) {

        List<ProductResponseDTO> productToReturn = productRepository.findByName(name).stream().map(returnProducts -> 
        ProductResponseDTO.builder().name(returnProducts.getName())
        .image(returnProducts.getImage())
        .id(returnProducts.getId()).price(returnProducts.getPrice()).build()).toList();

        return productToReturn;
    }

    public List<ProductResponseDTO> findByPrice(BigDecimal price) {
        
        List<ProductResponseDTO> produtos = productRepository.findByPrice(price).stream().map(retorno -> objectMapper.convertValue(retorno, ProductResponseDTO.class)).toList();
        return produtos;
    }

    public ProductResponseDTO updateProduct(ProductRequestDTO data, String id) throws EmptyExceptions {
        if (!productRepository.findById(id).isPresent()) {
            throw new EmptyExceptions("Produto não encontrado");
        }    
        ProductModel productToBeUpdate = productRepository.findById(id).get();
        productToBeUpdate.setImage(data.image());
        productToBeUpdate.setName(data.name());
        productToBeUpdate.setPrice(data.price());
        productToBeUpdate.setAnime(data.anime());
        productToBeUpdate.setDescription(data.description());
        productToBeUpdate.setStorage(data.storage());
        productRepository.save(productToBeUpdate);
        return objectMapper.convertValue(productToBeUpdate, ProductResponseDTO.class);

    }

    public ProductResponseDTO createProduct(ProductRequestDTO data) throws EmptyExceptions {
        if (data == null ) {
            throw new EmptyExceptions("Produto vazio");
        }
        ProductModel products = objectMapper.convertValue(data, ProductModel.class);
        productRepository.save(products);
        return objectMapper.convertValue(products, ProductResponseDTO.class);
    }

    public List<ProductModel> findAll() {
       return productRepository.findAll();
    }

    public void deleteProduct(String id) throws NotFoundException {
        if (productRepository.findById(id).isPresent()) {
            throw new NotFoundException("Produto não encontrado");
        }
        productRepository.deleteById(id);
    }

}