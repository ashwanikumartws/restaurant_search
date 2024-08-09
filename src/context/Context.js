import { createContext, useContext, useReducer } from "react";
import companyReducer, { initialState } from "./reducer";
import axios from "axios";

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, initialState);

  const getCompanies = (company = null) => {
    const companies = state.search.concat(company);
    dispatch({
      type: "GET_SEARCH_COMPANY",
      payload: {
        search: companies,
      },
    });
  };
  const loadingStart = () => {
    const loadings = (state.loading = true);

    dispatch({
      type: "GET_SEARCH_COMPANY_LOADING",
      payload: {
        loading: loadings,
      },
    });
  };
  const loadingEnd = () => {
    const loadings = (state.loading = false);

    dispatch({
      type: "GET_SEARCH_COMPANY_LOADING",
      payload: {
        loading: loadings,
      },
    });
  };
  const modalStart = () => {
    const modals = (state.modal = true);

    dispatch({
      type: "GET_MODAL",
      payload: {
        modal: modals,
      },
    });
  };
  const modalEnd = () => {
    const modals = (state.modal = false);

    dispatch({
      type: "GET_MODAL",
      payload: {
        modal: modals,
      },
    });
  };
  const emptySearch = () => {
    const companies = (state.search = []);
    dispatch({
      type: "EMPTY_SEARCH",
      payload: {
        search: companies,
      },
    });
  };
  const getCompany = (singlecompany) => {
    const company = (state.singleCompany = singlecompany);
    dispatch({
      type: "GET_SINGLE_COMPANY",
      payload: {
        singleCompany: company,
      },
    });
  };
  const searchData = (searchInput, locationInput) => {
    const search = (state.searchInput = searchInput);
    const location = (state.locationInput = locationInput);

    dispatch({
      type: "GET_SEARCH_DATA",
      payload: {
        searchInput: search,
        locationInput: location,
      },
    });
  };

  const value = {
    companies: state?.search,
    company: state?.singleCompany,
    searchInput: state?.searchInput,
    locationInput: state?.locationInput,
    loading: state?.loading,
    getCompanies,
    getCompany,
    emptySearch,
    searchData,
    loadingStart,
    loadingEnd,
    modaShow: state?.modal,
    modalStart,
    modalEnd,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCompany = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useShop must be used within Context");
  }

  return context;
};

export const getPlaceAutoCompleteAPI = async (datas) => {
  return axios
    .post(
      "https://exampleapi-prod.example.com/api/user/getPlaceAutoComplete",
      datas
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

/* testing api call */

export const checkPlaceDetailsExistsAPT = async (place) => {
  return axios
    .post(
      "https://exampleapi-prod.example.com/api/user/getGooglePlaceDetail",
      {
        place_id: place.place_id,
        fields: "formatted_address,formatted_phone_number,geometry,name",
        sessiontoken: "",
        requestFrom: "3",
        pd: "2",
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getPlaceDetailsAPI = async (place) => {
  return axios
    .post(
      "https://exampleapi-prod.example.com/api/user/getGooglePlaceDetail",
      {
        place_id: place,
        fields: "formatted_address,formatted_phone_number,geometry,name",
        sessiontoken: "",
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export const searchNearbyCompanies = async (datas) => {
  return axios
    .post("/user/nearByCompaniesGooglePlaces", datas)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
export default useCompany;
