import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Header from "./header/Header";
import AllCards from "./card/AllCards";

// I am only going to use Hooks and Functional Components.
function TrelloBoard() {
  return (
    <>
      {/* Header component */}
      <Header />
      {/* Cards */}
      <AllCards />
    </>
  );
}

export default TrelloBoard;
