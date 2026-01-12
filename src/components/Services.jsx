import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import { useState } from 'react';

function Services() {
const [servicesState, setServicesState] = useState([
    {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        content:
            'Enjoy complimentary cocktails at our bar. Our expert mixologists craft unique drinks using premium ingredients to make your stay memorable.',
    },
    {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        content:
            'Explore scenic trails with guided tours available daily. Experience breathtaking views and discover hidden gems in nature at your own pace.',
    },
    {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        content:
            'Complimentary shuttle service to nearby attractions and airports. Travel comfortably with our reliable transportation available throughout your entire visit.',
    },
    {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        content:
            'Sample our selection of craft beers and local brews. From light ales to robust stouts, we offer premium beverages for every taste.',
    },
]);
  return (
    <>
      <section className='services'>
        <Title title='Services'></Title>
        <div className='services-center'>
          {servicesState.map((item, index) => {
            return (
              <>
                <article key={index} className='service'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Services;
