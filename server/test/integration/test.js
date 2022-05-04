var expect = require("chai").expect;
const axios = require("axios");
var app = require("../../app");

const { sum, average, stdev } = require("../../lib/math");

//default test server port is 5000
axios.defaults.baseURL = "http://localhost:5000/";

describe("library test ", function () {
  it("sum function test with arry data", function () {
    expect(sum([1, 2, 3, 4, 5])).to.equal(15);
  });

  it("sum function test with arry data ", function () {
    expect(sum([-1, -2, -3, -4, -5])).to.equal(-15);
  });

  it("average function test with arry data", function () {
    expect(average([1, 2, 3, 4, 5])).to.equal(3);
  });

  it("average function test with arry data", function () {
    expect(average([-1, -2, -3, -4, -5])).to.equal(-3);
  });

  it("stdev function test with arry data", function () {
    expect(stdev([1, 5])).to.equal(2);
  });

  it("stdev function test with arry data", function () {
    expect(stdev([-1, -5])).to.equal(2);
  });
});

describe("server test", function () {
  it("api test without authentication", async function () {
    try {
      await axios.post("api/calculate", {
        email: "test@tbo.com",
        data: "1,5",
      });
    } catch (err) {
      expect(err.response.status).to.equal(401); // without auth, it must fail
    }
  });

  it("api test with authentication", async function () {
    const login_result = await axios.post("api/auth/signin", {
      email: "test@tbo.com",
      password: "1234",
    });

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${login_result.data.token}`;

    var result = await axios.post("api/calculate", {
      data: "1,5",
    });

    expect(result.status).to.equal(200);
    expect(result.data.sum).to.equal(6);
    expect(result.data.average).to.equal(3);
    expect(result.data.stdev).to.equal(2);
  });

  it("api test with invalid input data", async function () {
    try {
      await axios.post("api/calculate", {
        data: "1,a,b",
      });
    } catch (err) {
      expect(err.response.status).to.equal(400);
      expect(err.response.data.error).to.equal("input type is not correct.");
    }
  });
});
