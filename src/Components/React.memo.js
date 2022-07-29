import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function ReactMemo() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>React.memo</h1>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                const MyComponent = React.memo(function MyComponent(props) {
                  /* рендер с использованием пропсов */
                });
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
              React.memo — это компонент высшего порядка.
            </p>
            <p className='main-text'>
              Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.
            </p>
            <p className='main-text'>
              React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.
            </p>
            <p className='main-text'>
              По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  function MyComponent(props) {
                    /* рендер с использованием пропсов */
                  }
                  function areEqual(prevProps, nextProps) {
                    /*
                    возвращает true, если nextProps рендерит
                    тот же результат что и prevProps,
                    иначе возвращает false
                    */
                  }
                  export default React.memo(MyComponent, areEqual);
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
              Этот метод предназначен только для оптимизации производительности. Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.
            </p> 
          </div>
          <Footers/>
        </div>
  )
}

export default ReactMemo;