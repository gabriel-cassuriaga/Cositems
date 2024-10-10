package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.services.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import java.math.BigDecimal;
import lombok.RequiredArgsConstructor;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final ProductService productService;

    @Operation(summary = "Cria um produto")
    @ApiResponse(responseCode = "201", description = "Retorna um Dto do produto criado")
    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO data)
            throws EmptyExceptions {
        return new ResponseEntity<>(productService.createProduct(data), HttpStatus.CREATED);
    }

    @Operation(summary = "Busca por todos os produtos")
    @ApiResponse(responseCode = "", description = "Retorna um dto para cada produto")
    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAll() throws NotFoundException {
        List<ProductResponseDTO> products = productService.findAll().stream().map(ProductResponseDTO::new).toList();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @Operation(summary = "Busca um produto por id")
    @ApiResponse(responseCode = "200", description = "Retorna o Dto de um produto")
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getById(@PathVariable("id") String id) throws EmptyExceptions, NotFoundException {
        ProductResponseDTO product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @Operation(summary = "Filtra buscas para busca composta ou simples")
    @ApiResponse(responseCode = "200", description = "Retorna o Dto dos produtos filtrados")
    @GetMapping("/search")
    public ResponseEntity<List<ProductResponseDTO>> findByCriteria(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Size size,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false) BigDecimal minPrice) {
        List<ProductResponseDTO> products = productService.findByCriteria(name, size, minPrice, maxPrice);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @Operation(summary = "Edita ou atualiza o produto por id")
    @ApiResponse(responseCode = "200", description = "Retorna o Dto do produto atualizado")
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@RequestBody ProductRequestDTO data,
            @PathVariable("id") String id)
            throws Exception {
        return new ResponseEntity<>(productService.updateProduct(data, id), HttpStatus.OK);
    }

    @Operation(summary = "Deleta o produto por id")
    @ApiResponse(responseCode = "204", description = "Deleta o produto pelo id, Retorna o codigo sinalizando que foi deletado com sucesso")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") String id) throws NotFoundException, EmptyExceptions {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
