import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';

import { useRouter } from 'vue-router';
vi.mock('vue-router');

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia();
    const jobStore = useJobsStore();
    const userStore = useUserStore();

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });

    return { jobStore, userStore };
  };
  it('renders unique list of organizations from jobs', async () => {
    const { jobStore } = renderJobFiltersSidebarOrganizations();
    jobStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon']);

    const button = screen.getByRole('button', {
      name: /organization/i
    });

    await userEvent.click(button);

    const organizationListItems = screen.getAllByRole('listitem');
    const organizations = organizationListItems.map((node) => node.textContent);

    expect(organizations).toEqual(['Google', 'Amazon']);
  });
  describe('when user click checkbox', () => {
    it('communicates that user has selected checkbox for organizations', async () => {
      useRouter.mockReturnValue({ push: vi.fn() });
      const { jobStore, userStore } = renderJobFiltersSidebarOrganizations();
      jobStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon']);

      const button = screen.getByRole('button', {
        name: /organization/i
      });

      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });

      await userEvent.click(googleCheckbox);

      expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google']);
    });

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      const push = vi.fn();
      useRouter.mockReturnValue({ push });
      const { jobStore } = renderJobFiltersSidebarOrganizations();
      jobStore.UNIQUE_ORGANIZATIONS = new Set(['Google']);

      const button = screen.getByRole('button', {
        name: /organization/i
      });

      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });

      await userEvent.click(googleCheckbox);

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });
});
