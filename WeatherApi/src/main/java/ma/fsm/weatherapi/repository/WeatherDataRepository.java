package ma.fsm.weatherapi.repository;

import ma.fsm.weatherapi.entity.WeatherData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WeatherDataRepository extends MongoRepository<WeatherData, String> {
}
