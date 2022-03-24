import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const linkElement = screen.getByText("Submit");
  expect(linkElement).toBeInTheDocument();
});
