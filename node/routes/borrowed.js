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

router.get('/', function(req, res, next) {
    if(req.query["form_id"]) {
        req.app.borrowedCollection.find(
            { form_id: new ObjectID(req.query.form_id)},
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
    else {
        res.status(500).send();
    }
});

module.exports = router;