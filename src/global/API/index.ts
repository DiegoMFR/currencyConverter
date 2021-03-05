const rootUrl = 'https://api.exchangeratesapi.io/';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
  
export const getLatest = (base?) =>
  fetch(`${rootUrl}latest${ base ? '?base=' + base : ''}`)
    .then(handleErrors)
    .then(res => res.json());

export const getBySymbols = (symbols:Array<string>) =>
  fetch(`${rootUrl}latest?symbols=${String(symbols)}`)
    .then(handleErrors)
    .then(res => res.json());
