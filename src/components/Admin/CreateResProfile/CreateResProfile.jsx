import style from './CreateResProfile.module.css'
import {useState} from 'react'
import axios from 'axios'

const CreateResProfile = () => {

    const [formData, setFormData] = useState({
        resName: '',
        resEmail: '',
        resPhone: '',
        resStreet: '',
        resCity: '',
        resState: '',
        resPostalCode: '',
        resCountry: ''
      });
    
      const handleChange = (e) => {
        setFormData(prevFormData => {
            return{ 
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()

        const name = formData.resName
        const email = formData.resEmail
        const phone = formData.resPhone 
        const street = formData.resStreet 
        const city= formData.resCity
        const state = formData.resState
        const postalCode = formData.resPostalCode
        const country = formData.resCountry

            try {
                const res = await axios.post('https://localhost:5173', {
                    name,
                    email,
                    phone,
                    street,
                    city,
                    state,
                    postalCode,
                    country
                })
                // console.log(formData)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
    }

  return (
    <section className={style.createResProfileFormContainer}>
        <form
            onSubmit={handleSubmit}
            className={style.createResProfileForm}>
            <label className={style.createResProfileFormLabel}>
                Name:
                <input 
                    type="text" 
                    name="resName" 
                    placeholder="Restaurant Name"
                    required
                    value={formData.resName}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                Email:
                <input 
                    className={style.createResProfileFormInput} 
                    type="email" 
                    name='resEmail' 
                    placeholder='Email' 
                    required
                    value={formData.resEmail}
                    onChange={handleChange}
                    />
            </label>
            <label className={style.createResProfileFormLabel}>
                Phone:
                <input 
                    className={style.createResProfileFormInput} 
                    type="tel" 
                    name='resPhone' 
                    placeholder='Phone' 
                    required 
                    value={formData.resPhone}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                Street:
                <input
                    className={style.createResProfileFormInput}
                    type="text"
                    name="resStreet"
                    required
                    value={formData.resStreet}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                City:
                <input
                    className={style.createResProfileFormInput}
                    type="text"
                    name="resCity"
                    required
                    value={formData.resCity}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                State:
                <input
                    className={style.createResProfileFormInput}
                    type="text"
                    name="resState"
                    required
                    value={formData.resState}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                Postal Code:
                <input
                    className={style.createResProfileFormInput}
                    type="text"
                    name="resPostalCode"
                    required
                    value={formData.resPostalCode}
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                Country:
                <select
                    name="resCountry"
                    required
                    value={formData.resCountry}
                    onChange={handleChange}
                >
                    <option value="USA">United States</option>
                    <option value="CAN">Canada</option>
                    <option value="UK">United Kingdom</option>
                </select>
            </label>
            <div className={style.restaurantReviewFormSummitContainer}>
                <input
                    className={style.restaurantReviewFormSubmit}
                    type='submit'
                    disabled={
                        formData.resName === '' ||
                        formData.resEmail === '' ||
                        formData.resPhone === ''||
                        formData.resStreet === ''||
                        formData.resCity === ''||
                        formData.resPostalCode === '' ||
                        formData.resCountry === ''
                    }
                />
            </div>
        </form>
    </section>
  )
};

export default CreateResProfile;
