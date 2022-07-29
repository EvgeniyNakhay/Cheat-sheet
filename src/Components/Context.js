import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Context() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Context</h1>
            <p className='main-text'>
            Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева React-компонентов (например, текущий аутентифицированный пользователь, UI-тема или выбранный язык).            
            </p>
            <div className='main-text-caption'>
              React.createContext
            </div>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  const MyContext = React.createContext(defaultValue);
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            Создаёт объект Context.Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.
            </p>
            <p className='main-text'>
            Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве. Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их. Обратите внимание: если передать undefined как значение Provider, компоненты, использующие этот контекст, не будут использовать defaultValue.            
            </p>
          <div className='main-text-caption'>
            Context.Provider
          </div>
          <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  <MyContext.Provider value={/* некоторое значение */}>
                `}
                </code></pre> 
              </div>
          </div>
          <p className='main-text'>
          Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения
          </p>
          <p className='main-text'>
          Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider.Один Provider может быть связан с несколькими компонентами, потребляющими контекст.Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.
          </p>
          <div className='main-text-caption'>
            Context.Consumer
          </div>
          <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  <MyContext.Consumer>
                    {value => /* отрендерить что-то, используя значение контекста */}
                  </MyContext.Consumer>
                `}
                </code></pre> 
              </div>
          </div>
          <p className='main-text'>
          Consumer — это React-компонент, который подписывается на изменения контекста.В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.         
          </p>
          <p className='main-text'>
          Consumer принимает функцию в качестве дочернего компонента.Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().
          </p>
        </div>
          <Footers/>
        </div>
  )
}

export default Context