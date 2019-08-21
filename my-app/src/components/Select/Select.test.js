import React from 'react';
import { shallow } from 'enzyme';
import { Select } from './Select';

describe('Select', () => {

  test('renders without crashing', () => {
    shallow(<Select />);
  });

  test('title is shown', () => {
    const wrapper = shallow(<Select title="Values" />);
    expect(wrapper.find('.Title').text()).toContain('Values');
  });

  test('click shows items', () => {
    const wrapper = shallow(<Select title="Values">{() => 'Items'}</Select>);
    wrapper.find('.Title').simulate('click')
    expect(wrapper.find('.Items').text()).toContain('Items');
  });
});
