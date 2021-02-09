// These are based in store/index.js actions

function getLocations() {
  const locations = [
    'Auckland',
    'Brooklyn',
    'Canbarra',
    'Detroit',
    'Enfield',
    'Frankfurt',
    'Gainsville',
    'Hudson Bay',
    'Indiana City',
    'Johannesburg',
    'Kalkutta',
  ];
  return locations;
}

function getLocationData() {
  const data = [
    { title: 'Percentage', value: '10%' },
    { title: 'Cost', value: '£2,000' },
    { title: 'Time', value: '4 months' },
  ];
  return data;
}

function getSelectedLocation(location) {
  return location;
}

export {
  getLocations,
  getLocationData,
  getSelectedLocation,
};
