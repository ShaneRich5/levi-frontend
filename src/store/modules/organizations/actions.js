import api from '../../../api';
import * as types from '../../mutation-types';

export const loadNationalOffices = ({ commit }) => {
  api.getNationalOffices((offices) => {
    commit(types.NATIONAL_OFFICES_LOADED, offices);
  });
};

export const loadDistrictOffices = ({ commit }) => {
  api.getDistrictOffices((offices) => {
    commit(types.DISTRICT_OFFICES_LOADED, offices);
  });
};

export const loadChurches = ({ commit }) => {
  api.getChurches((churches) => {
    commit(types.CHURCHES_LOADED, churches);
  });
};

export const loadNationalOfficeById = ({ commit }, id) => {
  api.getNationalOfficeById(id, (office) => {
    commit(types.NATIONAL_OFFICE_LOADED, office);
  });
};

export const loadDistrictOfficeById = ({ commit }, id) => {
  api.getDistrictOfficeById(id, (office) => {
    commit(types.DISTRICT_OFFICE_LOADED, office);
  });
};

export const loadChurchById = ({ commit }, id) => {
  api.getChurchById(id, (church) => {
    commit(types.CHURCH_LOADED, church);
  });
};

