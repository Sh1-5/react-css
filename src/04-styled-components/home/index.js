import React, { PureComponent } from 'react'

import HomeWrapper from './style'

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        Home
        <span className="title">Home</span>
        <span className="title active">Home</span>
      </HomeWrapper>
    )
  }
}
