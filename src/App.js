import './App.css';
import 'nes.css/css/nes.min.css';
import Page from './components/Page';
import { MainProvider } from './context/MainContext';

function App() {
  return (
    <MainProvider>
        <Page />
    </MainProvider>
  );
}

export default App;
