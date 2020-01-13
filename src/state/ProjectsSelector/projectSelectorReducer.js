import { PROJECT_SELECTOR_LOAD_PROJECTS } from './projectSelectorActionTypes';

const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SELECTOR_LOAD_PROJECTS: {
      return { ...state, projects: [...action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
