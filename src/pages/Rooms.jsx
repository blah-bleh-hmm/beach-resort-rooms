import Hero from '../components/Hero';
import RoomsContainer from '../components/RoomsContainer';
import Banner from '../components/Banner';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms' subTitle=''>
          <Link to='/' className='btn-primary'>
            RETURN TO HOME
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>

      {/* <section >
        <Title title='Search Rooms'></Title>
      </section> */}
    </div>
  );
};
export default Rooms;
