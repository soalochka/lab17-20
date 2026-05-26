import React from 'react';

// Страница «Новости» — она же стартовая страница (localhost:3000 -> Новости).
// По ТЗ должны присутствовать h1 и p; ниже — список периодических новостей и
// возможность скачать прайс-лист (требование «скачивать различного рода документы»).
export default function News({ t }) {
  const data = t.pages.news;

  const handleDownload = () => {
    const lines = [
      `${t.siteTitle} — ${data.downloadLabel}`,
      '',
      ...t.pages.products.rows.map(
        (r) => `${r.name} — ${r.desc} — ${r.price} ₽`
      )
    ];
    const blob = new Blob([lines.join('\n')], {
      type: 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.downloadFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>{data.h1}</h1>
      <p>{data.p}</p>
      <div className="page-block">
        <p>{data.intro}</p>
        <button
          type="button"
          className="download-btn"
          onClick={handleDownload}
        >
          {data.downloadLabel}
        </button>
      </div>
      <h2 style={{ color: '#000', marginBottom: 8 }}>
        {t.nav.news}
      </h2>
      {data.items.map((it, idx) => (
        <div className="news-item" key={idx}>
          <strong>{it.title}</strong>
          <div>{it.text}</div>
          <div className="news-date">{it.date}</div>
        </div>
      ))}
    </div>
  );
}
