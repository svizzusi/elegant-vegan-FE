import style from './CreateResProfile.module.css'
import {useState} from 'react'

const CreateResProfile = () => {

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevAddress => ({
          ...prevAddress,
          [name]: value
        }));
      };

  return (
    <section>
        <form>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Restaurant Name"
                    onChange={handleChange}
                />
            </label>
            <label className={style.createResProfileFormLabel}>
                Email:
                <input 
                    className={style.createResProfileFormInput} 
                    type="email" 
                    name='email' 
                    placeholder='Email' 
                    required
                    onChange={handleChange}
                    />
            </label>
            <label className={style.createResProfileFormLabel}>
                Phone:
                <input 
                    className={style.createResProfileFormInput} 
                    type="tel" 
                    name='phone' 
                    placeholder='Phone' 
                    required 
                    onChange={handleChange}
                />
            </label>
            <label>
                Street:
                <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                />
            </label>
            <label>
                City:
                <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                />
            </label>
            <label>
                State:
                <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                />
            </label>
            <label>
                Postal Code:
                <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleChange}
                />
            </label>
            <label>
                Country:
                <select
                    name="country"
                    value={address.country}
                    onChange={handleChange}
                >
                    <option value="USA">United States</option>
                    <option value="CAN">Canada</option>
                    <option value="UK">United Kingdom</option>
                </select>
            </label>
        </form>
    </section>
  )
};

export default CreateResProfile;
