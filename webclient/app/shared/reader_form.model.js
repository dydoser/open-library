"use strict";
var ReaderForm = (function () {
    function ReaderForm() {
        this.fname = "";
        this.lname = "";
        this.mname = "";
        this.birdthyear = 1990;
        this.nationality = "українець(нка)";
        this.education = "";
        this.profession = "";
        this.institution = "";
        this.address = "";
        this.phone = "";
        this.passport = "";
        this.reader_since = 2017;
        this.photo_url = "";
    }
    return ReaderForm;
}());
exports.ReaderForm = ReaderForm;
var CheckReaderForm = (function () {
    function CheckReaderForm() {
        this._id = false;
        this.fname = false;
        this.lname = false;
        this.mname = false;
        this.birdthday = false;
        this.nationality = false;
        this.education = false;
        this.profession = false;
        this.institution = false;
        this.address = false;
        this.phone = false;
        this.passport = false;
        this.reader_since = false;
        this.photo_url = false;
    }
    return CheckReaderForm;
}());
exports.CheckReaderForm = CheckReaderForm;
//# sourceMappingURL=reader_form.model.js.map