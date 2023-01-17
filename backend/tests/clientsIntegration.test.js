const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');

const { Client } = require('../src/database/models/ClientODM');
const controller = require('../src/controllers');
const { findUsersRes, reqBody, clientFromDatabase, deleteMsg } = require('./mocks');

chai.use(sinonChai);

describe('Test Client endpoints', () => {
  afterEach(sinon.restore);

  it('should create a client', async () => {
    const req = {
      body: reqBody
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(Client, 'create')
      .resolves(clientFromDatabase);
    await controller.clients.create(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(clientFromDatabase);
  });

  it('should get all clients', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(Client, 'find')
      .resolves(findUsersRes);
    await controller.clients.find(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(findUsersRes);
  });

  it('should update one client', async () => {
    const req = {
      params: { id: '63c6ed712efb77cb0560daf0' },
      body: reqBody
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(Client, 'findByIdAndUpdate')
      .resolves(clientFromDatabase);
    await controller.clients.updateOne(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(clientFromDatabase);
  });

  it('should delete one client', async () => {
    const req = {
      params: { id: '63c6ed712efb77cb0560daf0' },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(Client, 'deleteOne')
      .resolves(deleteMsg);
    await controller.clients.deleteOne(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(deleteMsg);
  });
});
