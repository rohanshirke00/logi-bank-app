import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import Features from './components/Features';
import Footer from './components/Footer';
import Services from './components/Services';
import AllCustomers from './components/AllCustomers';
import Transactions from './components/Transactions';
import TransferFunds from './components/TransferFunds';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <>
            <Navbar />
            <Route exact path="/">
              <HomePage />
              <Features />
              <Services />
            </Route>
              <Route exact path="/allCustomers" components={AllCustomers}>
                <AllCustomers></AllCustomers>
              </Route>
              <Route exact path="/moneyTransfer" component={TransferFunds}>
              </Route>
              <Route exact path="/transactions" component={Transactions}>
                <Transactions></Transactions>
              </Route>
            <Footer />
          </>
        </Switch>
      </BrowserRouter>
  );
}

export default App;