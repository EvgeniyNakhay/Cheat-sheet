import './App.css';
import { Routes, Route} from 'react-router-dom';
import React from 'react';
import Main from './Components/Main';
import Components  from './Components/Components';
import Props  from './Components/Props';
import State from './Components/State';
import Lifecycle  from './Components/Lifecycle';
import Events  from './Components/Events';
import Keys from './Components/Keys';
import Refs from './Components/Refs';
import Async from './Components/Asynchronous requests';
import VirtualDom from './Components/Virtual DOM';
import ReactFragment from './Components/Fragment';
import ReactMemo from './Components/React.memo';
import UseEffect  from './Components/UseEffect';
import Router from './Components/Router';
import Context from './Components/Context';
import Form from './Components/Form';

function App () {
    return (
        <div>
            <Routes >
                <Route path="/*" element={<Main/>}/>
                <Route path="/components" element={<Components/>}/>
                <Route path="/props" element={<Props/>}/>
                <Route path="/state" element={<State/>}/>
                <Route path="/lifecycle" element={<Lifecycle/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path='/keys' element={<Keys/>}/>
                <Route path='/refs' element={<Refs/>}/>
                <Route path='/async' element={<Async/>}/>
                <Route path='/virtualDom' element={<VirtualDom/>}/>
                <Route path='/fragment' element={<ReactFragment/>}/>
                <Route path='/react.memo' element={<ReactMemo/>}/>
                <Route path='/useEffect' element={<UseEffect/>}/>
                <Route path='/router' element={<Router/>}/>
                <Route path='/context' element={<Context/>}/>
                <Route path='/form' element={<Form/>}/>
            </Routes>
        </div>
    );
    }

export default App;