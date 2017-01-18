/**
 * Created by chrispowell on 11/29/16.
 * Master Spec for Review Process
 * Expect at bare minimun what i have below
 */


/**
 * Created by chrispowell on 11/29/16.
 */


var reviewPage = require('./../pageObjects/booking/review_Page.js');

describe('A Basic Test to enter Booking Flow and Validate stateroom Image', function () {

    var page = new reviewPage();

    protractor.ignoreSynchronization = true; // Need to add this to be able to interact with non-angular pages


    it('Get to Cruise Details Page', function () {
        page.bookingDetailsPage();
    });

    it('Verify Content On Page', function () {
        var elem = page.bookNowButton.get(0);
        expect(elem.getText()).toBe('BOOK NOW');
        browser.sleep(3000);
    });

    it('Click Button to Continue', function () {
        var elem = page.bookNowButton;
        elem.click();
    });

    it('Verify Next page Button has Correct Content', function () {
        var elem = page.nextToStateroom.get(0);
        expect(elem.getText()).toBe('NEXT: STATEROOM');
    });

    it('Continue to Stateroom Type Page - By Selecting Next Button', function () {
        var elem = page.nextToStateroom;
        elem.click();
    });

    it('Verify that Image is displayed', function () {
        browser.sleep(2000);
        var elem = page.OS01Image.get(0);
        expect(elem.isDisplayed()).toBe(true);

    });

});
