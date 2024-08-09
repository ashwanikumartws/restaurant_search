export const initialState = {
  search: [],
  singleCompany: {},
  searchInput: null,
  locationInput: null,
  loading: false,
  modal: false,
};

const companyReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_SEARCH_COMPANY":
      return {
        ...state,
        search: payload.search,
      };
    case "GET_SEARCH_COMPANY_LOADING":
      return {
        ...state,
        loading: payload.loading,
      };
    case "EMPTY_SEARCH":
      return {
        ...state,
        search: [],
      };
    case "GET_SEARCH_DATA":
      return {
        ...state,
        searchInput: payload.searchInput,
        locationInput: payload.locationInput,
      };
    case "GET_SINGLE_COMPANY":
      return {
        ...state,
        singleCompany: payload.singleCompany,
      };
    case "GET_MODAL":
      return {
        ...state,
        modal: payload.modal,
      };

    default:
      throw new Error(`No case for type ${type} found in companyReducer.`);
  }
};

export default companyReducer;
