import {Link} from 'react-router-dom'
import style from "./CustomerDashboard.module.css"

const CustomerDashboard = () => {
 
  return (
    <>
        <div className={style.customerDashboardLinks}>
            <div className={style.customerDashboardLinkContainer}>
                <Link to={"/soboFood"} className={style.customerDashboardLink}>Sobo Food</Link>
                <Link to={"/houseParty"} className={style.customerDashboardLink}>House Party</Link>
                <Link to={"/karanaFoods"} className={style.customerDashboardLink}>KARANA Foods</Link>
                <Link to={"/blackSheepFoods"} className={style.customerDashboardLink}>Black Sheep Foods</Link>
                <Link to={"/primeRoots"} className={style.customerDashboardLink}>Prime Roots</Link>
            </div>
            <div className={style.customerDashboardLinkContainer}>
                <Link to={"/naturesFynd"} className={style.customerDashboardLink}>Nature's Fynd</Link>
                <Link to={"/eclipseFoods"} className={style.customerDashboardLink}>Eclipse Foods</Link>
                <Link to={"/mellody"} className={style.customerDashboardLink}>Mellody</Link>
                <Link to={"/misfitsHealth"} className={style.customerDashboardLink}>Misfits Health</Link>
                <Link to={"/struesli"} className={style.customerDashboardLink}>Struesli</Link>
            </div>
            <div className={style.customerDashboardLinkContainer}>
                <Link to={"/wildseed"} className={style.customerDashboardLink}>Wildseed</Link>
                <Link to={"/radRadish"} className={style.customerDashboardLink}>Rad Radish</Link>
                <Link to={"/omSabor"} className={style.customerDashboardLink}>OM Sabor</Link>
                <Link to={"/skyCafe"} className={style.customerDashboardLink}>Sky Cafe</Link>
            </div>
        </div>
      </> 
  )
};

export default CustomerDashboard;
