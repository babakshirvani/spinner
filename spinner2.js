const characters = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r    ", "\n"];

const myfunc = function(characters) {
  let delay = 0;
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(`${characters[i]}`)
    }, delay);
    delay += 200;
  }
}

myfunc(characters)