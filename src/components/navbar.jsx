import plane from '../assets/plane.png'
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className='navbar-container'>
      <h1 className='navbar-title'> 
        My Travel List 
      </h1> 
      <img src={plane} height={40} className='navbar-plane' alt="Airplane icon"/>
    </div>
  )
}

export default Navbar