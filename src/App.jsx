import {
  asyncGetQuotes,
  catchThenGetQuotes,
  thenGetQuotes,
  tryAsyncGetQuotes,
} from './services/promise-me';
export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };
  return (
    <>
      <button onClick={() => handleClick(asyncGetQuotes)}>
        Async Get Quotes
      </button>
      <button onClick={() => handleClick(thenGetQuotes)}>
        .then() Get Quotes
      </button>
      <button onClick={() => handleClick(tryAsyncGetQuotes)}>
        try/catch getQuotes
      </button>
      <button onClick={() => handleClick(catchThenGetQuotes)}>
        .catch() getQuotes
      </button>
    </>
  );
}
