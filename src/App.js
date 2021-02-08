import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Modal from './components/login/Modal';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MainContainer from './container/MainContainer';
import NotFoundPage from './pages/NotFoundPage';
import ItemListPage from './pages/ItemListPage';

function App() {
  return (
    <Switch>
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
      <Route path="/shop/goods/item_list" component={ItemListPage} />
      <Route path="/shop/account/modal" component={Modal} />
      <Route path="/" exact component={MainContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
