import React from "react";
import Description from "./Description";
import Emoji from "./Emoji";
import Title from "./Title";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <Emoji emoji={props.emoji} />
          <Title name={props.name} />
        </dt>
        <Description meaning={props.meaning} />
      </div>
    </dl>
  );
}

export default Card;
