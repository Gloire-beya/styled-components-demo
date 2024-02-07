import { Container } from './compoents/styles/Container.styled'
import Header from './compoents/Header';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './compoents/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hi there </h1>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App;
