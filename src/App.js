import Sidebar from "./Components/Sidebar";
import Video from "./Components/Video";
import { Provider } from 'react-redux'

import store from './Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video/>
        <Sidebar/>
      </Provider>
    </div>
  );
}

export default App;
