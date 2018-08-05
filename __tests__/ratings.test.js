import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../client/components/Ratings';

describe('<Ratings />', () => {
  it('should render location rating', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.find('.container')).to.have.length(6);
  });
});
