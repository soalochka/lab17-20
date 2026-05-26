import React, { useState } from 'react';

// Страница «Обратная связь» — телефон, WhatsApp, Telegram + форма отправки вопроса.
// По ТЗ p содержит «+7 908 517 50 43».
export default function Contact({ t }) {
  const data = t.pages.contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      <h1>{data.h1}</h1>
      <div className="page-block">
        <p>
          <strong>{data.phoneLabel}: </strong>
          {data.phone}
        </p>
        <p>{data.whatsapp}</p>
        <p>{data.telegram}</p>
      </div>
      <div className="page-block">
        <h2>{data.formTitle}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {data.nameLabel}
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            {data.emailLabel}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            {data.messageLabel}
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit">{data.submitLabel}</button>
        </form>
        {sent && <div className="contact-thanks">{data.thanks}</div>}
      </div>
    </div>
  );
}
