describe('example front-end app', () => {
    beforeEach(() => {
        cy.visit("localhost:8080")
    })

    it("Has a title", () => {
        cy.get("h1").should('have.length', 1);
    })

    it("Has an appropriate title", () =>{
        cy.get("h1").should("have.text", "Title");
    })

    it("Has a list of three items", () => {
        cy.get("ul li").should('have.length', 3);
    })

    it("Increments the count when the button is clicked", () => {
        cy.get("#count").should("have.text", "0");
        cy.get("#click").click();
        cy.get("#count").should("have.text", "1");

    })

    it("Loads 25 items from the API", () => {
        cy.get("ol li").should("have.length", 25);
    })

    it("Displays each API item as a li containing an h5", () => {
        cy.get("ol").children().each(l => {
            cy.wrap(l).within(() => {
                cy.get("h5").should("exist");
            })
        })
    })
})