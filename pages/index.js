import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import { HeartTwoTone } from '@ant-design/icons';
import '../static/styles.css';

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

export default function Home() {

  function gotoTestB () {
    Router.push({
      pathname:'/test/b',
      query: {
        id: 'anke1'
      }
    }, '/test/b')
  }

  return (
    <div className="app">
      <span>Index</span>
    </div>
  );
}
