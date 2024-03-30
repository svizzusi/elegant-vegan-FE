import { RiStarSFill } from "react-icons/ri";
import {useState} from 'react'
import style from "./RestaurantReviewForm.module.css"

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

  return (
    <div className={style.restaurantReviewFormContainer}>
        <form className={style.restaurantReviewForm}>
            <label className={style.restaurantReviewFormLabel}>
                Name:
                <input 
                    className={style.restaurantReviewFormInput} 
                    type="text" 
                    name='name' 
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
                    name='email' 
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
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setFlavorRating(currentRating)}
                                />
                                <RiStarSFill 
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
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setTextureRating(currentRating)}
                                />
                                <RiStarSFill 
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
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setPriceRating(currentRating)}
                                />
                                <RiStarSFill 
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
                    name="postContent"
                    defaultValue="What did you think?" 
                    rows={4} 
                    cols={40}
                    value={formData.customerReviewMessage}
                    onChange={handleChange} 
                />
            </label>
                <input
                    className={style.addProductSubmit}
                    disabled={
                        formData.customerName === '' ||
                        formData.customerEmail === '' ||
                        formData.customerReviewMessage === ''||
                        formData.customerFlavorRating === ''||
                        formData.customerTextureRating === ''||
                        formData.customerPriceRating === ''
                    }
                    type='submit'
                    value='Add Product'
                />
        </form> 
    </div>
  )
};

export default RestaurantReviewForm;
