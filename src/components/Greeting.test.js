import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('render hello world', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //Nothing else

    //Assert
    const helloworldEle = screen.getByText('hello World', { exact: false });
    expect(helloworldEle).toBeInTheDocument();
  });

  test('render "good to see you" if the button was not clicked', () => {
    render(<Greeting />);
    const textEle = screen.getByText('good to see you', { exact: false });
    expect(textEle).toBeInTheDocument();
  });

  test('render "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const changeText = screen.getByText('Changed!', { exact: false });
    expect(changeText).toBeInTheDocument();
  });
  test('does not render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const hidePara = screen.queryByText('good to see you');
    expect(hidePara).toBeNull();
  });
});
