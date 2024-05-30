
import FormPage from '../pageObjects/formPage';

describe('Form Test', () => {
  const formPage = new FormPage();

  it('submits the practice form successfully', () => {
    formPage.navigate();
    formPage.fillName('John', 'Doe');
    formPage.setEmail('john.doe@example.com');
    formPage.setGender('Male');
    formPage.setMobile('1234567890');
    formPage.setDateOfBirth('28', 'February', '1930');
    formPage.setSubjects('Economics');
    formPage.setHobbies('Music');
    formPage.uploadPicture('ocr-test.png');
    formPage.setStateAndCity('NCR', 'Delhi');
    formPage.submit();
    formPage.validateField('Student Name', 'John Doe');
    formPage.validateField('Student Email', 'john.doe@example.com');
    formPage.validateField('Gender', 'Male');
    formPage.validateField('Mobile', '1234567890');
    formPage.validateField('Date of Birth', '28 February,1930');
    formPage.validateField('Subjects', 'Economics');
    formPage.validateField('Hobbies', 'Music');
    formPage.validateField('Picture', 'ocr-test.png');
    formPage.validateField('State and City', 'NCR Delhi');
  });
});
