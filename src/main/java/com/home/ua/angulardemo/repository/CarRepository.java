package com.home.ua.angulardemo.repository;

import com.home.ua.angulardemo.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface CarRepository extends JpaRepository<Car, Long> {
}
