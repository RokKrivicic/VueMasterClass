import { ref } from 'vue';
import { defineStore } from 'pinia';

export const CLEAR_JOB_FILTER_SELECTIONS = 'CLEAR_JOB_FILTER_SELECTIONS';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const selectedOrganizations = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedDegrees = ref<string[]>([]);
  const skillsSearchTerm = ref('');

  const loginUser = () => {
    isLoggedIn.value = true;
  };

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations;
  };

  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes;
  };

  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees;
  };

  const CLEAR_JOB_FILTER_SELECTIONS = () => {
    selectedOrganizations.value = [];
    selectedJobTypes.value = [];
    selectedDegrees.value = [];
    skillsSearchTerm.value = '';
  };

  const UPDATE_SKILLS_SEARCH_TERM = (term: string) => {
    skillsSearchTerm.value = term;
  };

  return {
    isLoggedIn,
    selectedOrganizations,
    selectedJobTypes,
    selectedDegrees,
    skillsSearchTerm,
    loginUser,
    ADD_SELECTED_ORGANIZATIONS,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGREES,
    CLEAR_JOB_FILTER_SELECTIONS,
    UPDATE_SKILLS_SEARCH_TERM
  };
});
