describe("Final MVP test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // helpers to direct getters
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const sausageCheck = () => cy.get('input[name=sausage')
    const chickenCheck = () => cy.get('input[name=chicken')
    const mushroomCheck = () => cy.get('input[name=mushroom')
    const pepperCheck = () => cy.get('input[name=pepper')
    const specialInput = () => cy.get('input[name=special')

    it("sanity check to make sure tests are working", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
    })
    

    describe("form can be filled, data submitted to 'https://reqres.in/api/orders'", () => {
        it("has the required elements", () => {
            nameInput().should('exist');
            sizeInput().should('exist');
            sausageCheck().should('exist');
            chickenCheck().should('exist');
            mushroomCheck().should('exist');
            pepperCheck().should('exist');
            specialInput().should('exist');
        })

        it("allows user to input information", () => {
            nameInput().should('have.value', '').type('Buzz Lightyear').should('have.value', 'Buzz Lightyear');
            sizeInput().should('have.value', '').select('small').should('have.value', 'small');
            sausageCheck().should('have.value', 'false').click().should('have.value', 'true');
            chickenCheck().should('have.value', 'false').click().should('have.value', 'true');
            mushroomCheck().should('have.value', 'false').click().should('have.value', 'true');
            pepperCheck().should('have.value', 'false').click().should('have.value', 'true');
            specialInput().should('have.value', '').type('Buzz Lightyear').should('have.value', 'Special instructions');
        })

        it("submits complete form to 'https://reqres.in/api/orders'", () => {
            
        })
        
    })
    
})