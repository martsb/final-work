class FormPage {
    navigate() {
        cy.visit('https://demoqa.com/automation-practice-form');
    }

    fillName(firstName, lastName) {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
    }

    setEmail(email) {
        cy.get('#userEmail').type(email);
    }

    setGender(gender) {
        cy.contains('label', gender).click();
    }

    setMobile(mobile) {
        cy.get('#userNumber').type(mobile);
    }

    setDateOfBirth(day, month, year) {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__year-select').select(year);

        // Using a hardcoded value for the specific day class
        cy.get('.react-datepicker__day--028') // directly using the class as seen in your HTML
            .not('.react-datepicker__day--outside-month') // ensures clicking only current month days
            .first() // safeguards to ensure clicking only the first found if duplicates are present
            .click();
    }


    setSubjects(subject) {
        cy.get('.subjects-auto-complete__value-container').type(`${subject}{enter}`);
    }

    setHobbies(hobby) {
        cy.contains('label', hobby).click();
    }

    uploadPicture(fileName) {
        cy.get('input[type="file"]').selectFile(`cypress/fixtures/files/${fileName}`);
    }

    setStateAndCity(state, city) {
        cy.get('#state').click().get('div[id^=react-select][id*="-option"]').contains(state).click();
        cy.get('#city').click().get('div[id^=react-select][id*="-option"]').contains(city).click();
    }

    submit() {
        cy.get('#submit').click();
    }

    validateField(label, expectedValue) {
        cy.contains('.table-responsive', label).should('contain', expectedValue);
    }
}

export default FormPage;