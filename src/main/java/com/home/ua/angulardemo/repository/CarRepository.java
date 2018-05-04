package com.home.ua.angulardemo.repository;

import com.home.ua.angulardemo.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}
