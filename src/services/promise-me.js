// https://officeapi.dev/api/quotes/random
// https://futuramaapi.herokuapp.com/api/quotes/1

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const result = await res.json();
  return result;
}

export function getQuotes() {
  return 1;
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */

export function thenGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1').then((res) =>
    res.json()
  );
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function tryAsyncGetQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const json = await res.json();
    return json;
  } catch (err) {
    console.error('oh no, error!');
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function catchThenGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .catch((err) => console.log('oh noes, error!'));
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
