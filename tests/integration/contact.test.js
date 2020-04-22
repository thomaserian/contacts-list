const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../configurations/express');
const testsDefaults = require('./testDefaults');
const testData = require('./testsData.json');

describe('contact apis test ', () => {
    let server;
    let agent;

    beforeAll(async (done) => {
        try {
            await testsDefaults.addTestData();

            server = app.listen(2000, (err) => {
                if (err) return done(err);

                agent = request.agent(server);
                done();
            });
        }
        catch (err) {
            return done(err);
        }
    });

    describe('GET /api/v1/contacts', () => {
        it('should return only one element in the last page of contacts', async (done) =>
            request(app)
                .get('/api/v1/contacts?pagenumber=3')
                .set(testData.authHeaders)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.length).toBe(1);
                    expect(res.body[0].UserId).toBe(3);
                    done();
                }).catch(err => {
                    done(err);
                }));
    });

    describe('POST /api/v1/contacts', () => {
        it('should add a new contact to the list of contacts', async (done) =>
            request(app)
                .post('/api/v1/contacts')
                .send(testData.testUserContacts[5])
                .set(testData.authHeaders)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).toMatchObject(testData.testUserContacts[5]);
                    expect(res.body.UserId).toBe(3);
                    done();
                }).catch(err => {
                    done(err);
                }));
    });

    describe('GET /api/v1/contacts', () => {
        it('should return only one page of contacts', async (done) =>
            request(app)
                .get('/api/v1/contacts?pagenumber=1')
                .set(testData.authHeaders)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.length).toBeLessThanOrEqual(2);

                    for (let x = 0; x < res.body.length; x++) {
                        expect(res.body[x].UserId).toBe(3);
                    }

                    done();
                }).catch(err => {
                    done(err);
                }));
    });

    describe('GET /api/v1/contacts?searchText=1', () => {
        it('should return only one element in the first page matching searchText filter', async (done) =>
            request(app)
                .get('/api/v1/contacts?searchText=1&pagenumber=1')
                .set(testData.authHeaders)
                .expect(httpStatus.OK)
                .then((res) => {

                    expect(res.body.length).toBe(1);
                    expect(res.body[0].UserId).toBe(3);
                    expect(res.body[0].firstName).toContain('1');

                    done();
                }).catch(err => {
                    done(err);
                }));
    });

    describe('GET /api/v1/contacts/recent', () => {
        it('should return the five most recent contacts ', async (done) =>
            request(app)
                .get('/api/v1/contacts/recent')
                .set(testData.authHeaders)
                .expect(httpStatus.OK)
                .then((res) => {

                    expect(res.body.length).toBe(5);

                    for (let x = 1; x < res.body.length; x++) {

                        let timeStampX=(new Date(res.body[x].createdAt)).getTime();
                        let timeStampXMinusOne=(new Date(res.body[x - 1].createdAt)).getTime();

                        expect(timeStampX).toBeLessThanOrEqual(timeStampXMinusOne);
                        expect(res.body[x-1].UserId).toBe(3);
                    }

                    done();
                }).catch(err => {
                    done(err);
                }));
    });

    afterAll(async (done) => {
        try {
            await testsDefaults.removeTestData();
            server && server.close(done);
        }
        catch (err) {
            return done(err);
        }
    });
});