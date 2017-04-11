import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';
import path from 'path';

const LoadableExample = Loadable({
  loader: () =>
    fakeDelay(400).then(() => import('./Example')).then(ex => ex.default),
  LoadingComponent: Loading,
  serverSideRequirePath: path.resolve(__dirname, './Example')
});

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <LoadableExample />
    </div>
  );
}
