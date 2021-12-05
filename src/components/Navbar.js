import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true)
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);

    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                   WXnSKN <i className='fab fa-typo3' />
               </Link>
               <div classname="menu-icon" onClick={handleClick}>
                   <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active'  : 'nav-menu '}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                           Services
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                           Products
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/Log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Log in
                       </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle="btn--outline">LOG IN</Button>}
           </div>
       </nav>
       </>
    );
}

export default Navbar
