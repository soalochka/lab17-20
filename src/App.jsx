import React, { useState } from 'react';
import { translations } from './i18n.js';
import News from './pages/News.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';

// Маршрутизация без библиотек: страница хранится в состоянии.
// По умолчанию открывается «Новости» — этого требует тест-кейс из ТЗ
// (адрес localhost:3000 -> страница «Новости»).
const PAGES = ['news', 'about', 'contact', 'products'];

export default function App() {
  const [page, setPage] = useState('news');
  const [lang, setLang] = useState('ru');
  const t = translations[lang];

  const renderPage = () => {
    switch (page) {
      case 'news':
        return <News t={t} />;
      case 'about':
        return <About t={t} />;
      case 'contact':
        return <Contact t={t} />;
      case 'products':
        return <Products t={t} />;
      default:
        return <News t={t} />;
    }
  };

  const otherLang = lang === 'ru' ? 'en' : 'ru';

  return (
    <div className="app">
      {/* HEADER — зелёный, логотип по центру */}
      <header className="header">
        <div className="header-inner">
          <div className="logo" aria-label={t.siteTitle}>
            <svg
              className="logo-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="10" r="4" fill="#ffd966" />
              <circle cx="10" cy="14" r="4" fill="#ff6b6b" />
              <circle cx="22" cy="14" r="4" fill="#ff6b6b" />
              <circle cx="13" cy="18" r="4" fill="#ff9bd0" />
              <circle cx="19" cy="18" r="4" fill="#ff9bd0" />
              <path d="M16 21 L16 30" stroke="#2e7d32" strokeWidth="2" fill="none" />
              <path d="M16 26 Q12 24 10 26" stroke="#2e7d32" strokeWidth="2" fill="none" />
              <path d="M16 28 Q20 26 22 28" stroke="#2e7d32" strokeWidth="2" fill="none" />
            </svg>
            <span className="logo-text">{t.siteTitle}</span>
          </div>
          <button
            type="button"
            className="lang-switch"
            onClick={() => setLang(otherLang)}
            title={t.langSwitchTitle}
            aria-label={t.langSwitchTitle}
          >
            {t.langSwitchLabel}
          </button>
        </div>
      </header>

      {/* MAIN — 89% высоты, делится на 3 колонки 20% / 60% / 20% */}
      <main className="main">
        {/* SECTION — золотой, слева. Сверху ссылки на страницы, снизу баннеры. */}
        <section className="section">
          <nav className="nav" aria-label="Главное меню">
            <ul>
              {PAGES.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className={page === key ? 'nav-link active' : 'nav-link'}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(key);
                    }}
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="banner">
            <div className="banner-title">{t.section.bannerTitle}</div>
            <div className="banner-text">{t.section.bannerText}</div>
          </div>
        </section>

        {/* ARTICLE — синий, центральная часть. Контент текущей страницы. */}
        <article className="article">{renderPage()}</article>

        {/* ASIDE — бирюзовый, справа. Сверху облако тегов, снизу баннер. */}
        <aside className="aside">
          <div className="tagcloud">
            <div className="tagcloud-title">{t.aside.tagsTitle}</div>
            <ul className="tagcloud-list">
              {t.aside.tags.map((tag, i) => (
                <li key={tag} className={`tag tag-size-${(i % 4) + 1}`}>
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="banner">
            <div className="banner-title">{t.aside.bannerTitle}</div>
            <div className="banner-text">{t.aside.bannerText}</div>
          </div>
        </aside>
      </main>

      {/* FOOTER — красный, контактная информация */}
      <footer className="footer">
        <div>{t.footer.company}</div>
        <div>{t.footer.address}</div>
        <div>{t.footer.phone}</div>
        <div>{t.footer.author}</div>
      </footer>
    </div>
  );
}
