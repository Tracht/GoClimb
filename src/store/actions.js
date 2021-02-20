// These are based in store/index.js actions

function getLocations() {
  // Step 1: Make a post request (include header & body)
  // Step 2: Handle response & error (save to store)
  // Temporary data -> pretend this is the response --> still needs to be stored in Store State
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
  // Step 1: Make a post request (include header & body)
  // Step 2: Handle response & error (save to store)
  // Temporary data -> pretend this is the response --> still needs to be stored in Store State
  const data = [
    { title: 'Percentage', value: '10%' },
    { title: 'Cost', value: '£2,000' },
    { title: 'Time', value: '4 months' },
  ];
  return data;
}

function getSelectedLocation(location) {
  // Step 1: Make a post request (include header & body)
  // Step 2: Handle response & error (save to store)
  // Temporary data -> pretend this is the response --> still needs to be stored in Store State
  return location;
}

function setLoginDataFromLocalStore() {
  return '';
}

export {
  getLocations,
  getLocationData,
  getSelectedLocation,
  setLoginDataFromLocalStore,
};
