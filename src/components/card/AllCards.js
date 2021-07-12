import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Card from "./Card";
import Modal from "../modal/Modal";
import "./card.css";

// A component to house all the cards
export default function AllCards() {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  return (
    <div className="card-sidebar">
      {/* Normally something like uuid would be used to 
			generate a unique id for each card. */}
      {cards.map((card, ind) => {
        return (
          <Card
            cardId={ind}
            title={card.title}
            description={card.description}
          />
        );
      })}
      {/* Button to add card that opens the modal */}
      <Button
        variant="primary"
        className="add-btn"
        onClick={() => setShowModal(true)}
      >
        Add Card
      </Button>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        setCards={setCards}
      />
    </div>
  );
}
