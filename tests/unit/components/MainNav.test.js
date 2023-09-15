import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const company = screen.getByText('Rok Careers');
    expect(company).toBeInTheDocument();
  });
});
