import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 56px;
  }
`
