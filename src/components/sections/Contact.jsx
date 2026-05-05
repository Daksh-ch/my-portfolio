import react from 'react'
import { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const isFormvalid = !formData.name || !formData.email || !formData.message;

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        console.log("Form submitted!");

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }

    return(
        <section id="contact" className='contact-section'>
            <h2 className='contact-title'>Contact</h2>
            <p className='contact-subtitle'>Get in touch!</p>

            <div className="contact-card">
                <form onSubmit={handleSubmit}  className='contact-form'>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
                    </div>
                    <button type="submit" className='submit-btn' disabled={isFormvalid}>Send</button>
                </form> 
            </div>
        </section>
    )
}

export default Contact