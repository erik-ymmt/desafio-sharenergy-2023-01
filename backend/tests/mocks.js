const findUsersRes = [
  {
    _id: '63c610dff251c5aaa8cb5076',
    name: 'Erik',
    email: 'erik@email.com',
    phoneNumber: '99999999',
    address: 'rua brasil',
    cpf: '000.000.001',
    createdAt: '2023-01-17T03:07:11.383Z',
    __v: 0,
  },
  {
    _id: '63c6ed712efb77cb0560daf0',
    name: 'Yamamoto',
    email: 'yamamoto@email.com',
    phoneNumber: '99999990',
    address: 'rua argentina',
    cpf: '000.000.002',
    createdAt: '2023-01-17T18:48:17.175Z',
    __v: 0,
  },
];

const reqBody = {
  name: 'Yamamoto',
  email: 'yamamoto@email.com',
  phoneNumber: '99999990',
  address: 'rua argentina',
  cpf: '000.000.002',
};

const clientFromDatabase = {
  _id: '63c6ed712efb77cb0560daf0',
  name: 'Yamamoto',
  email: 'yamamoto@email.com',
  phoneNumber: '99999990',
  address: 'rua argentina',
  cpf: '000.000.002',
  createdAt: '2023-01-17T18:48:17.175Z',
  __v: 0,
};

const deleteMsg = {
  acknowledged: true,
  deletedCount: 1,
};

module.exports = {
  findUsersRes, reqBody, clientFromDatabase, deleteMsg,
};
