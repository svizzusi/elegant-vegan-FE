import {FaStar} from "react-icons/fa";
import {useState} from 'react'
import style from "./RestaurantReviewForm.module.css"
import axios from 'axios'

const RestaurantReviewForm = () => {
    const [flavorRating, setFlavorRating] = useState(null);
    const [flavorHover, setFlavorHover] = useState(null);
    const [textureRating, setTextureRating] = useState(null);
    const [textureHover, setTextureHover] = useState(null);
    const [priceRating, setPriceRating] = useState(null);
    const [priceHover, setPriceHover] = useState(null);
    
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerFlavorRating: flavorRating,
        customerTextureRating: textureRating,
        customerPriceRating: priceRating,
        customerReviewMessage: ''
    });

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        });   
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = formData.customerName
        const email = formData.customerEmail
        const flavor = formData.customerFlavorRating 
        const texture = formData.customerTextureRating 
        const price = formData.customerPriceRating
        const message = formData.customerReviewMessage

            try {
                const res = await axios.post('http://localhost:5173', {
                    name,
                    email,
                    flavor,
                    texture,
                    price,
                    message
                })
                console.log(res)
            } catch (err) {
                console.log(err)
            }
    }

  return (
    <section className={style.restaurantReviewFormContainer}>
        <form 
            className={style.restaurantReviewForm}
            onSubmit={handleSubmit}
        >
            <label className={style.restaurantReviewFormLabel}>
                Name:
                <input 
                    className={style.restaurantReviewFormInput} 
                    type="text" 
                    name='customerName' 
                    placeholder='Name'
                    value={formData.customerName} 
                    onChange={handleChange} 
                    required
                />
            </label>
            <label className={style.restaurantReviewFormLabel}>
                Email:
                <input 
                    className={style.restaurantReviewFormInput} 
                    type="email" 
                    name='customerEmail' 
                    placeholder='Email'
                    value={formData.customerEmail}
                    onChange={handleChange}
                    required 
                />
            </label>
            <div>
                <label className={style.restaurantReviewFormLabel}>
                    Flavor:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantReviewFormRatingRadio}
                                    type="radio" 
                                    name="flavorRating"
                                    value={currentRating}
                                    onClick={() => setFlavorRating(currentRating)}
                                />
                                <FaStar
                                    className={style.restaurantReviewFormRatingStar}
                                    size={50}
                                    color={currentRating <= (flavorHover || flavorRating) ? '#ffe066' : '#e4e5e9'}
                                    onMouseEnter={() => setFlavorHover(currentRating)}
                                    onMouseLeave={() => setFlavorHover(null)}
                                />
                            </label>
                        )
                    })}
                </label>
            </div>
            <div>
                <label className={style.restaurantReviewFormLabel}>
                    Texture:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantReviewFormRatingRadio}
                                    type="radio" 
                                    name="textureRating"
                                    value={currentRating}
                                    onClick={() => setTextureRating(currentRating)}
                                />
                                <FaStar 
                                    className={style.restaurantReviewFormRatingStar}
                                    size={50}
                                    color={currentRating <= (textureHover || textureRating) ? '#0fb0c2' : '#e4e5e9'}
                                    onMouseEnter={() => setTextureHover(currentRating)}
                                    onMouseLeave={() => setTextureHover(null)}
                                />
                            </label>
                        )
                    })}
                </label>
            </div>
            <div>
                <label className={style.restaurantReviewFormLabel}>
                    Price:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantReviewFormRatingRadio}
                                    type="radio" 
                                    name="priceRating"
                                    value={currentRating}
                                    onClick={() => setPriceRating(currentRating)}
                                />
                                <FaStar
                                    className={style.restaurantReviewFormRatingStar}
                                    size={50}
                                    color={currentRating <= (priceHover || priceRating) ? '#ff7036' : '#e4e5e9'}
                                    onMouseEnter={() => setPriceHover(currentRating)}
                                    onMouseLeave={() => setPriceHover(null)}
                                />
                            </label>
                        )
                    })}
                </label>
            </div>
            <label className={style.restaurantReviewFormLabel}>
                Comments:
                <textarea 
                    className={style.restaurantReviewFormTextInput}
                    name="customerReviewMessage"
                    rows={4} 
                    cols={40}
                    value={formData.customerReviewMessage}
                    onChange={handleChange} 
                />
            </label>
            <div className={style.restaurantReviewFormSummitContainer}>
                <input
                    className={style.restaurantReviewFormSubmit}
                    type='submit'
                    disabled={
                        formData.customerName === '' ||
                        formData.customerEmail === '' ||
                        formData.customerReviewMessage === ''||
                        formData.customerFlavorRating === ''||
                        formData.customerTextureRating === ''||
                        formData.customerPriceRating === ''
                    }
                />
            </div>
        </form> 
    </section>
  )
};

export default RestaurantReviewForm;
