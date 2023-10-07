import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import axios from 'axios';

import JobListings from '@/components/JobResults/JobListings.vue';
import { vi } from 'vitest';

vi.mock('axios');

describe('JobListings', () => {
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] });
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs');
  });

  it('creates a job listing for every job', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });

    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(15);
  });
});