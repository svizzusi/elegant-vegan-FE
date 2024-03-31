import RestaurantReviewForm from '../../components/RestaurantReviewForm/RestaurantReviewForm';
import style from './SoboFood.module.css'

const Sobo = () => {
  return (
    <section className={style.restaurantSection}>
      <h1 className={style.restaurantHeading}>SOBO FOODS</h1>
      <RestaurantReviewForm />
    </section>
  )
};

export default Sobo;
