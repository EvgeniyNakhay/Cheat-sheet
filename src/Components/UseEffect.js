import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function useEffect() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Хук useEffect</h1>
            <p className='main-text'>
              Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  import React, { useState, useEffect } from 'react';

                  function Example() {
                    const [count, setCount] = useState(0);
                  
                    // Аналогично componentDidMount и componentDidUpdate:
                    useEffect(() => {
                      // Обновляем заголовок документа с помощью API браузера
                      document.title = 'Вы нажали count раз';
                    });
                  
                    return (
                      <div>
                        <p>Вы нажали {count} раз</p>
                        <button onClick={() => setCount(count + 1)}>
                          Нажми на меня
                        </button>
                      </div>
                    );
                  }
                `}
                </code></pre> 
              </div>
            </div>
            <div className='main-text-caption'>
              componentDidMount и componentWillUnmount
            </div>
            <p className='main-text'>
              componentDidMountсрабатывает только при первом рендоре компонента и аналогично ему хук выглядит так:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  useEffect(() => {
                    // стработает 1 раз при первом рендре компонента
                    // здесь код работает как componentDidMount
                    return () => {
                      // return здесь работает как componentWillUnmount
                    };
                  }, []);
                `}
                </code></pre> 
              </div>
            </div> 
            <p className='main-text'>
              Если оставить второй параметр как пустой масив, то хук сработает как классовый метод componentDidMount
            </p>
            <div className='main-text-caption'>
              componentDidMount
            </div>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  useEffect(() => {
                    // будет срабатывать только тогда, когда изменится параметр smt
                  }, [smt]);
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
              Этот хук принимает два параметра:
            </p>
            <ol>
              <li>Анонимную функцию</li>
              <li>Масив значений который нужно отслеживать</li>
            </ol>
            <p className='main-text'>
              Если не указать второй параметр, то при каждом изменении компонента этот тух будет срабатывать:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  useEffect(() => {
                    // код будет выполнятся каждый раз, как компонент изменится
                  });
                `}
                </code></pre> 
              </div>
            </div>
          </div>
          <Footers/>
        </div>
  )
}

export default useEffect;