package ma.fsm.weatherapi.controller;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import ma.fsm.weatherapi.config.UserAuthenticationProvider;
import ma.fsm.weatherapi.dtos.CredentialsDto;
import ma.fsm.weatherapi.dtos.UserDto;
import ma.fsm.weatherapi.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;
    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthenticationProvider.createToken(userDto));
        return ResponseEntity.ok(userDto);
    }
}
