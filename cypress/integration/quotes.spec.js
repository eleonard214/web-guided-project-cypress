// write tests here
describe("Quotes app", () => {
  beforeEach(() => {
    // arbitrary code you want running before your tests start: setup
    cy.visit("http://localhost:1234");
  });

  const textInput = () => cy.get('input[name="text"]');
  const authorInput = () => cy.get('input[name="author"]');
  const submitButton = () => cy.get("#submitBtn");
  const cancelButton = () => cy.get("#cancelBtn");

  // here go our tests
  // 'it' is a test
  it("sanity test to make sure tests work", () => {
    // 'expect' is an assertion
    // there can be many assertions per test
    // assertions live inside the 'it' statement
    // assertions should be logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("the proper elements are showing on the screen", () => {
    textInput().should("exist");
    cy.get('input[name="xxxxx"]').should("not.exist");
    authorInput().should("exist");
    submitButton().should("exist");
    cancelButton().should("exist");

    cy.contains("Submit Quote");
    cy.contains(/submit quote/i);
  });

  it("can type in the inputs", () => {
    // grab the inputs
    // assert they are empty
    // type in them
    // assert that the thing we typed is there
    textInput()
      .should("have.value", "")
      .type("have fun learning React")
      .should("have.value", "have fun learning React");

    authorInput()
      .should("have.value", "")
      .type("J. R. R. Tolkien")
      .should("have.value", "J. R. R. Tolkien");
  });

  it("submit button disabled until both inputs filled out", () => {
    // set up, making sure that initial state is legit
    // act (type or click - mimicking user input)
    // assert that the action had the expected effect
    // syntax you will need:
    // "be.disabled"
    // .clear()
  });
});
