const mongoose = require("mongoose");

const eduEnum = ["Primary","Secondary","Higher Secondary","Graduation","Post Graduation"];
const proffEnum = ["Schooling","College","Teaching","Job","Freelancing"]

const onTheWebSchema = {
    LinkedInId:{type:String},
    GithubId:{type:String},
    FaceBookId:{type:String},
    Twitter:{type:String},
    Instagram:{type:String},
    Website:{type:String},
}

const proffInfoSchema = {
    highestEdu:{type:String,enum:eduEnum},
    currProff:{type:String,enum:proffEnum}
}



const User = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    aboutMe:{type:String, required:false},
    onTheWeb:onTheWebSchema,
    proffInfo:proffInfoSchema,
    interest:[{type:String,default:[]}]
})

module.exports = mongoose.model('User',User);