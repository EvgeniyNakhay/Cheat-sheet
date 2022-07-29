import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Keys() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Ключи</h1>
            <p className='main-text'>
            Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:            
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  const numbers = [1, 2, 3, 4, 5];
                  const listItems = numbers.map((number) =>
                    <li key={number.toString()}>
                      {number}
                    </li>
                  );
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  const todoItems = todos.map((todo) =>
                  <li key={todo.id}>
                    {todo.text}
                  </li>
                );
                `}
                </code></pre> 
              </div>
            </div>
            <div className='main-text-caption'>
              Извлечение компонентов с ключами
            </div>
            <p className='main-text'>
            Ключи нужно определять непосредственно внутри массивов.
            </p>
            <p className='main-text'>
            Например, если вы извлекаете компонент ListItem, то нужно указывать ключ для <code>{`<ListItem/>`}</code> в массиве, а не в элементе <code>{`<li>`}</code> внутри самого ListItem.            
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                function ListItem(props) {
                  // Правильно! Не нужно определять здесь ключ:
                  return <li>{props.value}</li>;
                }
                
                function NumberList(props) {
                  const numbers = props.numbers;
                  const listItems = numbers.map((number) =>
                    // Правильно! Ключ нужно определять внутри массива:
                    <ListItem key={number.toString()} value={number} />
                  );
                  return (
                    <ul>
                      {listItems}
                    </ul>
                  );
                }
                
                const numbers = [1, 2, 3, 4, 5];
                ReactDOM.render(
                  <NumberList numbers={numbers} />,
                  document.getElementById('root')
                );
                `}
                </code></pre> 
              </div>
            </div>
            <div className='main-text-caption'>
              Встраивание map() в JSX
            </div>
            <p className='main-text'>
            В примерах выше мы отдельно определяли переменную listItems и вставляли её в JSX:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                function NumberList(props) {
                  const numbers = props.numbers;
                  const listItems = numbers.map((number) =>
                    <ListItem key={number.toString()}
                              value={number} />
                  );
                  return (
                    <ul>
                      {listItems}
                    </ul>
                  );
                }
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map():
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                function NumberList(props) {
                  const numbers = props.numbers;
                  return (
                    <ul>
                      {numbers.map((number) =>
                        <ListItem key={number.toString()}
                                  value={number} />
                      )}
                    </ul>
                  );
                }
                `}
                </code></pre> 
              </div>
            </div>
        </div>
        <Footers/>
    </div>
  )
}

export default Keys