import {saveCookie} from "../public/js/code.js";

describe("saveCookie function", () => {
  it("sets document.cookie to the correct new cookie", () => {
    saveCookie("Test", "User", 1);

    console.log(document.cookie);

    expect(document.cookie).toBe("firstName=Test,lastName=User,userId=1");
  })
})