import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JourneyProvider from './hooks/contexthook/JourneyProvider';
import QueryParser from './utils/QueryParser';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const rootId = document.getElementById('root');
let component = <>Error </>

try{
  QueryParser(window.location.search);
   component = (<React.StrictMode>
     <Provider store={store}>
    <JourneyProvider value={{ path : "something"}}>
      <App />
    </JourneyProvider>
    </Provider>
  </React.StrictMode>)
} catch(error) {
  component = <>Error </>
}

ReactDOM.render(
  component,
  rootId
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
