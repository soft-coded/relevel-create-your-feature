import React, { useRef } from "react";
import { Modal, Button } from "react-bootstrap";

// Modal to add a card. NOT STYLED TOO MUCH
export default function CustomModal(props) {
  const titleRef = useRef();
  const descRef = useRef();
  function handleSave() {
    props.setCards(cards => {
      return [
        ...cards,
        { title: titleRef.current.value, description: descRef.current.value }
      ];
    });
    props.onHide();
  }

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Title</h5>
        <input type="text" ref={titleRef} />
        <h5>Description</h5>
        <input type="text" ref={descRef} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
