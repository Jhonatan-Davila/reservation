import { Provider } from 'react-redux';

import '../@fake-db';
import Home from './pages/home/Home';
import store from './store';
import '../styles/scss/style.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
