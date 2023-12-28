import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages';

describe('usePreviousAndNextPages', () => {
  it('calculates page before current one', () => {
    const currentPage = { value: 8 };
    const lastPage = { value: 10 };

    const { previousPage } = usePreviousAndNextPages(currentPage, lastPage);
    expect(previousPage.value).toEqual(7);
  });

  describe('when current page is the first page', () => {
    it('does not provide previous page', () => {
      const currentPage = { value: 1 };
      const lastPage = { value: 10 };

      const { previousPage } = usePreviousAndNextPages(currentPage, lastPage);
      expect(previousPage.value).toBeUndefined();
    });
  });

  it('calculates page after current one', () => {
    const currentPage = { value: 8 };
    const lastPage = { value: 10 };

    const { nextPage } = usePreviousAndNextPages(currentPage, lastPage);
    expect(nextPage.value).toEqual(9);
  });

  describe('when current page is the last page', () => {
    it('does not provide next page', () => {
      const currentPage = { value: 10 };
      const lastPage = { value: 10 };

      const { nextPage } = usePreviousAndNextPages(currentPage, lastPage);
      expect(nextPage.value).toBeUndefined();
    });
  });
});
