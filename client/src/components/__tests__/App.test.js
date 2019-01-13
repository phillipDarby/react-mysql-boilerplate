import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';

describe('App Component', () => {
  it('render without crashing', () => {
    shallow(<App />);
  });
});
