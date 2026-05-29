import React from 'react';

export default function About({ t }) {
  const data = t.pages.about;
  return (
    <div>
      <h1>{data.h1}</h1>
      <div className="page-block">
        <h2>{data.subtitle}</h2>
        <p>{data.text}</p>
      </div>
      <div className="page-block">
        <h2>{data.achievementsTitle}</h2>
        <ul>
          {data.achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
