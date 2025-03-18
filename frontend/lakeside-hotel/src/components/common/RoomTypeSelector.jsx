import React, { useEffect, useState } from "react";
import {getRoomTypes} from '../utils/ApiFunctions'

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const [roomTypes, setRoomTypes] = useState([])
    const [showRoomTypesInput, setShowRoomTypesInput] = useState(false)
    const [newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then(data => {
            setRoomTypes(data)
        })
    }, [])

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value)
    }

    const handleAddNewRoomType = () => {
        if(newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowRoomTypesInput(false)
        }
    }

    return (
        <>
            {roomTypes.length > 0 && (
                <div>
                    <select name="roomType" id="roomType" value={newRoom.roomType} onChange={(e) => {
                        if(e.target.value === "Add New") {
                            setShowRoomTypesInput(true)
                        } else {
                            handleRoomInputChange(e.target.value)
                        }
                    }}>
                        <option value={""}>Select a room type</option>
                        <option value={"Add New"}>Add New</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {showRoomTypesInput && (
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Enter a new room Type" onChange={handleNewRoomTypeInputChange}/>
                            <button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>Add</button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default RoomTypeSelector