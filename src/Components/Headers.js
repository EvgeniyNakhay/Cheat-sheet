import React from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from '../img/logo.svg';
const { Header } = Layout;

function Headers() {
  return (
    <Header>
      <div className="logo" />
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}>
        <Menu.Item><NavLink to='/'>Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/components'>Components</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/props'>Props</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/state'>State</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/lifecycle'>Lifecycle</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/events'>Events</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/keys'>Keys</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/refs'>Refs</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/async'>Asynchronous requests</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/virtualDom'>Virtual DOM</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/fragment'>Fragment</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/react.memo'>React.memo</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/useEffect'>useEffect</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/router'>Router</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/context'>Context</NavLink></Menu.Item>
        <Menu.Item><NavLink to='/form'>Form</NavLink></Menu.Item>
      
      </Menu>

    </Header>
  )
}

export default Headers