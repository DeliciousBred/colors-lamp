import { doLogin } from "/public/js/code.js";

describe("POST /LAMPAPI/Login.php", () => {
  it("should return success", async () => {
    const userId = doLogin("http://localhost:8000/Login.php", "Test", "test");

    console.log(userId);
  });
});