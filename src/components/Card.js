import React from "react";

export default function Card(person) {
  return (
    <div className={person.backgroundStyle}>
      <div className="card-head d-flex flex-row">
        <img className="rounded-circle" src={person.image} alt="person"/>
        <section className="ms-3 p-10">
          <h1 className={person.nameClass}>{person.name}</h1>
          <p className="user-status">Verified Graduate</p>
        </section>
      </div>
      <section className="card-body p-0">
        <h5 className={person.titleClass}>{person.quoteHeader}</h5>
        <p className="card-text">{person.quoteText}</p>
      </section>
    </div>
  );
}
