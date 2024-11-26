import {} from 'react'
import "./index.css"

const Hero = () => {
  return (
    <section className="heros">
      <div className="div1">
        <h3 className="trade">Trade-in- Offer</h3>
        <h1 className="text">
          Super Value Deals <br /> <span className='products'> on All products </span>
        </h1>
        <p className='coupons'>save more with coupons up to 70%</p>
        <button className='but'>Shop Now</button>
      </div>
      {/* <button>Shop Now</button> */}
      <img
        className="image1"
        src="medium-shot-boy-posing-with-headphones.png"
        alt=""
      />
    </section>
  );
}

export default Hero
