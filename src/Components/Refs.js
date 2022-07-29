import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Refs() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Рефы</h1>
            <p className='main-text'>
            Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.
            </p>
            <p className='main-text'>
            В обычном потоке данных React родительские компоненты могут взаимодействовать с дочерними только через пропсы. Чтобы модифицировать потомка, вы должны заново отрендерить его с новыми пропсами.Тем не менее, могут возникать ситуации, когда вам требуется императивно изменить дочерний элемент, обойдя обычный поток данных.Подлежащий изменениям дочерний элемент может быть как React-компонентом, так и DOM-элементом.React предоставляет лазейку для обоих случаев.
            </p>
            <div className='main-text-caption'>
              Когда использовать рефы
            </div>
            <p className='main-text'>
            Ситуации, в которых использование рефов является оправданным:
            </p>
            <ul>
              <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
              <li>Императивный вызов анимаций.</li>
              <li>Интеграция со сторонними DOM-библиотеками.</li>
            </ul>
            <div className='main-text-caption'>
              Не злоупотребляйте рефами
            </div>
            <p className='main-text'>
            Возможно, с первого взгляда вам показалось, что рефы применяются, когда нужно решить какую-то задачу в вашем приложении «во что бы то ни стало». Если у вас сложилось такое впечатление, сделайте паузу и обдумайте, где должно храниться конкретное состояние в иерархии компонентов. Часто становится очевидно, что правильным местом для хранения состояния является верхний уровень в иерархии.
            </p>
            <div className='main-text-caption'>
              Создание рефов
            </div>
            <p className='main-text'>
              Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  class MyComponent extends React.Component {
                    constructor(props) {
                      super(props);
                      this.myRef = React.createRef();
                    }
                    render() {
                      return <div ref={this.myRef} />;
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
                  }
                `}
                </code></pre> 
              </div>
            </div>
            <div className='main-text-caption'>
              Доступ к рефам
            </div>
            <p className='main-text'>
            Когда реф передаётся элементу в методе render, ссылка на данный узел доступна через свойство рефа current.
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                const node = this.myRef.current;
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Значение рефа отличается в зависимости от типа узла:
            </p>
            <ul>
              <li>Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.</li>
              <li>Когда атрибут ref используется с классовым компонентом, свойство current объекта-рефа получает экземпляр смонтированного компонента.</li>
              <li>Нельзя использовать ref атрибут с функциональными компонентами, потому что для них не создаётся экземпляров.</li>
            </ul>
        </div>
        <Footers/>
    </div>
  )
}

export default Refs;