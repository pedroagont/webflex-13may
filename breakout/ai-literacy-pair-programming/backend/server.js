const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (from forms)
app.use(express.urlencoded({ extended: true }));

// Random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5; // Player starts with 5 attempts
console.log(randomNumber);

// Route for the home page
app.get('/', (req, res) => {
  res.send(`
        <h1>Guess the Number!</h1>
        <p>Guess a number between 1 and 100. You have ${attempts} attempts remaining.</p>
        <form action="/guess" method="POST">
            <input type="number" name="guess" min="1" max="100" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle the guess
app.post('/guess', (req, res) => {
  const userGuess = parseInt(req.body.guess);

  // Check if the player has attempts left
  if (attempts > 1) {
    if (userGuess === randomNumber) {
      res.send(`
                <h1>Congratulations! You guessed the number!</h1>
                <p>The number was ${randomNumber}.</p>
                <a href="/">Play Again</a>
            `);
      // Reset the game
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 5; // Reset attempts
      console.log(randomNumber);
    } else if (userGuess > randomNumber) {
      attempts--; // Decrement attempts
      res.send(`
                <h1>Too high!</h1>
                <p>You have ${attempts} attempts remaining.</p>
                <a href="/">Back to guess</a>
            `);
    } else {
      attempts--; // Decrement attempts
      res.send(`
                <h1>Too low!</h1>
                <p>You have ${attempts} attempts remaining.</p>
                <a href="/">Back to guess</a>
            `);
    }
  } else {
    // Player ran out of attempts
    res.send(`
            <h1>You've run out of attempts!</h1>
            <p>The correct number was ${randomNumber}.</p>
            <a href="/">Play Again</a>
        `);
    // Reset the game
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5; // Reset attempts
    console.log(randomNumber);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
