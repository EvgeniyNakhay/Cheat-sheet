import React from 'react';
import route from '../img/route.png';
import { Layout, Menu } from 'antd';
import Headers from './Headers';
import Footers from './Footers';

const { Content } = Layout;

function Main() {
  return (
    <div>
        <Layout className="layout">
    <Headers/>
    <Content>
      <div className='container'>
        <h1 className='main-caption'>Основная теория по библиотеке React</h1>
        <img src={route} className = 'route-img'/>
      </div>
    </Content>
    <Footers/>
  </Layout>

    </div>
  )
}

export default Main