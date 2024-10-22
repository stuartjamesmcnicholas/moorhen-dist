import { Provider } from 'react-redux'
import { MoorhenContainer, MoorhenReduxStore } from 'moorhen';

import './App.css';
import './moorhen.css';

function App() {
  // Set urlPrefix to whereever your Moorhen will be in server root + /baby-gru
  // e.g. If you are serving like:
  //
  // http://localhost:8000/foo/bar/sna/fu/
  //
  // then do:
  //
  // urlPrefix = "/foo/bar/sna/fu/baby-gru"

  const urlPrefix = "/baby-gru"
  const collectedProps = {
         urlPrefix
  }

  return (
    <div className="App">
      <Provider store={MoorhenReduxStore}>
        <MoorhenContainer {...collectedProps} />
      </Provider>
    </div>
  );
}

export default App;
