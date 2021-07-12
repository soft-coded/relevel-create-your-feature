import React from "react";

import Card from "./Card";
import "./card.css";

// A component to house all the cards
export default function AllCards() {
  return (
    <div className="card-sidebar">
      {/* Normally, an array would be used to represent
			multiple cards, but I am only showing two cards
			so I did it the old fashioned way. And something
			like uuid can be used to generate a unique id for
			each card. */}
      <Card cardId={1} title="Ticket1" description="Please add a card here." />
      <Card cardId={2} title="Ticket2" description="Card already added." />
    </div>
  );
}
