import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button disabled on first click and emabled on second click', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });

  expect(button).toHaveStyle('background-color:MediumVioletRed');
  // changing button color to grey when button is disabled after clicking on the checkbox
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle('backgroundColor: Grey');

  // changing button color to medium violet red when button is enabled after clicing on the checkbox
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle('background-color:MediumVioletRed');

  // changing button color to midnight blue after clicking on the button
  fireEvent.click(button);
  expect(button).toHaveStyle('background-color:MidnightBlue');

  // changing button color to medium violet red after clicking on the button
  fireEvent.click(button);
  expect(button).toHaveStyle('background-color:MediumVioletRed');
});

describe('space before camel case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Grey')).toBe('Grey');
  });
  test('one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
