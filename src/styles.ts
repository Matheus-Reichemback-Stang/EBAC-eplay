import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eeeeee',
  black: '#111',
  gray: '#333',
  lightGrey: '#a3a3a3',
  green: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

// Substituído pela classe container no GlobalCss
// export const Container = styled.div`
//   max-width: 1024px;
//   width: 100%;
//   margin: 0 auto;
// `
