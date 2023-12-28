import { computed, type Ref } from 'vue';

const usePreviousAndNextPages = (currentPage: Ref<number>, lastPage: Ref<number>) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1;
    const firstPage = 1;
    return previousPage >= firstPage ? previousPage : undefined;
  });

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1;
    return nextPage <= lastPage.value ? nextPage : undefined;
  });

  return { previousPage, nextPage };
};

export default usePreviousAndNextPages;
