import Hero from 'components/hero/hero';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      {/* <a
        className="sub-section-header"
        style={{ textDecoration: 'underline', color: 'blue' }}
        target="_blank"
        href="https://www.figma.com/file/8wZT4wM6X43A0SZ00pDlHl/bananahouse?node-id=0%3A1"
        rel="noreferrer"
      >
        open design file
      </a> */}
      <Hero></Hero>
    </div>
  );
}

export default App;
