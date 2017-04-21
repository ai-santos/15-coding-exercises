const date = '02/19/77'
let parts = date.split('/');
const whoWantsADate = new Date(parts[2],parts[0]-1,parts[1]);

export default whoWantsADate