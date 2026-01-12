import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Luxurious Rooms'
          subTitle='Deluxe rooms starting at $299 only!'
        >
          <Link to='/rooms' className='btn-primary'>
            CHECKOUT OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms></FeaturedRooms>

    </>
  );
};
export default Home;
