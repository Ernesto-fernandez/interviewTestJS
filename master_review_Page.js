/**
 * Created by chrispowell on 11/29/16.
 */
/**
 * Created by chrispowell on 11/29/16.
 */

function masterReview() {

    /*
     * Elements
     */
    this.bookNowButton = $$('#bookCruiseForm > a.buttonContinueDetails.analyticsGeneral');
    this.nextToStateroom = $$('#guest_list > div:nth-of-type(7) > div.dp_button');
    this.OS01Image = $$('#cabinType_container > div:nth-of-type(1) > div.cabinType_button.pointer > div:nth-of-type(1) > img');



    /*
     * Methods
     */


    this.bookingDetailsPage = function () {
        browser.get(config.urls.ED);
    };


};

module.exports = masterReview;
