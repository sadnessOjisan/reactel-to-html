import convertHtmlToJsxToHtml from ".";
describe("convert", () => {
  it("should", () => {
    const el = '<div style={{color: "red"}}>hello</div>';
    const actual = convertHtmlToJsxToHtml(el);
    expect(actual).toBe(`<div style="color:red" data-reactroot="">hello</div>`);
  });
});
