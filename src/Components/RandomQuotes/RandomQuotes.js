import "./RandomQuotes.scss";
import { useEffect, useState } from "react";
// import _ from "lodash";

const RandomQuotes = ({ className }) => {
  const quotesList = [
    "What, So Everyone’s Supposed To Sleep Every Single Night Now?",
    'What People Call "Love" Is Just A Chemical Reaction...',
    "...Meeting Them Head-On, Charging Into 'Em Like A Bull - That's How We Grow As People",
    "Weddings Are Basically Funerals With A Cake",
    "I Always Slay It, Queen.",
    "...Welcome To The Club, Pal",
    "I'm A Scientist; Because I Invent...",
    "Hot Funeral Selfies...",
    "Get Out Of Here, Summer! You Ruined The Season 4 Premiere!",
    "Sometimes Science Is More Art Than Science, Morty",
    "This One's Not Directed By Ron Howard...",
    "Wubba Lubba Dub Dub!",
    "The Universe Is Basically An Animal...",
    "...To Live Is To Risk It All...",
  ];

  var [quote, setQuote] = useState("");

  // setQuote(quotesList[0]);

  const selectQuote = () => {
    const selectedQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
    setQuote(selectedQuote);
  };

  useEffect(() => {
    setQuote(quotesList[0]);
    setInterval(selectQuote, 3000);
    return () => {
      clearInterval(selectQuote);
    };
  }, []);

  return <div className={className}>{quote}</div>;
};

export default RandomQuotes;
