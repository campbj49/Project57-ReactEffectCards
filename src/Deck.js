import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Deck.css";
import Card from "./Card";

/** Deck: displays deck of cards
 * 
 * Props:
 * -none
 * 
 * State:
 * - none
 * 
 * App --> Deck
 */

function Deck(props) {
  const [deck, setDeck] = useState(null);
  const [stack, setStack] = useState([]);
  //when the element loads create a deck and save the ID in a state
  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const deckResult = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(deckResult.data.deck_id);
    }
    fetchDeck();
  },[]);
  //When the "draw a card" is pressed get the next card and add it to the card array?
  function draw(){
    setStack(...stack, (<Card deckID = {deck}/>))
  }
  //Render stack

  return (
    <div className="Deck">
    <button onclick={draw}>Draw a card</button>
      <div className="stack">
        {stack}
      </div>
    </div>
  );
}

export default Deck;
