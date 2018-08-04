import React from 'react';
import { shallow } from 'enzyme';
import Ratings from '../client/components/Ratings';

describe('<Ratings />', () => {
  it('should render 6 ratings', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.find(Ratings)).to.have.length(6);
  });
});
