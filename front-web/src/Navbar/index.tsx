import './styles.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            
            <Link to="/" className="navbar-logo">
                <img className="navbar-logo" src={Logo} alt="logo pizzaria" />
            </Link>
        
            <Link to="/" className="logo-text" >
                
                <h2 className='nav-title'>
                    PIZZARIA IMPÉRIO
                </h2>
            </Link>
        </nav>
    )
}

export default Navbar;