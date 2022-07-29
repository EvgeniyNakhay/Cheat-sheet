import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Components() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Компоненты</h1>
            <div className='main-text-caption'>
              Компоненты бывают
              <a href='https://ru.reactjs.org/docs/components-and-props.html'> Функциональными </a>
              и 
              <a href='https://ru.reactjs.org/docs/components-and-props.html'> Классовыми</a>
              :
            </div>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  function Welcome(props) {
                    return <h1>Привет, {props.name}</h1>;
                  }
                `}
                </code></pre> 
              </div>
            </div>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  class Welcome extends React.Component {
                    render() {
                      return <h1>Привет, {this.props.name}</h1>;
                    }
                  }
                `}
                </code></pre> 
              </div>
            </div>
            <div className='main-text-caption'>
              React.PureComponent
            </div>
            <p className='main-text'>
            React.PureComponent похож на React.Component. Отличие заключается в том, что React.Component не реализует shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния.
            </p>
            <p className='main-text'>
            Если метод render() вашего React-компонента всегда рендерит одинаковый результат при одних и тех же пропсах и состояниях, для повышения производительности в некоторых случаях вы можете использовать React.PureComponent.
            </p>
          </div>
          <Footers/>
        </div>
  )
}

export default Components