import React from 'react';
import userEvent from '@testing-library/user-event';
import StyledButton from '../StyledButton';
import renderer from 'react-test-renderer';

describe('Test Button component', () => {
  let container: any = null;
  let clickFn: any = null;

  beforeEach(() => {
    clickFn = jest.fn();
    container = renderer.create(<StyledButton onClick={clickFn} text="send" />);
  });

  it('button Clicked', () => {
    userEvent.click(container);
    expect(clickFn).toHaveBeenCalled();
  });
});
