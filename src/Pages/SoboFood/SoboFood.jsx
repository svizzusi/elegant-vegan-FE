import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";
import style from './SoboFood.module.css'

const Sobo = () => {
  return (
    <section className={style.restaurantSection}>
      <h1 className={style.restaurantHeading}>SOBO FOODS</h1>
      <RestaurantForm />
    </section>
  )
};

export default Sobo;
