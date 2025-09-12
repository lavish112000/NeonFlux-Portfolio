import { render, screen } from '@testing-library/react';

// Simple button component for testing
function SimpleButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} data-testid="simple-button">
      {children}
    </button>
  );
}

describe('Simple Component Test', () => {
  it('renders a button correctly', () => {
    render(<SimpleButton>Click me</SimpleButton>);
    
    expect(screen.getByTestId('simple-button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockClick = jest.fn();
    render(<SimpleButton onClick={mockClick}>Click me</SimpleButton>);
    
    const button = screen.getByTestId('simple-button');
    button.click();
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});