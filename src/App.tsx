import { Provider } from 'react-redux'
import { MoorhenContainer, MoorhenReduxStore } from 'moorhen';

import './App.css';
import './moorhen.css';

function App() {
  return (
    <div className="App">
      <Provider store={MoorhenReduxStore}>
        <MoorhenContainer/>
      </Provider>
    </div>
  );
}

export default App;
