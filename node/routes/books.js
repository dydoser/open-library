var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

router.post('/', function(req, res, next) {
    var document = req.body;
    delete document._id;
    console.log(req.body);
    res.app.booksCollection.insertOne(document, function (err, result) {
        if(err)
            throw err;
        res.send({ _id: result.insertedId });
    });
});

router.post('/filter', function(req, res, next) {
    var document = req.body;
    if(document.fname)
        document.fname = new RegExp(document.fname.replace(/[^\w\s]/gi, ''));
    if(document.lname)
        document.lname = new RegExp(document.lname.replace(/[^\w\s]/gi, ''));
    if(document.mname)
        document.mname = new RegExp(document.mname.replace(/[^\w\s]/gi, ''));
    if(document.nationality)
        document.nationality = new RegExp(document.nationality.replace(/[^\w\s]/gi, ''));
    if(document.education)
        document.education = new RegExp(document.education.replace(/[^\w\s]/gi, ''));
    if(document.institution)
        document.institution = new RegExp(document.institution.replace(/[^\w\s]/gi, ''));
    if(document.address)
        document.address = new RegExp(document.address.replace(/[^\w\s]/gi, ''));
    if(document.phone)
        document.phone = new RegExp(document.phone.replace(/[^\w\s]/gi, ''));
    if(document.passport)
        document.passport = new RegExp(document.passport.replace(/[^\w\s]/gi, ''));

    req.app.booksCollection.find(document, {},
        {
            //skip: req.params.s,
            //limit: req.params.l
        },
        function(err, result) {
            if(err)
                throw err;
            result.toArray(function (err, docs) {
                if(err)
                    throw err;
                res.send(docs);
            });
        });
});

router.put('/', function(req, res, next) {
    var document = req.body;
    var id = mongodb.ObjectID(document._id);
    console.log(document._id);
    delete document._id;
    res.app.booksCollection.update(
        { '_id' : id },
        { $set: document },
        function (err, result) {
            if (err) throw err;
        })
});

router.get('/:l/:s', function(req, res, next) {
    if(req.query.metaonly == true)
    {
        req.app.booksCollection.count(
            function(err, result) {
                if(err)
                    throw err;
                    res.send(result);
            });
    }
    else {
    req.app.booksCollection.find({}, {},
        {
            skip: req.params.s,
            limit: req.params.l
        },
        function(err, result) {
            if(err)
                throw err;
            result.toArray(function (err, docs) {
                if(err)
                    throw err;
                res.send(docs);
            });
        });
    }
});

router.delete('/:id', function(req, res, next) {
    req.app.booksCollection.deleteOne({ _id: new mongodb.ObjectID(req.params.id)}, function(err, result) {
        if(err) {
            throw err;
        }
        else {
            res.send("{}");
        }
    });
});

function extendedGet(req, res, next, skip, limit, query) {
    if(req.query.metaonly == "true")
    {
        req.app.booksCollection.count(
            function(err, result) {
                if(err)
                    throw err;
                res.json(result);
            });
    }
    else {
        req.app.booksCollection.find({}, query,
            {
                skip: skip,
                limit: limit
            },
            function (err, result) {
                if (err)
                    throw err;
                result.toArray(function (err, docs) {
                    if (err)
                        throw err;
                    res.send(docs);
                });
            });
    }
}

router.get('/:query/:l/:s', function(req, res, next) {
    extendedGet(req, res, next, req.params.s, req.params.l, req.params.query);
});

router.get('/', function(req, res, next) {
    extendedGet(req, res, next, 0, 50, {});
});

module.exports = router;