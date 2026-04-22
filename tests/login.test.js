import { doLogin } from "/public/js/code.js";

describe("POST /LAMPAPI/Login.php", () => {
  it("should return success", async () => {

    const response = await fetch("http://localhost:8000/Login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login: "Test",
        password: "test"
      })
    });

    console.log(response.body);

    //const userId = doLogin("http://localhost:8000/Login.php", "Test", "test");

    //console.log(userId);
  });
});