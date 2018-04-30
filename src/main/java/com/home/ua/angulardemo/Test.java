package com.home.ua.angulardemo;

import java.util.ArrayList;
import java.util.List;

class Test {

    public static void main(String[] args) {
        List<Number> numbers = new ArrayList(){{add(1);add(2);}};
        List<? super Number> t1 = numbers;
//        t1.add(1);
//        numbers.add(numbers.get(1));
        test(numbers);
//        test1(numbers);
    }

    public static void test(List<? extends Number> numbers) {
        Number number = numbers.get(1);
//        numbers.add(1);
        System.out.println(numbers.get(1));
    }
//
//    public static void test1(List<? extends Integer> numbers) {
//        numbers.add(numbers.get(1));
//        System.out.println(numbers.get(1));
//    }

}
