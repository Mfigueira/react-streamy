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
        <Route path="/stream/new" component={StreamCreate} />
        <Route path="/stream/show" component={StreamShow} />
        <Route path="/stream/edit" component={StreamEdit} />
        <Route path="/stream/delete" component={StreamDelete} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
