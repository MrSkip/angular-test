package com.home.ua.angulardemo;

import com.google.common.collect.Lists;
import org.apache.logging.log4j.util.Strings;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringJoiner;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Stream;

class Test {

    private static List<Integer> listOfVar = Lists.asList(2, new Integer[]{3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19});

    public static void main(String[] args) throws IOException {

        try (Reader reader = new BufferedReader(
                new FileReader("/home/mrskip/Documents/kohler/us_postal_codes.csv"))) {

            List<String> values = new ArrayList<>();
            List<CompletableFuture> futures = new ArrayList<>();

            AtomicInteger integer = new AtomicInteger(0);
            ((BufferedReader) reader).lines().forEach(s -> {
                integer.incrementAndGet();

                StringJoiner joiner = new StringJoiner(",");
                final int[] counter = {0};

                String[] split = s.split(",");
                if (split[0].length() == 2) {
                    split[0] = "000" + split[0];
                } else if (split[0].length() == 3) {
                    split[0] = "00" + split[0];
                } else if (split[0].length() == 4) {
                    split[0] = "0" + split[0];
                }
                split[0] = "'" + split[0] + "'";
                Stream.of(split[0], split[5], split[6])
                        .map(s1 -> {
                            counter[0]++;
                            return Strings.isBlank(s1) ? "null" :
                                    s1.replaceAll("\\(", "").replaceAll("\\)", "");
                        })
                        .forEach(joiner::add);

                values.add("(" + joiner.toString() + ")");

                if (values.size() >= 5_000) {
                    futures.add(runInsert(new ArrayList<>(values)));
                    values.clear();
                }
            });

//            values.add(0, "INSERT ALL");
//            values.add(values.size() - 1, "SELECT 1 FROM DUAL;");
//            Path out = Paths.get("/home/mrskip/Documents/kohler/output.sql");
//            Files.write(out, values, Charset.defaultCharset());

            if (!values.isEmpty()) {
                futures.add(runInsert(values));
            }

            long count = futures.stream().map(CompletableFuture::join).count();

            System.out.println("F: " + count);
            System.out.println("Q: " + integer.get());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static CompletableFuture<Void> runInsert(List<String> values) {
        System.out.println("Block executing");
        return CompletableFuture.runAsync(() -> {
            try {
                Connection connection = getConnection();
                Statement statement = connection.createStatement();

                String block = String.join(",", values);

                statement.execute("insert into US_GEONEMA values " + block);

                statement.close();
                connection.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/sys", "root", "root");
    }

}
