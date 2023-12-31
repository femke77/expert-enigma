import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Fundraiser from './pages/Fundraiser';
import CreateFundraiser from './pages/CreateFundraiser';
import NotFound from './pages/NotFound';
import Checkout from "./components/Checkout";
import Success from "./pages/Success";
// import '../src/styles/style.css'
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>

      <div>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <TopNav />
            </div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/explore"
                element={<Explore />}
              />
              <Route
                path="/sign-in"
                element={<SignIn />}
              />
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/fundraiser/:id"
                element={<Fundraiser />}
              />
              <Route
                path="/create-fundraiser"
                element={<CreateFundraiser />}
              />
              <Route
                path="/checkout"
                element={<Checkout />}
              />
              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
      
              <Footer />
         
          </Router>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
