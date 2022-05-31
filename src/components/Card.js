import React from "react";

export default function Card(person) {
  return (
    <div className={person.backgroundStyle}>
      <div className="card-head d-flex flex-row">
        <img className="rounded-circle" src={person.image} alt="person"/>
        <section className="ms-3 p-10">
          <h5 className="mb-0 user-name" id={person.nameId}>{person.name}</h5>
          <p className="user-status" id={person.statusId}>{person.status}</p>
        </section>
      </div>
      <section className="card-body p-0">
        <h5 className="card-title" id={person.titleId}>{person.quoteHeader}</h5>
        <p className="card-text">{person.quoteText}</p>
      </section>
    </div>
  );
}
