import './styles/styles.css'

const card__title = 'Equilibrium';
const card__title_number = '#3429';
const card__description = 'Our Equilibrium collection promotes balance and calm.';
const card__price = '0.041 ETH';
const card__time = '3 days left';
const card__creator = 'Jules Wyvern';

function OrderSummary() {
  /*return alert('hola');*/
  return(
    <div className="card">
    <div className="card__image">
      <img src="images/image-equilibrium.jpg" alt="Equilibrium #3429" />
      <img
        src="images/icon-view.svg"
        alt="View Icon"
        className="card__view-icon"
      />
    </div>
    <h1 className="card__title"><a>{card__title} {card__title_number}</a></h1>
    <p className="card__description">
      {card__description}
    </p>

    <div className="card__info">
      <div className="card__price">
        <img
          src="images/icon-ethereum.svg"
          alt="icon-ethereum"
          className="card__icon"
        />
        <span>{card__price}</span>
      </div>
      <div className="card__time">
        <img
          src="images/icon-clock.svg"
          alt="icon-clock"
          className="card__icon"
        />
        <span>{card__time}</span>
      </div>
    </div>

    <div className="card__creator-img">
      <img
        src="images/image-avatar.png"
        alt="Avatar of Jules Wyvern"
        className="card__avatar"
      />
      <p className="card__creator-text">
        Creation of <a href="#">{card__creator}</a>
      </p>
    </div>
  </div>

  )
}
export default OrderSummary;
