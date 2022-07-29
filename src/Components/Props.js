import React from 'react';
import Headers from './Headers';
import Footers from './Footers';
function Props() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Пропсы</h1>
          <div className='main-text'>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  function Welcome(props) {
                    return <h1>Привет, {props.name}</h1>;
                  }
                  
                  const element = <Welcome name="Алиса" />;
                  ReactDOM.render(
                    element,
                    document.getElementById('root')
                  );
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы» (props).
            </p>
            <p className='main-text'>
            Например, этот компонент выведет «Привет, Алиса» на страницу:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  function Welcome(props) {
                    return <h1>Привет, {props.name}</h1>;
                  }
                  
                  const element = <Welcome name="Алиса" />;
                  ReactDOM.render(
                    element,
                    document.getElementById('root')
                  );
                `}
                </code></pre> 
              </div>
            </div>
          </div>
        </div>
        <Footers/>
    </div>
  )
}

export default Props