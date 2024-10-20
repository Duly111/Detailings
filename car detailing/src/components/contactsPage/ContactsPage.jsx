import React, { useRef, useState } from 'react';
import PopUpMessage from '../popUpMessage/PopUpMessage';

export default function ContactsPage() {
  const [showPopUp, setShowPopUp] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  function submitHandler() {
    setShowPopUp(true); // Показваме PopUp

    // Изчистване на полетата
    if (name.current) name.current.value = '';
    if (email.current) email.current.value = '';
    if (message.current) message.current.value = '';
  }

  return (
    <>
      <section className="contactUs">
        <h2 className="contacts-header">Свържи се с нас</h2>
        <div className="inputs">
          <div>
            <input className="inp" type="text" placeholder="Име" ref={name} />
          </div>
          <div>
            <input className="inp" type="email" placeholder="Имейл" ref={email} />
          </div>
          <div>
            <textarea rows={4} placeholder="Съобщение" defaultValue={""} ref={message} />
          </div>
          <button className="sendBtn" onClick={submitHandler}>Изпращане</button>
          {/* Предаваме функция за затваряне на PopUpMessage */}
          {showPopUp && <PopUpMessage close={() => setShowPopUp(false)} />}
        </div>
      </section>
    </>
  );
}
