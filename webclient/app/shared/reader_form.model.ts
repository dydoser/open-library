export class ReaderForm {
    constructor() {
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
    _id : string;
    fname: string;
    lname: string;
    mname: string;
    birdthyear: number;
    nationality: string;
    education: string;
    profession: string;
    institution: string;
    address: string;
    phone: string;
    passport: string;
    reader_since: number;
    photo_url: string;
}

export class CheckReaderForm {
    constructor() {
        this._id = false;
        this.fname = false;
        this.lname = false;
        this.mname = false;
        this.birdthyear = false;
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

    _id : boolean;
    fname: boolean;
    lname: boolean;
    mname: boolean;
    birdthyear: boolean;
    nationality: boolean;
    education: boolean;
    profession: boolean;
    institution: boolean;
    address: boolean;
    phone: boolean;
    passport: boolean;
    reader_since: boolean;
    photo_url: boolean;
}