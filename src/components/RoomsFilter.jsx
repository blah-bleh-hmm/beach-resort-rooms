import { useRoom } from '../context';
import Title from './Title';

//get unique values

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomsFilter() {
  const { room, handleChange } = useRoom();

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = room;
  //get unique types
  let types = getUnique(room.rooms, 'type');
  //add all
  types = ['all', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get unique guests
  let guests = getUnique(room.rooms, 'capacity');
  //add all
  guests = ['all', ...guests];
  //map to jsx
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className='filter-container'>
      <Title title='Search Rooms' />
      <form className='filter-form'>
        {/*start - select type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select
            id='type'
            name='type'
            onChange={handleChange}
            className='form-control'
          >
            {types}
          </select>
        </div>
        {/*end - select type */}

        {/*start - select guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            id='capacity'
            name='capacity'
            onChange={handleChange}
            className='form-control'
            value={capacity}
          >
            {guests}
          </select>
        </div>
        {/*end - select guests */}

        {/*start - room price */}
        <div className='form-group'>
          <label htmlFor='price'>Room Price $ {price} </label>
          <input
            type='range'
            name='price'
            id='price'
            max={maxPrice}
            min={minPrice}
            className='form-control'
            value={price}
            onChange={handleChange}
          />
        </div>
        {/*end - room price */}

        {/*start - room size */}
        <div className='form-group'>
          <label htmlFor='size'>Room Size</label>
          <input
            type='number'
            name='minSize'
            id='minSize'
            min={minSize}
            className='size-input'
            value={minSize}
            onChange={handleChange}
          />{' '}
          <input
            type='maxSize'
            name='maxSize'
            id='maxSize'
            max={maxSize}
            className='size-input'
            value={maxSize}
            onChange={handleChange}
          />
        </div>
        {/*end - room size */}

        {/*start - breakfast & pets */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              value={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>Breakfast</label>
          </div>
          <div className='size-inputs'></div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              value={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
        {/*end -breakfast & pets */}
      </form>
    </section>
  );
}
export default RoomsFilter;
