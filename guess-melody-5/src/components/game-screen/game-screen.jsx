import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {GameType} from "../../const";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

// В этом компоненте будет сосредоточена логика переключния игровых экранов. Компонент должен рендериться по маршруту `/game`.
//
// Пока мы опишем заготовку для компонента. Нам потребуется стейт, значит создадим  class-компонент.
//
// В стейте будем хранить индекс очередной игры.

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  //  В методе `render` мы должны написать код, который будет рендерить игру на основе мок. Напомним, вариантов игр два: «Угадай исполнителя», «Угадай жанр».
  //
  // Если игр нет (кончились), то нужно вернуть пользователя на стартовую страницу — «WelcomeScreen».
  //
  // Обратите внимание на передачу обработчиков в компоненты `ArtistQuestionScreen` и `GenreQuestionScreen`. Код обработчика `onAnswer` мы определяем тут же. В нём будет происходить изменение стейта.

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = question[step];

    if (step >= questions.length || !question) {
      return <Redirect to="/" />;
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}
          />
        );
    }
    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
};

export default GameScreen;
