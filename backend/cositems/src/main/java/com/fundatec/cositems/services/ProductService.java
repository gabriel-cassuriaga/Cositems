package com.fundatec.cositems.services;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.ProductModel;
import com.fundatec.cositems.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public ProductResponseDTO createProduct(ProductRequestDTO data) throws EmptyExceptions {

        if (data == null) {
            throw new EmptyExceptions("Produto vazio");
        }

        ProductModel products = objectMapper.convertValue(data, ProductModel.class);
        productRepository.save(products);
        return objectMapper.convertValue(products, ProductResponseDTO.class);
    }

    public ProductResponseDTO findById(String id) throws EmptyExceptions {

        if (id.isEmpty()) {
            throw new EmptyExceptions("Id vazio");
        }

        ProductResponseDTO productReturn = objectMapper.convertValue(productRepository.findById(id),
                ProductResponseDTO.class);
        return productReturn;

    }

    public List<ProductModel> findAll() {
        return productRepository.findAll();
    }

    public List<ProductResponseDTO> findByCriteria(String name, Size size, BigDecimal minPrice, BigDecimal maxPrice) {
        List<ProductModel> products = productRepository.findAll();

        if (name != null && !name.isEmpty()) {
            products = products.stream()
                    .filter(product -> product.getName() != null && product.getName().equalsIgnoreCase(name))
                    .collect(Collectors.toList());
        }

        if (size != null) {
                products = products.stream()
                        .filter(product -> product.getStorage() != null && product.getStorage().stream()
                                .anyMatch(storage -> storage.getSize() == size))
                        .collect(Collectors.toList());
        }

        if (minPrice != null) {
            products = products.stream()
                    .filter(product -> product.getPrice() != null && product.getPrice().compareTo(minPrice) >= 0)
                    .collect(Collectors.toList());
            
        }
        if (maxPrice != null) {
            products = products.stream()
            .filter(product -> product.getPrice() != null && product.getPrice().compareTo(maxPrice) <= 0)
            .collect(Collectors.toList());

        }

        return products.stream()
                .map(ProductResponseDTO::new)
                .collect(Collectors.toList());
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

    public void deleteProduct(String id) throws NotFoundException {

        if (productRepository.findById(id).isPresent()) {
            throw new NotFoundException("Produto não encontrado");
        }

        productRepository.deleteById(id);
    }

}