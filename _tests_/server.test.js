'use strict';

const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server',() => {
  it('should get a 404 status', async () => {
    const response = await request.get('/bla');
    expect(response.status).toBe(404);
  });

  it('should get adeclaration message', async() => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hi i am in server.js');
  });

  it('should get error object', async() => {
    const res = await request.get('/wrong');
    expect(res.status).toEqual(500);
  });

});

