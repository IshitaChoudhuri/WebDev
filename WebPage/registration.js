function printError(elemId, HintMsg)
{
    document.getElementById(elemId).innerHTML=HintMsg;
}
var submit=document.getElementById("loginButton")
console.log(submit);
submit.onclick=function(){
    validateForm();
}
function validateForm(){
    var form=document.getElementById("myform")
    var name = form.name.value;
    var mobile =form.mobile.value;
    var email = form.email.value;
    var gender =form.gender.value;
    var qual=form.qual.value;
    var course=form.course.value;
    var country = form.country.value;

    var nameErr = true;
    var mobileErr = true;
    var emailErr = true;
    var genderErr = true;
    var qualErr=true;
    var courseErr=true;
    var countryErr = true;

    
    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
      } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
        } else {
          printError("nameErr", "");
          nameErr = false;
        }
      }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
      } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
          printError("mobileErr", "");
          mobileErr = false;
        }
      }


    // Validate email address
    if (email == "") {
      printError("emailErr", "Please enter your email address");
    } else {
      // Regular expression for basic email validation
      if (!email.includes("@")) {
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }

    // Validate gender
       if (gender == "") {
        printError("genderErr", "Please select your gender");
        } else {
            printError("genderErr", "");
            genderErr = false;
          }
    
    // Validate qualifications
        if (qual == "Select") {
            printError("qualErr", "Please select your qualification");
          } else {
            printError("qualErr", "");
            qualErr = false;
          }

    // Validate course
    if (course == "Select") {
        printError("courseErr", "Please select your country");
      } else {
        printError("courseErr", "");
        courseErr = false;
      }

    // Validate country
    if (country == "Select") {
      printError("countryErr", "Please select your country");
    } else {
      printError("countryErr", "");
      countryErr = false;
    }
  

    if ((nameErr || mobileErr || emailErr || genderErr || qualErr ||  courseErr || countryErr) == true) {
      
        return false;
      } else {
        var dataPreview =
          "You've entered the following details: \n" +
          "Name: " +
          name +
          "\n" +
          "Mobile number: " +
          mobile +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Gender: " +
          gender +
          "\n" +
          "Qualification: " +
          qual +
          "\n" +
          "Course: " +
          course +
          "\n" +
          "Country: " +
          country +
          "\n"
          alert(dataPreview);

      }
}