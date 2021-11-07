const USER_ID_1 = 'lfIYsM35w7a5EvZx2dTyTsrSglC3';
const USER_ID_2 = '5SCaTb2XGUR2MPfmKUTcZTTw5Cs2';
const USER_ID_3 = 'pKPNgQA1k3SSO5Mb8qJ5vsBw2ol1';

module.exports.users = [{
    id: USER_ID_1,
    email: 'brendabrown@gmail.com',
    fullName: 'Brenda Brown',
}, {
    id: USER_ID_2,
    email: 'jimsmith@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_3,
    email: 'janejones@gmail.com',
    fullName: 'Jane Jones',
}];

module.exports.photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];