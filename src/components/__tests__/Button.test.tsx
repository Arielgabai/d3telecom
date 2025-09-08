import { render, screen } from '@testing-library/react';
import { Button } from '@/components/Button';

describe('Button', () => {
  it('renders as link when href is provided', () => {
    render(<Button href="/contact">Demander un devis</Button>);
    const link = screen.getByRole('link', { name: /demander un devis/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('renders as button when no href', () => {
    render(<Button>Envoyer</Button>);
    const button = screen.getByRole('button', { name: /envoyer/i });
    expect(button).toBeInTheDocument();
  });
});


