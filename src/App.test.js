import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  console.log(container.innerHTML); // Add this to inspect output
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
