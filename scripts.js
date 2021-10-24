window.onload= ()=>{ //Executes after HTML loads
    //Patterns to match character combinations in strings
    const rx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //Thanks stack overflow
    //Subscribe button
    let subscribe = document.querySelector("button.btn");
    //Text field for the e-mail
    let emailText = document.querySelector("input[type=\"email\"]");
    //Result text
    let result = document.querySelector("div.message");

    subscribe.onclick = (event)=>{ //Subscribe button listener
        event.preventDefault(); //Prevent site from reloading after every click
        if (rx.test(emailText.value.toLowerCase())){ //Use regex to test if given email is valid
            //If email is valid display this
            result.innerHTML = `Thank you! Your e-mail address ${emailText.value} has been added to our mailing list!`;
        }
        else{
            //If email is invalid display this
            result.innerHTML = "Please enter a valid e-mail address."
        }
    }
}