import './App.css'
import {ContextProvider} from './context/Context'
import Grid from './components/Grid'

function App() {
  return (
    <ContextProvider>
      <Grid/>
    </ContextProvider>
  );
}

export default App
