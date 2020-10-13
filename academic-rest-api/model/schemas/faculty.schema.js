/**
 * codigo
 * nombre
 * decano
 * 
 */

 /** packages */
const mongoose = require("mongoose");

/** Schema creation */
const facultySchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    decano:{
        type: "String",
        required:true
    }
});

/** schema exportation */
module.exports = facultySchema;