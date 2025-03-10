package com.lakeside.hotelbookingapp.repository;

import com.lakeside.hotelbookingapp.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
