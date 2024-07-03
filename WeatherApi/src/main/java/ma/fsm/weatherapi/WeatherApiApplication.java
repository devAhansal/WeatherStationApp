package ma.fsm.weatherapi;

import ma.fsm.weatherapi.entity.User;
import ma.fsm.weatherapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class WeatherApiApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(WeatherApiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        String login = "salaheddineahansal@gmail.com";
        if (userRepository.findByLogin(login).isEmpty()) {
            User user = User.builder()
                    .firstName("salaheddine")
                    .lastName("ahansal")
                    .login(login)
                    .password(passwordEncoder.encode("qwerty"))
                    .build();
            userRepository.save(user);
            System.out.println("Test user created successfully.");
        } else {
            System.out.println("Test user already exists.");
        }
    }
}
