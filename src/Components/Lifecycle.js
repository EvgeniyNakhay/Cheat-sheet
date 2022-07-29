import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Lifecycle() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Жизненный цикл</h1>
          <div className='main-text-caption'>
            Есть 3 основных метода жизненного цикла:
          </div>
          <div className='main-text'>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  class Clock extends React.Component {
                    constructor(props) {
                      super(props);
                      this.state = {date: new Date()};
                    }
                  
                    componentDidMount() {
                      this.timerID = setInterval(
                        () => this.tick(),
                        1000
                      );
                    }
                  
                    componentDidUpdate(prevProps, prevState, snapshot) {
                      // Популярный пример (не забудьте сравнить пропсы):
                      if (this.props.userID !== prevProps.userID) {
                        this.fetchData(this.props.userID);
                      }
                    }
                  
                    componentWillUnmount() {
                      alert("The component named Header is about to be unmounted.");
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
            componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.
            </p>
            <p className='main-text'>
            В componentDidUpdate() можно вызывать setState(), однако его необходимо обернуть в условие, как в примере выше, чтобы не возник бесконечный цикл. Вызов setState() влечет за собой дополнительный рендер, который незаметен для пользователя, но может повлиять на производительность компонента. Вместо «отражения» пропсов в состоянии рекомендуется использовать пропсы напрямую.
            </p>
            <p className='main-text'>
            componentWillUnmount() вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в componentDidMount().
            </p>
            <p className='main-text'>
            Не используйте setState() в componentWillUnmount(), так как компонент никогда не рендерится повторно. После того, как экземпляр компонента будет размонтирован, он никогда не будет примонтирован снова.
            </p>
            
          </div>
        </div>
        <Footers/>
    </div>
  )
}

export default Lifecycle