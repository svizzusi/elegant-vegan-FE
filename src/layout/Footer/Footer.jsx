import {Link} from 'react-router-dom'
import style from './Footer.module.css'
import logo from '../../assets/images/logo.webp'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footerSection}>
        <div className={style.footerLogo}>
          <Link to={'/'} className={style.footerLink}>
            <img 
              className={style.logo} 
              src={logo} 
              alt={logo} 
            />
          </Link>
        </div>
        <div className={style.footerLinks}>
          <Link to={'/admin'} className={style.footerLink}>Admin</Link>
          <Link to={'/customer'} className={style.footerLink}>Customer</Link>
          <Link to={'/contact'} className={style.footerLink}>Contact</Link>
        </div>
      </section>
    </footer>
  )
};

export default Footer;
