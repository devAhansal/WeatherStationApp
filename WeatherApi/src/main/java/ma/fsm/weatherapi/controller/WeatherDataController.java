package ma.fsm.weatherapi.controller;
import ma.fsm.weatherapi.entity.WeatherData;
import ma.fsm.weatherapi.repository.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class WeatherDataController {
    @Autowired
    private WeatherDataRepository repository;

    @GetMapping
    public List<WeatherData> getAllWeatherData() {
        return repository.findAll();
    }
}
