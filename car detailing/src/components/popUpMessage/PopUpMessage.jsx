import React from 'react';

export default function PopUpMessage({ close }) {
  return (
    <div className="popup-overlay"> {/* Добавяме размазан фон */}
      <div className="notification-container">
        <div className="icon-container">
        </div>
        <div className="message-content">
          <h2 className="message-title">Message</h2>
          <p className="message-subtitle">Благодарим за отделеното време, ще се свържем с Вас при първа възможност.Хубав ден.</p>
          <button className="close-button" onClick={closeClickHandler}>Close</button> 
        </div>
      </div>
    </div>
  );

  function closeClickHandler() {
    close(); // Затваряме попъпа при натискане на бутона
  }
}
