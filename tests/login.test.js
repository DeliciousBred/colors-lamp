import request from "supertest";

describe("POST /LAMPAPI/Login.php", () => {
  it("should return success", async () => {

    const response = await request("http://127.0.0.1:8000").post("/LAMPAPI/Login.php").set("Content-Type", "application/json").send({
      login: "Test",
      password: "test",
    });

    const body = response.body;

    expect(body.firstName).toBe("First");
    expect(body.lastName).toBe("Last");
    expect(body.id).toBe(1);
  });
});