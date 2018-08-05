import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../client/components/SearchBar';

describe('<SearchBar />', () => {
  it('render input change', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('input').simulate('change', { target: { value: 'My new value' } }));
  });
});
