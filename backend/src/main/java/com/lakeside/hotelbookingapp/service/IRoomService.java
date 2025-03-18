package com.lakeside.hotelbookingapp.service;

import com.lakeside.hotelbookingapp.model.Room;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

public interface IRoomService {
    Room addNewRoom(MultipartFile photo, String roomType, java.math.BigDecimal roomPrice) throws IOException, SQLException;
    List<String> getAllRoomTypes();
}
