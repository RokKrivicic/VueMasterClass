import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const company = screen.getByText('Rok Careers');
    expect(company).toBeInTheDocument();
  });

  it('displays menu item for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Rok Careers',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });
});
