const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js"); // Import your model

// Home Page Route
router.get("/", (req, res) => {
    res.send(`
        <h3 style="text-align:center">Baza danych studentów</h3>
        <h4 style="text-align:center">Kliknij <a href="/list">tutaj</a>, aby otrzymac dostęp do bazy.</h4>
    `);
});

// Get Student List
router.get("/list", (req, res) => {
    Student.find()
        .then((docs) => {
            res.render("list", { list: docs });
        })
        .catch((err) => {
            console.log("Błąd pobierania danych: " + err);
        });
});

// Add or Edit Student Form
router.get("/addOrEdit", (req, res) => {
    res.render("addOrEdit", { viewTitle: "Dodaj Studenta" });
});

// Add or Update Student
router.post("/", (req, res) => {
    if (req.body._id == "") {
        insert(req, res);
    } else {
        update(req, res);
    }
});

// Get Student by ID for Editing
router.get("/:id", (req, res) => {
    Student.findById(req.params.id)
        .then((doc) => {
            res.render("addOrEdit", {
                viewTitle: "Zaktualizuj dane studenta",
                student: doc,
            });
        })
        .catch((err) => {
            console.log("Błąd podczas aktualizowania danych: " + err);
        });
});

// Delete Student
router.get("/delete/:id", (req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/list");
        })
        .catch((err) => {
            console.log("Błąd przy usuwaniu z bazy danych: " + err);
        });
});

async function insert(req,res) {
    let student = new Student()
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city

    try {
        await student.save()
        res.redirect("/list")
    } catch(err){
        console.log("Blad podczas dodawania studenta: " + err)
    }

}

async function update(req,res) {
    try{
        await Student.findByIdAndUpdate({_id: req.body._id, }, req.body, { new: true })
        res.redirect("/list")
    } catch(err){
        console.log("Blad podczas aktualizowania danych studenta: " + err)
    }
}

module.exports = router; // Export router

