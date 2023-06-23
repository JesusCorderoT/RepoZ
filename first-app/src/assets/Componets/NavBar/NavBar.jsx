// import LoginIcon from 'react-router-dom';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NAV_IMG_ULR = 'https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png';

const NavBar = ({links,isLogged}) =>
{

    
    const navLinks = links.map(link =>(

        <Link 
        to={link.link}
        key={link.name}
        >
        {link.name}
        
         </Link>
    
    ));
     
 

  

    return (
        <nav className="navBar">
            <div className="nav--container"> 
                <div className="nav--left">
                    <img src={NAV_IMG_ULR} alt="logo" />
                    <h1 className="nav--title">
                        Space-app
                    </h1>
                </div>

                <div className="nav--right">
                <div className="nav--links">
                        {
                            isLogged ? navLinks : <LoginIcon />
                        }

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;