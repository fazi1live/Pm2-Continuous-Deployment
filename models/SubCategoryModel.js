const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();

//Start Block Schema Creating
const SubCategorySchema = mongoose.Schema({
    SubCategory:{type:String},
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{ timestamps: true })

//Exporting The Schema
module.exports = mongoose.model('SubCategoryCollection', SubCategorySchema);