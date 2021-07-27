import { Route, Switch, Redirect } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/:id" component={StreamShow} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
