const request = require("supertest");
const baseUrl = require("../var/globalVariable");
const { expect } = require("chai");
const url = `${baseUrl}`;

async function getMethod(id) {
    const response = await request(url)
        .get(`/api/users/${id}`)

        expect(response.status).to.equal(200);
        expect(response.body.data.id).to.equal(id);
        expect(response.body.data.first_name).to.equal("Janet");
        expect(response.body.data.last_name).to.equal("Weaver");

    console.log(response.body);
}

async function postMethod() {
    const response = await request(url)
        .post(`/api/users/`)
        .send({
            name: "Jauhar Ilmi",
            job: "QA Engineer"
        })
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal("Jauhar Ilmi");
        expect(response.body.job).to.equal("QA Engineer");
        expect(response.body.createdAt).to.not.be.null;

    const id = response.body.id;
    console.log("id after POST: ", id);
    return id;
}

async function deleteMethod(id) {
    const response = await request(url)
        .delete(`/api/users/${id}`)

        expect(response.status).to.equal(204);
        expect(response.body.message)
}

module.exports = {getMethod, postMethod, deleteMethod };