import { deepCopy } from './util';

export const getDistrictById = state => id => deepCopy(state.districts[id]);

export const getChurchById = state => id => deepCopy(state.churches[id]);

export const multipliers = state => (id) => {
  const church = deepCopy(state.churches[id]);
  const values = Object.values(church.dispursements);
  const total = values.reduce((a, b) => a + b);
  const balance = 1 - total;
  return Object.assign(church.dispursements, { total, balance });
};

export const getMonthly = state => id => deepCopy(state.monthly[id]);

export const churchBalance = state => id => state.monthly[id].balance;

export const getDistrictChurches = state => (districtId) => {
  const district = state.districts[districtId];
  return district.churches.map((churchId) => {
    const church = deepCopy(state.churches[churchId]);
    const monthly = state.monthly[church.monthly];
    return Object.assign(church, { monthly });
  });
};
