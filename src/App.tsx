import { useRef, useState } from 'react';
import { useDispatch, Provider } from 'react-redux'
import { MoorhenContainer, MoorhenReduxStore } from 'moorhen';

import './App.css';
import './moorhen.css';

export const MyMoorhenContainer = (props) => {

  const glRef = useRef(null)
  const [appTitle, setAppTitle] = useState('MoorhenElectron')

  const commandCentre = useRef(null)

  const moleculesRef = useRef(null)
  const mapsRef = useRef(null)

  const dispatch = useDispatch()

  const collectedProps = {
        glRef,  commandCentre, moleculesRef, mapsRef
  }

    return (
        <MoorhenContainer {...collectedProps}/>
        )

}

function App() {
  return (
    <div className="App">
      <Provider store={MoorhenReduxStore}>
        <MyMoorhenContainer/>
      </Provider>
    </div>
  );
}

export default App;
