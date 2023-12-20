
import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link" to='/'>👟👞</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/about'>ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/product'>PRODUCT</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/contact'>CONTACT</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link ">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
