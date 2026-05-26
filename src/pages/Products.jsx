import React from 'react';

// Страница «Продукты и услуги» — табличная форма с ценами на продукты и услуги.
export default function Products({ t }) {
  const data = t.pages.products;
  return (
    <div>
      <h1>{data.h1}</h1>
      <div className="page-block">
        <p>{data.intro}</p>
        <table className="products-table">
          <thead>
            <tr>
              <th>{data.table.name}</th>
              <th>{data.table.desc}</th>
              <th>{data.table.price}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r, i) => (
              <tr key={i}>
                <td>{r.name}</td>
                <td>{r.desc}</td>
                <td>{r.price.toLocaleString('ru-RU')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
