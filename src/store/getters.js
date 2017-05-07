export const getDistrictById = state => id => state.districts[id];

export const getChurchById = state => id => state.churches[id];

export const getMonthly = state => id => state.monthly[id];

export const getMonthlyTotal = state => (id) => {
  const data = state.getters.getMonthly(id);
  return Object.values(data).reduce((a, b) => a + b);
};

export const getDistrictChurches = state => (districtId) => {
  const district = state.getters.getDistrictById(districtId);
  return district.churches.map(churchId => state.getters.getChurchById(churchId));
};
