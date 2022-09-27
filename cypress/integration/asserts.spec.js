/// <reference types="cypress"/>

it("Números igualdades", () => {

    const val1 = 5

    expect(val1).equal(5)
    expect(val1, "Deveria ser 5").equal(5)
    expect(val1).to.be.equal(5)
    expect(val1).not.to.be.equal(10)
})

