import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const sendToTelegram = () => {
    const chat_id = "-1002600143343";
    const token = "7745027738:AAHQm01CqIwWsDVy0CFnWoguKqb0ztSO5CA"; 
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id,
      parse_mode: "HTML",
      text: `
<b>Новое сообщение с сайта</b>\n
<b>Имя:</b> ${fullname}
<b>Email:</b> ${yourEmail}
<b>Компания:</b> ${company}
<b>Тема:</b> ${subject}
<b>Сообщение:</b> ${message}
      `,
    };

    axios.post(
      api_key,
      userData
    )(() => {
      alert("Сообщение успешно отправлено!");
      setModal(false);
      clear();
    });
  };

  const clear = () => {
    setFullName("");
    setYourEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div className="contact-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Ваше имя*"
              required
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш Email*"
              required
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Компания*"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Тема*"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Сообщение*"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {modal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Подтверждение данных</h2>
              <p>
                <strong>Имя:</strong> {fullname}
              </p>
              <p>
                <strong>Email:</strong> {yourEmail}
              </p>
              <p>
                <strong>Компания:</strong> {company}
              </p>
              <p>
                <strong>Тема:</strong> {subject}
              </p>
              <p>
                <strong>Сообщение:</strong> {message}
              </p>

              <div className="modal-buttons">
                <button style={{background: ''}} onClick={sendToTelegram}>
                  Подтвердить и отправить
                </button>
                <button style={{
                  background: "red"
                }} onClick={() => setModal(false)}>Отмена</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
