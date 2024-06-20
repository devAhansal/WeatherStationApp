package ma.fsm.weatherapi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import ma.fsm.weatherapi.entity.WeatherData;
import ma.fsm.weatherapi.repository.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeatherDataService {

    @Autowired
    private WeatherDataRepository weatherDataRepository;

    private ObjectMapper objectMapper;

    public WeatherDataService() {
        this.objectMapper = new ObjectMapper();
        this.objectMapper.registerModule(new JavaTimeModule());
    }

    public void saveWeatherData(String payload) {
        try {
            WeatherData weatherData = objectMapper.readValue(payload, WeatherData.class);
            weatherDataRepository.save(weatherData);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception appropriately
        }
    }
}