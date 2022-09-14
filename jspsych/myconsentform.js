// sample function that might be used to check if a subject has given
// consent to participate.
var check_consent = function(elem) {
    if (document.getElementById('consent_checkbox').checked) {
        return true;
    }
    else {
        alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
        return false;
    }
    return false;
};

// declare the block.
var consent = {
    type: "external-html",
    url: "myconsentform.html",
    cont_btn: "start",
    check_fn: check_consent
};