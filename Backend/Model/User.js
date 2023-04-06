const mongoose = require("mongoose");

const eduEnum = ["Primary","Secondary","Higher Secondary","Graduation","Post Graduation"];
const proffEnum = ["Schooling","College","Teaching","Job","Freelancing"]

const onTheWebSchema = {
    LinkedInId:{type:String,default:""},
    GithubId:{type:String,default:""},
    FaceBookId:{type:String,default:""},
    Twitter:{type:String,default:""},
    Instagram:{type:String,default:""},
    Website:{type:String,default:""},
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