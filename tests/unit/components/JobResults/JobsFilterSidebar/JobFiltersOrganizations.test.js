import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';

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
  it('communicates that user has selected checkbox for orgnaizations', async () => {
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
});
