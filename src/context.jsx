import { createContext, useContext, useEffect, useState } from 'react';
import items from './data';

const RoomContext = createContext(null);

const RoomProvider = ({ children }) => {
  const [room, setRoom] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setRoom((prevRoom) => ({
      ...prevRoom,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
  }, []);

  useEffect(() => {
    filterRooms();
  }, [room.type, room.capacity, room.price, room.minSize, room.maxSize, room.breakfast, room.pets]);

  const formatData = () => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });

      let room = { ...item.fields, id, images };

      return room;
    });

    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...room.rooms];
    const foundRoom = tempRooms.find((room) => room.slug === slug);
    return foundRoom;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setRoom((prevRoom) => {
      return {
        ...prevRoom,
        [name]: value,
      };
    });
  };

 const filterRooms = () => {
    
   let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
     room;

   let tempRooms = [...rooms];

   // filter by type
   if (type !== 'all') {
     tempRooms = tempRooms.filter((room) => room.type === type);
   }

   // filter by capacity
   if (capacity !== 1) {
     tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
   }

   // filter by price    
   tempRooms = tempRooms.filter((room) => room.price <= price);

   // filter by size
   tempRooms = tempRooms.filter(
     (room) => room.size >= minSize && room.size <= maxSize
   );

   // filter by breakfast
   if (breakfast) {
     tempRooms = tempRooms.filter((room) => room.breakfast === true);
   }

   // filter by pets
   if (pets) {
     tempRooms = tempRooms.filter((room) => room.pets === true);
   }

   setRoom((prevRoom) => {
     return {
       ...prevRoom,
       sortedRooms: tempRooms,
     };
   });
 };
  const value = {
    room,
    setRoom,
    getRoom,
    handleChange,
  };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

const useRoom = () => {
  //useContext fnc
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoom must be used inside RoomProvider');
  }
  return context;
};

export { RoomProvider, useRoom };
