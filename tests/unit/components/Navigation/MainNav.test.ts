import type { Mock } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import { useRoute } from 'vue-router';
vi.mock('vue-router');

import MainNav from '@/components/Navigation/MainNav.vue';
import { useUserStore } from '@/stores/user';

const useRouteMock = useRoute as Mock;

describe('MainNav', () => {
  const renderMainNav = () => {
    useRouteMock.mockReturnValue({ name: 'Home' });
    const pinia = createTestingPinia();

    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });
  };

  it('displays company name', () => {
    renderMainNav();
    const company = screen.getByText('Rok Careers');
    expect(company).toBeInTheDocument();
  });

  it('displays menu item for navigation', () => {
    renderMainNav();
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

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      const userStore = useUserStore();

      let profileImage = screen.queryByRole('img', {
        name: /User profile image/i
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /Sign in/i
      });
      userStore.isLoggedIn = true;

      await userEvent.click(loginButton);

      profileImage = screen.getByRole('img', {
        name: /User profile image/i
      });

      expect(profileImage).toBeInTheDocument();
    });
  });
});