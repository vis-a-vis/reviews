import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/components/App';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('<SearchBar /> component should exist', () => {
    expect(wrapper.find('.searchBar').exists()).toBe(true);
  });
});

describe('<App />', () => {
  it('<Ratings /> component should exist', () => {
    expect(wrapper.find('.ratings').exists()).toBe(true);
  });
});
