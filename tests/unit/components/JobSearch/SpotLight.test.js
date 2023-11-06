import { render, screen } from '@testing-library/vue';

import axios from 'axios';

import SpotLight from '@/components/JobSearch/SpotLight.vue';

vi.mock('axios');

describe('SpotLight', () => {
  const mockSpotlightResponse = (spotlight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: 'Some image',
          title: 'Some Title',
          description: 'Some describtion',
          ...spotlight
        }
      ]
    });
  };

  it('provides img to parent component', async () => {
    const spotlight = { img: 'other image' };
    mockSpotlightResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
        <h1>{{ slotProps.spotlight.img }}</h1>
        </template>`
      }
    });

    const text = await screen.findByText('other image');
    expect(text).toBeInTheDocument();
  });

  it('provides title to parent component', async () => {
    const spotlight = { title: 'other title' };
    mockSpotlightResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
        <h1>{{slotProps.spotlight.title}}</h1>
        </template>`
      }
    });

    const text = await screen.findByText('other title');
    expect(text).toBeInTheDocument();
  });

  it('provides description to parent component', async () => {
    const spotlight = { description: 'other description' };
    mockSpotlightResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.spotlight.description }}</h1>
          </template>`
      }
    });

    const text = await screen.findByText('other description');
    expect(text).toBeInTheDocument();
  });
});
