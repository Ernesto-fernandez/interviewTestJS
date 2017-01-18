/**
 * Created by chrispowell on 6/21/16.
 */

/**
 * Page Object for the Header
 */
var ReviewPage = function() {


    
    // Here is a method to get to the main page - 
    this.GoToCruisePage = function () {
        browser.get("http://www.hollandamerica.com/details?tourId=T7AY3L&webItineraryIdForAudit=A7G04AY3L&fromSearchVacation=true&guestsCount=2&voyageCode=V755B&selectedMeta=Interior&shipId=VO");
    };
    
    
    
    

};

module.exports = ReviewPage;
