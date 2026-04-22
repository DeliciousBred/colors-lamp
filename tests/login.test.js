import request from "supertest";

describe("POST /LAMPAPI/Login.php", () => {
  it("should return success", async () => {

    const response = await request("http://127.0.0.1:8000").post("/LAMPAPI/Login.php").set("Content-Type", "application/json").send({
      login: "Test",
      password: "test",
    });

    console.log(response);

    //const userId = doLogin("http://localhost:8000/Login.php", "Test", "test");

    //console.log(userId);
  });
});