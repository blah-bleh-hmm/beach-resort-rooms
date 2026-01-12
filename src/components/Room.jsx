import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg';

function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImage} alt='' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          FEATURES
        </Link>
      </div>

      <p className='room-info'>{name}</p>
    </article>
  );
}
export default Room;

//   const rooms = room.featuredRooms.map((room) => {
//     return <Room key={room.id} room={room} />;
//   });
// {name: 'family deluxe', slug: 'family-deluxe', type: 'family', price: 500, size: 700, …}
// {name: 'double deluxe', slug: 'double-deluxe', type: 'double', price: 400, size: 500, …}
// breakfast
// :
// true
// capacity
// :
// 2
// description
// :
// "Experience ultimate luxury in our featured 500 square foot double deluxe room, perfect for two guests and their pets. Start each morning with our complimentary breakfast before exploring the resort. Retreat to exceptionally comfortable beds with plush pillows and breathable linens, indulge in spa-quality soft oversized bath towels, and pamper yourself with full-sized pH-balanced toiletries. Enjoy complimentary refreshments throughout your stay, seamless internet connectivity, and premium safety measures. This pet-friendly haven offers everything for an unforgettable romantic getaway or friends' retreat."
// extras
// :
// (7) ['Plush pillows and breathable bed linens', 'Soft, oversized bath towels', 'Full-sized, pH-balanced toiletries', 'Complimentary refreshments', 'Adequate safety/security', 'Internet', 'Comfortable beds']
// featured
// :
// true
// id
// :
// "8"
// images
// :
// (4) ['/src/images/room-8.jpeg', '/src/images/details-2.jpeg', '/src/images/details-3.jpeg', '/src/images/details-4.jpeg']
// name
// :
// "double deluxe"
// pets
// :
// true
// price
// :
// 400
// size
// :
// 500
// slug
// :
// "double-deluxe"
// type
// :
// "double"
// [[Prototype]]
// :
// Object
