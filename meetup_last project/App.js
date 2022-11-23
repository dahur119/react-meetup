import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUp";
import FavoritePage from "./pages/Favorite";
import NewMeetUpPage from "./pages/NewMeetUp";
import Layout from "./component/layout/Layout";

function App() {
  return <Layout>

    <Switch>
    <Route path='/' exact>
      <AllMeetUpsPage/>
    </Route>
    <Route path='/new-meetup'>
      <NewMeetUpPage/>
    </Route>
    <Route path='/favorite'>
      <FavoritePage/>
    </Route>

    </Switch>


  </Layout>;
}

export default App;
