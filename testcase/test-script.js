const {getMethod, postMethod, deleteMethod} = require("./test-api");

describe("Supertest Project - Jauhar Ilmi", function() {
    let id = 2;

    it("Verify response with GET Method", async function() {
        await getMethod(id);
    });

    it("Verify response with POST Method", async function() {
        id = await postMethod();
    });

    it("Verify response with DELETE Method", async function() {
        await deleteMethod(id);
    });
});