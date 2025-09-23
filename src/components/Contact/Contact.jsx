import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className='contact section'>
      <div className='container'>
        <div className='contact__header'>
          <h2>Get Started with SecuADR</h2>
          <p className='contact__subtitle'>
            Ready to revolutionize your authentication? Contact us for a
            personalized demo and see how SecuADR can secure your organization.
          </p>
        </div>

        <div className='contact__content'>
          <div className='contact__info'>
            <div className='contact__info-item'>
              <Mail className='contact__icon' />
              <div>
                <h4>Email Us</h4>
                <p>atlas.adr11@gmail.com</p>
                <p>sankargopan1@gmail.com</p>
              </div>
            </div>

            <div className='contact__info-item'>
              <Phone className='contact__icon' />
              <div>
                <h4>Schedule a Call</h4>
                <p>Book a demo with our security experts</p>
              </div>
            </div>

            <div className='contact__info-item'>
              <MapPin className='contact__icon' />
              <div>
                <h4>Global Support</h4>
                <p>Available worldwide with 24/7 enterprise support</p>
              </div>
            </div>
          </div>

          <div className='contact__form'>
            <form onSubmit={handleSubmit} className='contact__form-container'>
              <div className='contact__form-group'>
                <label htmlFor='name'>Name *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='contact__input'
                />
              </div>

              <div className='contact__form-group'>
                <label htmlFor='email'>Email *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='contact__input'
                />
              </div>

              <div className='contact__form-group'>
                <label htmlFor='company'>Company</label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className='contact__input'
                />
              </div>

              <div className='contact__form-group'>
                <label htmlFor='message'>Message *</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='contact__textarea'
                  placeholder='Tell us about your authentication needs...'
                ></textarea>
              </div>

              <button type='submit' className='btn btn-primary btn-large'>
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
