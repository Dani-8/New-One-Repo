const request = require("supertest")
const app = require("./server")


describe("GET /", () => {
    test("should return a welcome message", async () => {
        const res = await request(app).get("/")

        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe("success")
    })
})

