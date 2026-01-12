import loadingGif from '../images/gif/loading-arrow.gif';

function Loading() {
  return (
    <div className='loading'>
      <h4>Rooms data loading...</h4>
    <img src={loadingGif} alt="Loading" />
    </div>
  );
}
export default Loading;
