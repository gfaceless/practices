myApp = angular.module('myApp', ['ngAnimate']);

myApp.factory('contacts', function () {
    return [
    {"firstName":"xi", "lastName":"wang","phone":"123123"},
    {"firstName":"si", "lastName":"xzv","phone":"dsf123"},
    {"firstName":"zop", "lastName":"tew","phone":"15725"},
    {"firstName":"xvoi", "lastName":"ovc","phone":"9592"},
    {"firstName":"24", "lastName":"yx","phone":"877184"},
    {"firstName":"2zz4", "lastName":"xzyx","phone":"35871"}
    ]
})

myApp.controller('MyCtrl', function (contacts) {

    this.contacts = contacts;
    this.selectedContact = null;
    this.contactCopy = null;
    this.selectContact = function (contact, e) {
        console.log(e);
        this.contactCopy = angular.copy(contact);
        this.selectedContact = contact;
    };

    this.saveContact = function (contact) {
        this.selectedContact.firstName = this.contactCopy.firstName;
    }

})


