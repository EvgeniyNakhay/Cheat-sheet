import React from 'react';
import Headers from './Headers';
import Footers from './Footers';

function Router() {
  return (
    <div>
        <Headers/>
        <div className='container'>
          <h1 className='main-caption'>Router</h1>
            <p className='main-text'>
               React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom, а также history.
            </p>
            <p className='main-text'>
              В начале для работы с маршрутами также получаем ряд объектов, которые потребуются для определения маршрутов:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  const Router = ReactRouterDOM.BrowserRouter;
                  const Route = ReactRouterDOM.Route;
                  const Routes = ReactRouterDOM.Routes;
                `}
                </code></pre> 
              </div>
            </div>
            <p className='main-text'>
              Router определяет набор маршрутов и, когда к приложению, приходит запрос, то Router выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.
            </p>
            <p className='main-text'>
              И также для выбора маршрута определен объект Routes. Он содержит набор маршрутов и позволяет выбрать первый попавшийся маршрут и его использовать для обработки.
            </p>
            <p className='main-text'>
              Каждый маршрут представляет объект Route. Он имеет ряд атрибутов. В частности, здесь для маршрута устанавливаются два атрибута:
            </p>
            <ul>
              <li>path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL;</li>
              <li>element - тот компонент, который отвечает за обработку запроса по этому маршруту;</li>
            </ul>
            <p className='main-text'>
              Например, первый маршрут выступает в качестве корневого. Он сопоставляется с адресом "/" и обрабатывается компонентом Main.
            </p>
            <p className='main-text'>
              Второй маршрут будет сопоставляться с адресом "/about", а обрабатываться он будет компонентом About.
            </p>
            <p className='main-text'>
              Особо следует выделить третий маршрут:
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                `}
                </code></pre> 
              </div>
            </div> 
            <p className='main-text'>
              Путь в виде звездочки - "*" указывает, что этот маршрут будет сопоставляться со всеми адресами URL, которые не соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound. Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.
            </p>
            <div className='content-code-area'>
              <div className='content-code'>
                <pre><code>{`
                  class About extends React.Component{
                    render(){
                        return <h2>О сайте</h2>;
                    }
                }
                class NotFound extends React.Component{
                    render(){
                        return <h2>Ресурс не найден</h2>;
                    }
                }
                class Main extends React.Component{
                    render(){
                        return <h2>Главная</h2>;
                    }
                }
                ReactDOM.render(
                    <Router>
                        <div>
                            <Routes>
                              <Route path="/" element={<Main />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </Router>,
                    document.getElementById("app")
                )
                `}
                </code></pre> 
              </div>
            </div>       
          </div>
          <Footers/>
        </div>
  )
}

export default Router;