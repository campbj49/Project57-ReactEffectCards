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
  const [card, setCard]= useState(null);
  //when the element loads get the card data from the API
  useEffect(function fetchCardWhenMounted() {
    async function fetchCard() {
      const deckResult = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw/`);
        if(deckResult.data.remaining >0)
            setCard(deckResult.data.cards[0].image);
        else setCard("https://static.vecteezy.com/system/resources/thumbnails/017/178/563/small/cross-check-icon-symbol-on-transparent-background-free-png.png")
      console.log("card render ran")
    }
    fetchCard();
  },[]);
  let style = {transform:`rotate(${(Math.floor(Math.random() * 90))-45}deg)`};
  return (
    <img src={card} style={{transform:`rotate(${(Math.floor(Math.random() * 90))-45}deg)`}}/>
  );
}

export default Card;
