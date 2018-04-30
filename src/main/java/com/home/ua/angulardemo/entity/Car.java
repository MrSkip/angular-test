package com.home.ua.angulardemo.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@EqualsAndHashCode
@Data
public class Car {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
}
