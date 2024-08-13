import React, { useState } from 'react'

const Form = () => {
    const [detail, setDetail] = useState({
        firstname: '',
        lastname: '',
        address: '',
        country: '',
        email: '',
        phone: ''
    });
    const [contact, setContact] = useState([])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetail({ ...detail, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setContact((prev) => [...prev, detail,])
    }
    console.log("data", detail);
    
    return (
        <>
            <div>
                <div>
                    <h1>Thank you So muvh for your taking time</h1>
                    <p>please provide the below details!</p>
                </div>
                <label htmlFor='firstname'>First Name :</label><br />
                <input type='text' placeholder='John.' name='firstname' value={detail.firstname} onChange={handleInputChange} /><br />
                <label htmlFor='lastname'>Last Name :</label><br />
                <input type='text' placeholder='Doe.' name='lastname' value={detail.lastname} onChange={handleInputChange} /><br />
                <label htmlFor='address'>Address :</label><br />
                <textarea placeholder='Indore.' name='address' value={detail.address} onChange={handleInputChange} /><br />
                <label htmlFor='country'>Country :</label><br />
                <input type='text' placeholder='India.' name='country' value={detail.country} onChange={handleInputChange} /><br />
                <label htmlFor='email'>Email Id :</label><br />
                <input type='text' placeholder='xyz@gmail.com.' name='email' value={detail.email} onChange={handleInputChange} /><br />
                <label htmlFor='phone'>Phone :</label><br />
                <input type='tel ' placeholder='123'name='phone'  value={detail.phone} onChange={handleInputChange} /><br />
                <button onClick={handleSubmit}>Submit Feedback</button>
            </div>
        </>
    )
}

export default Form