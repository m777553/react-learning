// Для воспроизведения мелодий создадим новый компонент «AudioPlayer». Оба
// игровых экранов (`ArtistQuestionScreen`, `GenreQuestionScreen`) умеют воспроизводить
// мелодии. Поэтому функциональность для воспроизведения разумно вынести в
// отдельный компонент и переиспользовать многократно.
//
// Проигрывать мелодии будем с помощью объекта `Audio`. Поскольку в игре предусмотрена
// возможность приостанавливать/возобновлять воспроизведение мелодий, компоненту
// `AudioPlayer` потребуется состояние. Создадим class-компонент.
//
// В стейте сохраним информацию о готовности воспроизводить мелодию (`isLoading`),
// и статусу воспроизведения (`isPlaying`): проигрывается или приостановлено.
//
// Создадим экземпляр объекта `Audio` после монтирования компонента
// в DOM. Для этого воспользуемся методом `componentDidMount`. В теле метода
// создадим экземпляр объекта и оформим подписки на события. Подробная информация
// о событиях объекта `Audio` доступна в MDN.
//
// Перед удалением компонента следует выполнить обратную процедуру: убрать обработчики
// событий и удалить экземпляр `Audio`. Весь этот код опишем в методе `componentWillUnmount`.

import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  // componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
  //
  // Этот метод подходит для настройки подписок. Но не забудьте отписаться от них в componentWillUnmount().

  componentDidMount() {
    const { src } = this.props;
    this._audio = new Audio(src);

    // Прослушайте событие canplaythrough (en-US). Оно отправляется, когда предполагается, что аудио должно воспроизводиться до конца без прерываний
    this._audio.oncanplaythrough = () => this.setState({ isLoading: false });

    //проиграть, если позволяет загрузка
    this._audio.onplay = () => this.setState({ isPlaying: true });

    this._audio.onpause = () => this.setState({ isPlaying: false });
  }

  componentWillUnmount() {
    this._audio.oncanplaythrough = null;
    this._audio.onplay = null;
    this._audio.onpause = null;
    this._audio = null;
  }
	render(){
		const {isLoading, isPlaying} = this.state;
		return (
      <Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => this.setState({isPlaying: !this.state.isPlaying})}
        />
        <div className="track__status">
          <audio />
        </div>
      </Fragment>
    );
	}

	componentDidUpdate() {
	    if (this.state.isPlaying) {
	      this._audio.play();
	    } else {
	      this._audio.pause();
	    }
	  }
	}


}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};
