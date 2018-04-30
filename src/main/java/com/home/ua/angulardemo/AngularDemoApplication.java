package com.home.ua.angulardemo;

import com.home.ua.angulardemo.entity.Car;
import com.home.ua.angulardemo.repository.CarRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class AngularDemoApplication {

	public static void main(String[] args) {
//		SpringApplication.run(AngularDemoApplication.class, args);
//		String test = "test".intern();
//		String test1 = "test";

//		Boolean test = null;
//		Boolean test1 = true;
//		if (test) {
//
//		}
//		System.out.println(test == test1);
		new B();
	}


	public static class A {
		public A() {
			test();
		}

		public static void test() {
			System.out.println("A");
		};

		protected void test1() {
			System.out.println("A1");
		}
	}

	public static class B extends A {
		public B() {
			test();
		}

		public static void test() {
			System.out.println("B");
		}
		protected void test1() {
			System.out.println("A1");
		}
	}




	@Bean
	ApplicationRunner init(CarRepository repository) {
		return args -> {
			Stream.of("Ferrari", "Jaguar", "Porsche", "Lamborghini", "Bugatti",
					"AMC Gremlin", "Triumph Stag", "Ford Pinto", "Yugo GV").forEach(name -> {
				Car car = new Car();
				car.setName(name);
				repository.save(car);
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}
