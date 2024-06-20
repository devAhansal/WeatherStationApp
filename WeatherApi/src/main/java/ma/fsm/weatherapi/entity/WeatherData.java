package ma.fsm.weatherapi.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "station2")
public class WeatherData {
    @Id
    private String id;

    private Instant date;

    private int humSolMax;

    private int humSolMin;

    private int humSolMoy;

    private float tempSolMax;

    private float tempSolMin;

    private float tempSolMoy;

    private int humAirMax;

    private int humAirMin;

    private int humAirMoy;

    private float tempAirMax;

    private float tempAirMin;

    private float tempAirMoy;

    // Setters and Getters (optional if using Lombok)
}
