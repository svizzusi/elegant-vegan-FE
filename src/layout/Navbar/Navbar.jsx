import {Link, NavLink} from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../../assets/images/logo.webp'

const Navbar = () => {
  return (
    <header className={style.navHeader}>
      <nav className={style.nav}>
        <div className={style.navLogo}>
          <Link to={'/'} className={style.navLink}>
            <img 
              className={style.logo} 
              src={logo} 
              alt={logo} 
            />
          </Link>
        </div>
        <div className={style.navLinks}>
          <NavLink to={'/admin'} className={style.navLink}>Admin</NavLink>
          <NavLink to={'/customer'} className={style.navLink}>Customer</NavLink>
          <NavLink to={'/contact'} className={style.navLink}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
