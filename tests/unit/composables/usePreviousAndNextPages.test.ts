import { ref } from 'vue';

import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages';

describe('usePreviousAndNextPages', () => {
  it('calculates page before current one', () => {
    const currentPage = ref(8);
    const lastPage = ref(10);

    const { previousPage } = usePreviousAndNextPages(currentPage, lastPage);
    expect(previousPage.value).toEqual(7);
  });

  describe('when current page is the first page', () => {
    it('does not provide previous page', () => {
      const currentPage = ref(1);
      const lastPage = ref(10);

      const { previousPage } = usePreviousAndNextPages(currentPage, lastPage);
      expect(previousPage.value).toBeUndefined();
    });
  });

  it('calculates page after current one', () => {
    const currentPage = ref(8);
    const lastPage = ref(10);

    const { nextPage } = usePreviousAndNextPages(currentPage, lastPage);
    expect(nextPage.value).toEqual(9);
  });

  describe('when current page is the last page', () => {
    it('does not provide next page', () => {
      const currentPage = ref(10);
      const lastPage = ref(10);

      const { nextPage } = usePreviousAndNextPages(currentPage, lastPage);
      expect(nextPage.value).toBeUndefined();
    });
  });
});
