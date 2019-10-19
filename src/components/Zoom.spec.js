import React from 'react';
import { shallow } from 'enzyme';

import Zoom from './Zoom';

describe('Zoom', () => {
  let component = null;
  let props = {};

  beforeEach(() => {
    props = {
      zoomIn: jest.fn(),
      zoomOut: jest.fn()
    };

    component = shallow(<Zoom {...props} />);
  });

  it('should call zoom out', () => {
    component.find('button').at(0).simulate('click');
    expect(props.zoomIn).toBeCalled();
  });

  it('should call zoom in', () => {
    component.find('button').at(1).simulate('click');
    expect(props.zoomOut).toBeCalled();
  });

});