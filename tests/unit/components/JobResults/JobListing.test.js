import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';

import JobListing from '@/components/JobResults/JobListing.vue';

describe('JobListings', () => {
  const createJobProps = (jobProps = {}) => ({ ...jobProps });

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job: {
          title: 'Tester',
          organization: 'Samsung',
          locations: ['New York'],
          minimumQualifications: ['Code'],
          ...jobProps
        }
      }
    });
  };
  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Programmer' });
    renderJobListing(jobProps);

    expect(screen.getByText('Vue Programmer')).toBeInTheDocument();
  });

  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'AirBnb' });
    renderJobListing(jobProps);

    expect(screen.getByText('AirBnb')).toBeInTheDocument();
  });

  it('renders job locations', () => {
    const jobProps = createJobProps({ locations: ['Orlando', 'Jacksonville'] });
    renderJobListing(jobProps);

    expect(screen.getByText('Orlando')).toBeInTheDocument();
    expect(screen.getByText('Jacksonville')).toBeInTheDocument();
  });

  it('renders job qualifications', () => {
    const jobProps = createJobProps({ minimumQualifications: ['Code', 'Develop'] });
    renderJobListing(jobProps);

    expect(screen.getByText('Code')).toBeInTheDocument();
    expect(screen.getByText('Develop')).toBeInTheDocument();
  });
});
