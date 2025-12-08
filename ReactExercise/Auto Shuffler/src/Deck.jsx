import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
/** Deck: uses deck API, allows drawing card at a time. */

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const timeRef = useRef(null);

  useEffect(function loadDeckFromAPI() {
    async function fetchData() {
      const d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(d.data);
    }
    fetchData();
  }, [setDeck]);



  /** Draw card: change the state & effect will kick in. */
  useEffect(function drawCard() {
    async function draw() {
    try {
      let drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);

      if (drawRes.data.remaining === 0) throw new Error("Deck empty!");

      const card = drawRes.data.cards[0];

      setDrawn(d => [
        ...d,
        {
          id: card.code,
          name: `${card.value} of ${card.suit}`,
          image: card.image,
        },
      ]);
    } catch (err) {
      setIsDrawing(false);
      alert(err);
    }
  }

    if (isDrawing && !timeRef.current) {
      timeRef.current = setInterval(draw, 1000);
    } else if (!isDrawing && timeRef.current) {
        stopDrawing();
    }
  
    function stopDrawing() {
        if (timeRef.current) clearInterval(timeRef.current);
        timeRef.current = null;
    }
    
    return function cleanup() {
      stopDrawing();
    };
    }, [isDrawing, deck]);

    useEffect(function shuffleDeck() {
        async function shuffle(deck) {
            try {
                await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
                setDrawn([]);
                setIsDrawing(false);
                setIsShuffling(false);
            } catch (err) {
                alert(err);
            }
        }

        if (isShuffling && deck) shuffleDeck(deck);
    }, [isShuffling, deck]);

    function toggleDrawing() {
        setIsDrawing(d => !d);
    }

    function startShuffling() {
        return setIsShuffling(true);
    }
  
  /** Return draw button (disabled if shuffling) */
  function renderDrawBtn() {
    if (!deck) return null;

    return (
      <button
        className="Deck-gimme"
        onClick={toggleDrawing}
        disabled={isShuffling}>
        {isDrawing ? "STOP " : "TRY "}
        AUTO DRAW
      </button>
    );
  }

  /** Return shuffle button (disabled if already is) */
  function renderShuffleBtn() {
    if (!deck) return null;
    return (
      <button
        className="Deck-gimme"
        onClick={startShuffling}
        disabled={isShuffling}>        
        SHUFFLE DECK
      </button>
    );
  }

  return (
    <main className="Deck">

      {renderDrawBtn()}
      {renderShuffleBtn()}

      <div className="Deck-cardarea">{
        drawn.map(c => (
          <Card key={c.id} name={c.name} image={c.image} />
        ))}
      </div>

    </main>
  );
}

export default Deck;
