import React from 'react';
import PopUpMessage from '../popUpMessage/PopUpMessage';
import contactsValidation from './ContactsValidation'

export default function ContactsPage() {
  const {showPopUp,formik,setShowPopUp} = contactsValidation()

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="contactUs" >
        <h2 className="contacts-header">Свържи се с нас</h2>
        <div className="inputs">
          <div>
            <input
              className="inp"
              type="text"
              placeholder="Име"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='invalidEmail'>
                <span>{formik.errors.name}</span>
              </div>   
            ) : null}
          </div>
          <div>
            <input
              className="inp"
              type="email"
              placeholder="Имейл"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='invalidEmail'>
                <span>{formik.errors.email}</span>
              </div>   
            ) : null}
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Съобщение"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className='invalidEmail'>
                <span>{formik.errors.message}</span>
              </div>   
            ) : null}
          </div>
          <button className="sendBtn" type="submit">Изпращане</button>
          {showPopUp && <PopUpMessage close={() => setShowPopUp(false)} />}
        </div>
      </section>
      </form>
  );
}