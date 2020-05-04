import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes'
const client = new ApolloClient({
  uri: 'http://0.0.0.0:4000/graphql',
  credentials: 'include'
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
