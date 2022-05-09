import styled from 'styled-components'

const HomeWrapper = styled.div`
  font-size: 50px;
  color: red;

  .title {
    color: green;

    &.active {
      color: blue;
    }

    &:hover {
      color: yellow;
    }
  }
`

export default HomeWrapper
