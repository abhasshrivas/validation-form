let fname = document.querySelector(".form-control");
let lanme = document.querySelector(".form-control1");
let error1 = document.getElementById("firstErr");
let Error = document.getElementById("error");
let error2 = document.getElementById("lastErr");
let submitBtn1 = document.getElementById("submitBtn");
let age = document.getElementById("age");
let ageErr = document.getElementById("ageErr");
const form = document.getElementById("myForm");
let phone = document.getElementById("phone");
let phonErr = document.getElementById("phoneErr");
let Cost = document.getElementById("cost");
let GST = document.getElementById("gst");
let Total = document.getElementById("totalcost");
let Address = document.getElementById("address");
let Password = document.getElementById("password");
let passErr = document.getElementById("passErr");
let CapsErr = document.getElementById("capsErr");
let NumErr = document.getElementById("numErr");
let CharErr = document.getElementById("charErr");
let SmallErr = document.getElementById("smallErr");
let checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="option"]'
);
let submitBtn = document.getElementById("submitBtn");
let AddressErr = document.getElementById("addressErr");

/*function submitform() {
    if (fname.value == "") {
        document.getElementById("firstErr").innerHTML = "first name is empty";
    } else if (fname.value.length < 3) {
        document.getElementById("firstErr").innerHTML =
            "first name requrired min. 3 character";
    }
}*/

/*  if (lanme.value == "") {
        document.getElementById("lastErr").innerHTML = "last name is empty";
    } else if (lanme.value.length < 3) {
        document.getElementById("lastErr").innerHTML =
            "last name required min 3 character and max. 100 character";
    }
    return false;
}*/

/*function validform() {
    let valid = true;*/

fname.addEventListener("input", () => {
    if (fname.value.length < 3) {
        error1.textContent =
            "firts name required min. 3 and max.100  character";
        valid = false;
    } else {
        error1.textContent = "";
    }
});
/*fname.addEventListener("input", () => {
    if (fname.value.length < 100) {
        Error.textContent = "firts name required max. 100 char";
        valid = false;
    } else {
        Error.textContent = "";
    }
});*/
lanme.addEventListener("input", () => {
    if (lanme.value.length < 3) {
        error2.textContent =
            "last name required min. 3 character and max. 100 character";
        valid = false;
    } else {
        error2.textContent = "";
    }
});

document.getElementById("myForm").addEventListener("submit", (e) => {
    if (fname.value.length < 3 || lanme.value.length < 3) {
        e.preventDefault(); // stop form
        alert("Please fix the errors before submitting.");
    }
});
phone.addEventListener("input", () => {
    if (phone.value.length < 10) {
        phonErr.textContent = "phone number must be 10 digit";
        valid = false;
    } else {
        phonErr.textContent = "";
    }
});

/*age.addEventListener("input", () => {
    if (age.value < 18) {
        ageErr.textContent = "age must be 18 to 100";
        valid = false;
    } else {
        ageErr.textContent = "";
    }
});*/
Cost.addEventListener("input", () => {
    let cost = parseFloat(Cost.value) || 0;
    let gst = cost * 0.18;
    let totalcost = cost + gst;

    GST.value = gst.toFixed(2);
    Total.value = totalcost.toFixed(2);
});
Address.addEventListener("input", () => {
    let address = Address.value;
    if (Address.value.length > 200) {
        AddressErr.textContent = "Address should be max. 200 character";
        valid = false;
    } else {
        AddressErr.textContent = "";
        valid = true;
    }

    /*Address.value = address.toUpperCase();*/
});
/*document.getElementById("myForm").addEventListener("submit", function (e) {
    const Password = document.getElementById("password");*/

Password.addEventListener("input", () => {
    if (Password.value.length < 8) {
        passErr.textContent = "password must be min. 8 and max. 15 character";
        valid = false;
    } else {
        passErr.textContent = "";
        valid = true;
    }
});
/*Password.addEventListener("input", () => {
    let password = Password.value;
    /* Password.value = password.toUpperCase();*/
/*Password.value = password.charAt(0).toUpperCase() + password.slice(1);
});*/
Password.addEventListener("input", () => {
    let value = Password.value;
    let regex = /[A-Z]/;

    if (!regex.test(value)) {
        capsErr.textContent = "password must be 1 uppercase";
        valid = false;
    } else {
        capsErr.textContent = "";
        valid = true;
    }
});
/*Password.addEventListener("input", () => {
    let password = Password.value;
    Password.value = password.toLowerCase();
});*/

/*Password.addEventListener("input", () => {
    let value = Password.value;
    let regex = /[a-z]/;
    if (!regex.test(value)) {
        SmallErr.textContent = "password must be 1 lowercase";
        valid = false;
    } else {
        SmallErr.textContent = "";
        valid = true;
    }
});*/
Password.addEventListener("input", () => {
    let value = Password.value;
    let regex = /[a-z]/;

    if (!regex.test(value)) {
        SmallErr.textContent = "password must be 1 lowercase";
        valid = false;
    } else {
        SmallErr.textContent = "";
        valid = true;
    }
});

Password.addEventListener("input", () => {
    let value = Password.value;
    let regex = /[0-9]/;
    if (!regex.test(value)) {
        NumErr.textContent = "password must be 1 number";
        valid = false;
    } else {
        NumErr.textContent = "";
        valid = true;
    }
});
/*Password.addEventListener("input", () => {
    let password = Password.value;
    Password.value = password.specialChar(1);
});*/
Password.addEventListener("input", () => {
    let value = Password.value;
    let regex = /[@]/;
    if (!regex.test(value)) {
        CharErr.textContent = "password must be 1 special character";
        valid = false;
    } else {
        CharErr.textContent = "";
        valid = true;
    }
});
document.getElementById("myForm").addEventListener("submit", (e) => {
    if (
        Password.value.length < 8 ||
        !/[A-Z]/.test(Password.value) ||
        !/[a-z]/.test(Password.value) ||
        !/[0-9]/.test(Password.value) ||
        !/[@]/.test(Password.value)
    ) {
        e.preventDefault(); // stop form
        alert("Please fix the errors in password field before submitting.");
    }
});

function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => container.removeChild(toast), 900);
    }, 3000);
}
age.addEventListener("input", (e) => {
    e.preventDefault(); // prevent submit

    if (age.value < 20) {
        showToast("⚠️ kids are not allowed!");
        return;
    } else if (age.value > 80) {
        showToast("⚠️above the age of 80 is not allowed");
        return;
    }
    showToast("✅ yes! above 20 age is allowed");
});
/*checkbox.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            checkboxes.forEach((cb) => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});*/
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            checkboxes.forEach((cb) => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

/*myForm.addEventListener("input", () => {
    // Check if form is valid
    if (myForm.checkValidity()) {
        submitBtn.disabled = false; // Enable button
    } else {
        submitBtn.disabled = true; // Keep disabled
    }
});*/
