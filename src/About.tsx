import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.nytimes.com/games/wordle/index.html">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>.
      </p>
      <p>
        You get {maxGuesses} tries to guess a target word.
      </p>
      <p>Before each guess, you get a new crossword-style clue, using <a href="https://github.com/jasonphillips/react-crossword-generator">clues</a> from crosswords.</p>
      <hr />
      <p>Our first clue is "<i>Can I have a ___?</i>" Let's try guessing "hand":</p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Elsewhere, letter: "h" },
          { clue: Clue.Elsewhere, letter: "a" },
          { clue: Clue.Elsewhere, letter: "n" },
          { clue: Clue.Correct, letter: "d" },
        ]}
        annotation={"Can I have a ___?"}
      />
      <p>
        <b className={"green-bg"}>D</b> is correct! The last letter is{" "}
        <b className={"green-bg"}>D</b>
        .
      </p>
      <p>
        <b>H</b>, <b>A</b>, and <b>N</b> may or may not be in the target word.
      </p>
      <hr />
      <p>Our new clue is "<i>Slang for 'So true.'</i>"</p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "w" },
          { clue: Clue.Correct, letter: "o" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Correct, letter: "d" },
        ]}
        annotation={"Slang for 'So true.'."}
      />
      <p>
        Nice! We solved it.
      </p>
      <hr />
      <p>
        Report issues{" "}
        <a href="https://github.com/mobeets/cluedle/issues">here</a>.
      </p>
    </div>
  );
}
