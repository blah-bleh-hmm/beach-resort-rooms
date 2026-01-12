import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomProvider, useRoom } from '../context';
import Loading from './Loading';

function RoomsContainer() {
  const { room } = useRoom();
  const { loading, sortedRooms, rooms } = room;

  if(loading){
    return <Loading></Loading>
  }

  return (
    <>
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
      <div></div>
    </>
  );
}
export default RoomsContainer;
