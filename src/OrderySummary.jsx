import './styles/styles_OrderSummary.css'
const card__title = 'Order Summary';
const card__description = 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!';
const card_plan = 'Annual Plan';
const card__price = '0.041 ETH';

function OrderSummary() {
  return(
    <div className="card">
    <div className="card__image">
      <img src="images/illustration-hero.svg" alt="illustration-hero" />
    </div>
    <h1 className="card__title"><a>{card__title}</a></h1>
    <p className="card__description">
      {card__description}
    </p>

    <div className="card__info">
        <img
          src="images/icon-music.svg"
          alt="icon-ethereum"
          className="card__icon"
        />
      <div className='card__planprice'>
        <div className='card__plan'>
          <span>{card_plan}</span>
        </div>
        <div className="card__price">
          <span>{card__price}</span>
        </div>
      </div>
      <div className="btn__change">
        <a href="#">Change</a>
      </div>
    </div>

    <div className="buttoms">
      <button className='btn__payment'> Proceed to Payment</button>
      <button className='btn__cancel'> Cancel Order</button>
    </div>
  </div>

  )
}
export default OrderSummary;


