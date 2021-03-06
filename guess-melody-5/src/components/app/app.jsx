import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GameScreen from "../game-screen/game-screen";

// Добавим маршрут `/game` и обновим содержимое маршрутов `/dev-genre` и `/dev-artist`. Передадим в игровые экраны моки.
//
// Затем добавим передачу обработчика события `onPlayButtonClick` в компонент `WelcomeScreen`.

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
            //Здесь в колбеке этот синтаксис нужен для привязки this без использования bind в конструкторе
            //<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
// <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>
// Две строки выше — эквивалентны, и используют стрелочные функции и Function.prototype.bind соответственно.

              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        ></Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={secondQuestion} onAnswer={() => {}} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={firstQuestion} onAnswer={() => {}} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen errorsCount={errorsCount} questions={questions} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
