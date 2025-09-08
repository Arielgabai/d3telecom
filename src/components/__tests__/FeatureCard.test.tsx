import { render, screen } from '@testing-library/react';
import { FeatureCard } from '@/components/FeatureCard';

describe('FeatureCard', () => {
  it('renders title and description', () => {
    render(<FeatureCard title="Titre" description="Description" />);
    expect(screen.getByText('Titre')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});


