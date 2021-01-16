/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/

function activate_log_in() //html manipulation
{
    /* a simple html-manipulation function.
    changes the dispaly to nothing (which makes an element actualy appear) of the according group of elements
    the opposite group of elements, in this case the sign-up elements will get the display set to none (which makes the element visuallz disapper)
    the group of elements can be derived from the function name
    */

    document.getElementById("log-in-container").style = "";
    document.getElementById("log-in-buttons").style = "";
    document.getElementById("sign-up-container").style = "display:none";
    document.getElementById("sign-up-buttons").style = "display:none";
}

function activate_sign_up() //html manipulation
{
    /* a simple html-manipulation function.
    changes the dispaly to nothing (which makes an element actualy appear) of the according group of elements
    the opposite group of elements, in this case the log-in elements will get the display set to none (which makes the element visuallz disapper)
    the group of elements can be derived from the function name
    */
    document.getElementById("log-in-container").style = "display:none";
    document.getElementById("log-in-buttons").style = "display:none";
    document.getElementById("sign-up-container").style = "";
    document.getElementById("sign-up-buttons").style = "";
}

function submit_log_in_data() {
    console.log("succesful logIn");
    document.getElementById("succesfulLogIn").style = "";
    document.getElementById("succesfulSignUp").style = "display:none";
}

function submit_sign_up_data() {
    console.log("succesful signUp");
    document.getElementById("succesfulLogIn").style = "display:none";
    document.getElementById("succesfulSignUp").style = "";
}
