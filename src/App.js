import { Container } from './compoents/styles/Container.styled'
import Header from './compoents/Header';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './compoents/styles/Global';
import content from './content'
import Card from './compoents/Card';
import Footer from './compoents/Footer';

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
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App;
