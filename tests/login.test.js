import { doLogin } from "/public/js/code.js";

describe("POST /LAMPAPI/Login.php", () => {
  it("should return success", async () => {
    const nameElement = document.createElement("input");
    nameElement.id = "loginName";
    nameElement.value = "Test";

    const passElement = document.createElement("input");
    passElement.id = "loginPassword";
    passElement.value = "test";

    const userId = doLogin("http://localhost:8000/Login.php");

    console.log(userId);
  });
});