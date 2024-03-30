import { RiStarSFill } from "react-icons/ri";
import {useState} from 'react'
import style from "./RestaurantForm.module.css"

const RestaurantForm = () => {
    const [flavorRating, setFlavorRating] = useState(null);
    const [flavorHover, setFlavorHover] = useState(null);
    const [textureRating, setTextureRating] = useState(null);
    const [textureHover, setTextureHover] = useState(null);
    const [priceRating, setPriceRating] = useState(null);
    const [priceHover, setPriceHover] = useState(null);

  return (
    <div className={style.restaurantFormContainer}>
        <form className={style.restaurantForm}>
            <label className={style.restaurantFormLabel}>
                Name:
                <input className={style.restaurantFormInput} type="text" name='name' placeholder='Name' required />
            </label>
            <label className={style.restaurantFormLabel}>
                Email:
                <input className={style.restaurantFormInput} type="email" name='email' placeholder='Email' required />
            </label>
            {/* <label>
            Restaurant:
            <select name="Restaurant Name">
                <option default value="soboFood">Select Restaurant</option>
                <option value="soboFood">Sobo Food</option>
                <option value="houseParty">House Party</option>
                <option value="karanaFoods">KARANA Foods</option>
                <option value="blackSheepFoods">Black Sheep Foods</option>
                <option value="primeRoots">Prime Roots</option>
                <option value="naturesFynd">Nature's Fynd</option>
                <option value="eclipseFoods">Eclipse Foods</option>
                <option value="mellody">Mellody</option>
                <option value="misfitsHealth">Misfits Health</option>
                <option value="struesli">Struesli</option>
                <option value="wildseed">Wildseed</option>
                <option value="radRadish">Rad Radish</option>
                <option value="omSabor">OM Sabor</option>
                <option value="skyCafe">Sky Cafe</option>
            </select>
            </label> */}
            <div>
                <label className={style.restaurantFormLabel}>
                    Flavor:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantFormRatingRadio}
                                    type="radio" 
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setFlavorRating(currentRating)}
                                />
                                <RiStarSFill 
                                    className={style.restaurantFormRatingStar}
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
                <label className={style.restaurantFormLabel}>
                    Texture:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantFormRatingRadio}
                                    type="radio" 
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setTextureRating(currentRating)}
                                />
                                <RiStarSFill 
                                    className={style.restaurantFormRatingStar}
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
                <label className={style.restaurantFormLabel}>
                    Price:
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                className={style.restaurantFormRatingRadio}
                                    type="radio" 
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setPriceRating(currentRating)}
                                />
                                <RiStarSFill 
                                    className={style.restaurantFormRatingStar}
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
            <label className={style.restaurantFormLabel}>
                Comments:
                <textarea 
                    className={style.restaurantFormTextInput}
                    name="postContent"
                    defaultValue="What did you think?" 
                    rows={4} 
                    cols={40} />
            </label>
        </form> 
    </div>
  )
};

export default RestaurantForm;
