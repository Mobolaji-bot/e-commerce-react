import { CiShoppingCart } from "react-icons/ci";
import "./index.css"

const Navbar = () => {
  return (
    <section className="navigation">
      <h1>Style</h1>
      <ul className="navitems">
        <p>Home</p>
        <p>Shop</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>About</p>
        <p>
          <CiShoppingCart />
        </p>
      </ul>
    </section>
  );
};

export default Navbar;
