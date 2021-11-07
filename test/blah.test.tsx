import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Demo } from '../src/Demo';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demo name='Testuser'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
