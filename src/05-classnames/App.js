import React, { PureComponent } from 'react'

import classNames from 'classnames'

export default class App extends PureComponent {
  render() {
    return <div className={classNames('title', { active: true })}>App</div>
  }
}
