import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Fragment() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Фрагменты</h1>
            <p className='main-text'>
              Компонента не может возвращать несколько элементов, а может только один. И для этого нам нужно обернуть весь код в родительский элемент например div:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                class Columns extends React.Component {
                  render() {
                    return (
                      <div>
                        <td>Привет</td>
                        <td>Мир</td>
                      </div>
                    );
                  }
                }
                
                <table>
                  <tr>
                    <div>
                      <td>Привет</td>
                      <td>Мир</td>
                    </div>
                  </tr>
                </table>
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
            В примере выше мы обернули элементы в div и при рендоре он добавиться в DOM
            </p>
            <p className='main-text'>
            Если мы хотим этого избежать, мы можем использовать <code>{`<Fragment/>`}</code>:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                class Columns extends React.Component {
                  render() {
                    return (
                      <React.Fragment>
                        <td>Привет</td>
                        <td>Мир</td>
                      </React.Fragment>
                    );
                  }
                }
                
                <table>
                  <tr>
                    <td>Привет</td>
                    <td>Мир</td>
                  </tr>
                </table>
                `}
                </code></pre> 
              </div>
            </div> 
          <p className='main-text'>
            Так же можно использовать сокращенную запись:
          </p>
          <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                class Columns extends React.Component {
                  render() {
                    return (
                      <>
                        <td>Привет</td>
                        <td>Мир</td>
                      </>
                    );
                  }
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

export default Fragment;