import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function State() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Стэйт</h1>
          <div className='main-text'>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  class Clock extends React.Component {
                    constructor(props) {
                      super(props);
                      this.state = {date: new Date()};
                    }
                  
                    render() {
                      return (
                        <div>
                          <h1>Привет, мир!</h1>
                          <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                        </div>
                      );
                    }
                  }
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Обратите внимание, что мы передаём props базовому (родительскому) конструктору:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  constructor(props) {
                    super(props);
                    this.state = {date: new Date()};
                  };
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Классовые компоненты всегда должны вызывать базовый конструктор с аргументом props.
            </p>
            <p className='main-text'>
            Consumer принимает функцию в качестве дочернего компонента.Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().
            </p>
          </div>
        </div>
        <Footers/>
    </div>
  )
}

export default State