import { createPinia, setActivePinia } from 'pinia';
import { useUserStore } from '@/stores/user';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('keeps track if user is logged in', () => {
    const store = useUserStore();

    expect(store.isLoggedIn).toBe(false);
  });

  it('stores organizations that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedOrganizations).toEqual([]);
  });

  it('stores job types that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedJobTypes).toEqual([]);
  });

  it('stores degrees that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedDegrees).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('loginUser', () => {
    it('logs the user in', () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(['Org1', '0rg2']);
      expect(store.selectedOrganizations).toEqual(['Org1', '0rg2']);
    });
  });

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates job types the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_JOB_TYPES(['Type1', 'TYpe2']);
      expect(store.selectedJobTypes).toEqual(['Type1', 'TYpe2']);
    });
  });

  describe('ADD_SELECTED_DEGREES', () => {
    it('updates degrees the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_DEGREES(['Pursuing Degree', 'Associate']);
      expect(store.selectedDegrees).toEqual(['Pursuing Degree', 'Associate']);
    });
  });
});
