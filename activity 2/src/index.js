import $ from 'jquery';

$(document).ready(function() {
    console.log('Ready');
    console.log($('div#myDiv').text("A new text"));
});