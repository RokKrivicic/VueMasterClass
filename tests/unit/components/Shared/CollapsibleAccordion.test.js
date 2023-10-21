import { render, screen } from '@testing-library/vue';

import userEvent from '@testing-library/user-event';

import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue';

describe('CollapsibleAccordion', () => {
  const renderCollapsibleAccoridon = (config = {}) => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      props: {
        header: 'My Category'
      },
      slots: {
        default: '<h3> My nested child </h3>'
      },
      ...config
    });
  };
  it('renders child content', async () => {
    const props = { header: 'My Category' };
    const slots = { default: '<h3> My nested child </h3>' };
    const config = { props, slots };

    renderCollapsibleAccoridon(config);

    expect(screen.queryByText('My nested child')).not.toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /My Category/i
    });

    await userEvent.click(button);

    expect(screen.getByText('My nested child')).toBeInTheDocument();
  });

  it('renders default child content if parents do not provide content', async () => {
    const props = { header: 'My Category' };
    const slots = {};
    const config = { props, slots };

    renderCollapsibleAccoridon(config);

    const button = screen.getByRole('button', {
      name: /My Category/i
    });

    await userEvent.click(button);

    expect(screen.getByText('Whoops, currently we can not get this data')).toBeInTheDocument();
  });
});
