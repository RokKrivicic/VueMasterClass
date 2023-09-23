import nextElementInList from '@/utils/nextElementInList';

describe('nextElementInList', () => {
  it('locates element in the list and returns the next element in the list', () => {
    const list = ['A', 'B', 'C', 'D', 'E'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });
  describe('when element is at the ned of the list', () => {
    it('locates next elemet at start of list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';
      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});
