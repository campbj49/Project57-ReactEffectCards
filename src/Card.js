import React, { useState, useEffect } from "react";
import axios from "axios";

/** Card: displays Card of cards
 * 
 * Props:
 * -none
 * 
 * State:
 * - none
 * 
 * App --> Card
 */

function Card({deckID}) {
  const [card, setCard] = useState(null);
  //when the element loads create a Card and save the ID in a state
  useEffect(function fetchCardWhenMounted() {
    async function fetchCard() {
      const deckResult = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw/`);
      setCard(deckResult.data.cards[0]);
      console.log(deckResult);
    }
    fetchCard();
  },[]);
  //When the "draw a card" is pressed get the next card and add it to the card array?

  return (
    <img src={card.image} style={{transform:`rotate(${(Math.floor(Math.random() * 90))-45}deg)`}}/>
  );
}

export default Card;
