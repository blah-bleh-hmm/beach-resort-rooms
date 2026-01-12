import { useContext } from 'react';
import { useRoom, RoomProvider } from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';
const FeaturedRooms = () => {
  const { room } = useRoom();
  const loading = room.loading;

  const rooms = room.featuredRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className='featured-rooms'>
      <Title title='Featured Rooms' />
      <div className='featured-rooms-center '>
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};
export default FeaturedRooms;
