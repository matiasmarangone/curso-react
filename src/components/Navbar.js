import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

const Navbar = () => {
    return(<div>
        

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">QUICKBUY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/category/1">1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/category/2">2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/category/3">3</a>
        </li>
      
       
      </ul>
     
    </div>
    <CartWidget />
  </div>
</nav>
      
</div>);
}

export default Navbar;



