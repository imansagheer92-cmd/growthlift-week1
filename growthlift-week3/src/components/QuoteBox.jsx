import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((r) => r.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>"{quote}"</p>}
    </div>
  );
}

export default QuoteBox;