import React, { PureComponent } from 'react'

import styled, { ThemeProvider } from 'styled-components'

const StyledInput = styled.input`
  background-color: pink;
`

// 2.使用attrs()函数
const StyledInputAttrs = styled.input.attrs({
  type: 'password',
  tColor: 'skyblue'
})`
  background-color: purple;
  border-top: 5px solid ${(props) => props.tColor};
  border-bottom: 5px solid ${(props) => props.bColor};
`

const PrimaryButton = styled.button`
  padding: 10px;
  color: #fff;
  background-color: skyblue;
`

// 继承
const SuccessButton = styled(PrimaryButton)`
  background-color: green;
  font-size: ${(props) => props.theme.fontSize};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      bColor: 'orange'
    }
  }
  render() {
    return (
      <ThemeProvider theme={{ themeColor: 'yellow', fontSize: '30px' }}>
        <input type="password" />
        {/* 1.props可以穿透 */}
        <StyledInput type="password" />
        <StyledInputAttrs bColor={this.state.bColor} />
        <hr />
        <PrimaryButton>按钮</PrimaryButton>
        <SuccessButton>按钮</SuccessButton>
      </ThemeProvider>
    )
  }
}
