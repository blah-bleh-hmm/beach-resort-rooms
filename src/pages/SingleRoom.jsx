import StyledHero from '../components/StyledHero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import defaultBcg from '../images/room-1.jpeg';
import { Link, useParams } from 'react-router-dom';
import { RoomProvider, useRoom } from '../context';
import { useContext, useEffect, useState } from 'react';

function SingleRoom(props) {
  const { slug } = useParams();
  const { getRoom } = useRoom();

  const [defaultBcg, setDefaultBcg] = useState(true);

  const currRoom = getRoom(slug);

  if (!currRoom) {
    return (
      <div className='error'>
        <h3>No such room could be found!</h3>
        <Link to='/rooms' className='btn-primary'>
          Go Back to Rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = currRoom;

  console.log(extras);

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} Room`} subTitle=''>
          <Link to='/rooms' className='btn-primary'>
            BACK TO ROOMS
          </Link>
        </Banner>
      </StyledHero>

      <section className='single-room'>
        <div className='single-room-images'>
          {' '}
          {defaultImg.map((item, index) => (
            <img key={index} src={item} alt='{name' />
          ))}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>
              Max Capacity :{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'Pets Allowed' : 'Pets not allowed'}</h6>
            <h6>{breakfast ? 'Free breakfast Included' : ''}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>Extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => (
            <li>✦ {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default SingleRoom;
