package ma.fsm.weatherapi.repository;

import ma.fsm.weatherapi.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByLogin(String login);
}
