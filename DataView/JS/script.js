function validate() {
    //Global declare

    event.preventDefault();

    //Name
    var name = document.getElementById("fname").value;
    //Email
    var mail = document.getElementById("email").value;
    //Phone
    var phone = document.getElementById("phone").value;
    //Password
    var password = document.getElementById("password").value;
    //Radio
    var radio1 = document.getElementById("male");
    var radio2 = document.getElementById("female");
    var radio3 = document.getElementById("others");
    //Textarea
    var textarea = document.getElementById("message").value;
    //Date
    var date = document.getElementById("dob").value;
    var lang = document.getElementById("intrest");
    var time = document.getElementById("time").value;
    // checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    //Image upload
    var fileInput = document.getElementById("fileInput");
    




    var errorName = document.getElementById("name-error");
    var errormail = document.getElementById("mail-error");
    var errorphone = document.getElementById("phone-error");
    var errorpassword = document.getElementById("password-error");
    var errorgender = document.getElementById("gender-error");
    var errortextarea = document.getElementById("textarea-error");
    var errordate = document.getElementById("date-error");
    var errorlang = document.getElementById("lang-error");
    var errorcheck = document.getElementById("language-error");
    var errorimage = document.getElementById("image-error");


    errorName.textContent = "";
    errormail.textContent = "";
    errorphone.textContent = "";
    errorpassword.textContent = "";
    errorgender.textContent = "";
    errortextarea.textContent = "";
    errordate.textContent = "";
    errorlang.textContent = "";
    errorcheck.textContent = "";
    errorimage.textContent = "";

    //name verification
    if (name == "" || /\d/.test(name)) {
        errorName.textContent = "Try again";
        document.getElementById("fname").style.border = "3px solid red";
        return false;

    }
    else {
        //alert(name);
        document.getElementById("name-error").style.visibility = 'hidden';
        document.getElementById("fname").style.border = "1px solid black";

    }


    //Email Verification
    if (mail != "" && /^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(mail)) {
        //alert(mail);
        document.getElementById("mail-error").style.visibility = 'hidden';
        document.getElementById("email").style.border = "1px solid black";
    }
    else {
        errormail.textContent = "Enter valid MailID";
        document.getElementById("email").style.border = "3px solid red";
        return false;
    }

    //Phone Number verification
    if (phone != "" && /^[6-9][0-9]{9}$/.test(phone)) {
        //alert(phone);
        document.getElementById("phone-error").style.visibility = 'hidden';
        document.getElementById("phone").style.border = "1px solid black";
    }
    else {
        errorphone.textContent = "Enter valid Phone Number";
        document.getElementById("phone").style.border = "3px solid red";
        return false;
    }

    //Password Verification
    if (password != "" && (password.length >= 8)) {

        //alert(password);
        document.getElementById("password-error").style.visibility = 'hidden';
        document.getElementById("password").style.border = "1px solid black";
    }
    else {
        errorpassword.textContent = "Password is too short";
        document.getElementById("password").style.border = "3px solid red";
        return false;
    }
    var gender = "";
    //Radio Button checked verification 
    if (radio1.checked == true) {
        gender = radio1.value;
        //alert(radio1.value);
        document.getElementById("gender-error").style.visibility = 'hidden';

    }
    else if (radio2.checked == true) {
        //alert(radio2.value);
        gender = radio2.value;
        document.getElementById("gender-error").style.visibility = 'hidden';


    }
    else if (radio3.checked == true) {
        //alert(radio3.value);
        gender = radio3.value;
        document.getElementById("gender-error").style.visibility = 'hidden';


    }
    else {
        errorgender.textContent = "Please Select the Radio Button";
        document.getElementById("gender-error").style.visibility = 'visible';
        return false;
    }

    //Text area Verification
    //document.getElementById("message").required=true;
    if (textarea == "") {
        document.getElementById("message").style.border = "3px solid black";
        errortextarea.textContent = "Please fill it out";
        document.getElementById("message").focus();
        return false;

    }
    else {
        document.getElementById("textarea-error").style.visibility = 'hidden';
        document.getElementById("message").style.border = "1px solid black";
        //alert(textarea );
    }

    //Date verification
    if (date == "" && !(/(0[1-9]|[12]|3[01])\/(0[1-9]|1[1,2])\/(19|20)\d{2}/.test(date))) {
        errordate.textContent = "Invalid format (dd/MM/yyyy)";
        document.getElementById("dob").style.border = "3px solid red";
        return false;
    }
    else {
        document.getElementById("date-error").style.visibility = 'hidden';
        document.getElementById("dob").style.border = "1px solid black";
        //alert(date);
    }

    //checkbox verification
    var flag=0;
    var checktext = "";
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checktext += checkbox.value + " ";
           flag++;
        }
    });
    if (flag>0) {
        document.getElementById("language-error").style.visibility = 'hidden';

    }
    else {
        errorcheck.textContent = "Please Select the checkbox Button";
        document.getElementById("language-error").style.visibility = 'visible';
        return false;
    }
    //var intrest =lang[lang.selectedIndex];

    //Select verification
    if (lang.selectedIndex >= 0) {
        // alert(lang.options[lang.selectedIndex].value);
        document.getElementById("intrest-error");
    }
    else {
        errorlang.textContent = "Please select the option";
        document.getElementById("intrest-error").style.visibility = 'visible';
        return false;

    }

    var file = fileInput.files[0];
    if(!file)
    {
        errorimage.textContent = "Please select a image";
        document.getElementById("image-error").style.visibility = 'visible';
        return false;
        

    }
    else
    {
           const reader=new FileReader();
           reader.onload=function(event)
           {
            const imageUrl = event.target.result;
            displayImage(imageUrl);
           };
           reader.readAsDataURL(file);
    }

    function displayImage(imageUrl)
    {
       const cell = document.getElementById("userPicture");
       const img= document.createElement("img");
       img.src=imageUrl;
       cell.appendChild(img);
       img.width=150;
       
    }

    document.getElementById('userName').innerHTML = name;
    document.getElementById('userEmail').innerHTML = mail;
    document.getElementById('userPhone').innerHTML = phone;
    document.getElementById('userPassword').innerHTML = password;
    document.getElementById('userGender').innerHTML = gender;
    document.getElementById('userAddress').innerHTML = textarea;
    document.getElementById('userDOB').innerHTML = date;
    document.getElementById('userTime').innerHTML = time;
    document.getElementById('userLanguage').innerHTML = checktext;
    document.getElementById('userInterest').innerHTML = lang.value
    //document.getElementById('userPicture').innerHTML = imageUrl;

    let formData = document.getElementById('form');
    let tableData = document.getElementById('table');
    formData.style.display = "none";
    tableData.style.display = "block";

    // //    document.getElementsByClassName("table").style.visibility='visible';
    //    var table =document.getElementById("table-body");

    //   var row = table.insertRow(0);
    //    var cell1 = row.insertCell(0);
    //    var cell2 = row.insertCell(1);
    //    var cell3 = row.insertCell(2);

    //    var cell4 = row.insertCell(3);
    //    var cell5 = row.insertCell(4);
    //    var cell6 = row.insertCell(5);
    //    var cell7 = row.insertCell(6);
    //    var cell8 = row.insertCell(7);
    //    var cell9 = row.insertCell(8);
    //    var cell10 = row.insertCell(9);

    //    cell1.innerHTML=name;
    //    cell2.innerHTML=mail;
    //    cell3.innerHTML=phone;
    //    cell4.innerHTML=password;
    //    cell5.innerHTML=gender;
    //    cell6.innerHTML=date;
    //    cell7.innerHTML=time;
    //    cell8.innerHTML=name;
    //    cell9.innerHTML=lang[lang.selectedIndex];
    //    cell10.innerHTML=name;

}