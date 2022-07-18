import React, { PureComponent } from 'react'

import appStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return <div className={appStyle.title}>App</div>
  }
}
