import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="img" src={props.data.img} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h2 className="nameofcharacter">{props.data.name}</h2>
            <span> <b>Actor name : </b>{props.data.portrayed}</span> <br/>
            <span><b>Nickname : </b>{props.data.nickname}</span> <br/>
            <span><b>Birthday : </b>{props.data.birthday}</span> <br/>
            <span><b>Status : </b>{props.data.status}</span> <br/>
            <span className="occu"><b>Occupation : </b>{props.data.occupation[0]}</span> <br/>
          </div>
        </div>
      </div>
    </div>
  );
}
