import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/components/App';

describe('<App />', () => {
  it('<SearchBar /> component should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.searchBar').exists()).toBe(true);
  });
});

describe('<App />', () => {
  it('<Ratings /> component should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.ratings').exists()).toBe(true);
  });
});
