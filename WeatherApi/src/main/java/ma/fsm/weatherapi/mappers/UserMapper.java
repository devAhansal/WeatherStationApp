package ma.fsm.weatherapi.mappers;


import ma.fsm.weatherapi.dtos.UserDto;

import ma.fsm.weatherapi.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}