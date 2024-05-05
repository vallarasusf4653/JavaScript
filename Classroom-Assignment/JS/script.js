
var isValidbookName = false;
var isValidAuthorEmail = false;
var isValidAuthorName = false;
var isValidPublishedYear = false;
var isValidPrice = false;

var CurrentBookName="";
var AuthorEmail="";
var CurrentAuthorName="";
var publishedYear="";
var price="";

function validateBookName() {
    var BookName = document.getElementById('bookName').value;
    var ErrorBookName = document.getElementById('bookName-Error');
    ErrorBookName.textContent = "";
    if (BookName.length > 50) {
        isValidbookName = false;

        ErrorBookName.textContent = "Book name length should not exceed 50";
        document.getElementById('bookName-Error').style.color = 'red';
        document.getElementById('bookName').style.border = "0.09rem solid red";
    }
    else if (BookName = "" || /\d/.test(BookName)) {
        isValidbookName = false;

        ErrorBookName.textContent = "Numeric values not allowed";
        document.getElementById('bookName-Error').style.color = 'red';
        document.getElementById('bookName').style.border = "0.09rem solid red"
    }
    else {
        CurrentBookName=BookName;
        isValidbookName = true;
        ErrorBookName.textContent = "Vaild";
        document.getElementById('bookName-Error').style.color = 'Green';
        document.getElementById('bookName').style.border = "0.09rem solid black";
    }
}


function validateAuthorEmail() {
     AuthorEmail = document.getElementById('authorEmail').value;
    var ErrorAuthorEmail = document.getElementById('authorEmail-Error');
    ErrorAuthorEmail.textContent = "";

    if (AuthorEmail == "" || !(/^([a-z0-9]+)@([a-z]+).([a-z]{2,20})$/.test(AuthorEmail))) {
        isValidAuthorEmail = false;

        ErrorAuthorEmail.textContent = "Please enter valid Email Address";
        document.getElementById('authorEmail-Error').style.color = 'red';
        document.getElementById('authorEmail').style.border = "0.09rem solid red"
    }
    else {
        isValidAuthorEmail = true;
        ErrorAuthorEmail.textContent = "Vaild";
        document.getElementById('authorEmail-Error').style.color = 'Green';
        document.getElementById('authorEmail').style.border = "0.09rem solid black";
    }

}


function validateAuthorName() {
    var AuthorName = document.getElementById('authorName').value;
    var ErrorauthorName = document.getElementById('authorName-Error');
    ErrorauthorName.textContent = "";

    if (AuthorName.length > 50) {
        isValidAuthorName = false;

        ErrorauthorName.textContent = "Author name length should not exceed 50";
        document.getElementById('authorName-Error').style.color = 'red';
        document.getElementById('authorName').style.border = "0.09rem solid red";
    }
    else if (AuthorName = "" || /\d/.test(AuthorName)) {
        isValidAuthorName = false;

        ErrorauthorName.textContent = "Numeric values not allowed";
        document.getElementById('authorName-Error').style.color = 'red';
        document.getElementById('authorName').style.border = "0.09rem solid red"
    }
    else if (/[$%^&*#!()?]/.test(AuthorName)) {
        isValidAuthorName = false;

        ErrorauthorName.textContent = "Special Character not allowed";
        document.getElementById('authorName-Error').style.color = 'red';
        document.getElementById('authorName').style.border = "0.09rem solid red"
    }
    else {
        CurrentAuthorName= AuthorName;
        isValidAuthorName = true;
        ErrorauthorName.textContent = "Vaild";
        document.getElementById('authorName-Error').style.color = 'Green';
        document.getElementById('authorName').style.border = "0.09rem solid black";
    }
}

function validatePublishedYear() {
    publishedYear = document.getElementById('published').value;
    var ErrorpublishedYear = document.getElementById('published-Error');
    ErrorpublishedYear.textContent = "";
    if (publishedYear.length > 4) {
        isValidPublishedYear = false;

        ErrorpublishedYear.textContent = "Published year not exceed to 4 digit";
        document.getElementById('published-Error').style.color = 'red';
        document.getElementById('published').style.border = "0.09rem solid red";
    }
    else if (/^[a-zA-Z]/.test(publishedYear)) {
        isValidPublishedYear = false;
        ErrorpublishedYear.textContent = "Alphabets values not allowed";
        document.getElementById('published-Error').style.color = 'red';
        document.getElementById('published').style.border = "0.09rem solid red";
    }
    else if (publishedYear < 1900 || publishedYear >= 2024) {
        isValidPublishedYear = false;
        ErrorpublishedYear.textContent = "Please enter valid Published year”";
        document.getElementById('published-Error').style.color = 'red';
        document.getElementById('published').style.border = "0.09rem solid red";
    }
    else {
        isValidPublishedYear = true;
        ErrorpublishedYear.textContent = "Vaild";
        document.getElementById('published-Error').style.color = 'Green';
        document.getElementById('published').style.border = "0.09rem solid black";
    }

}
function validatePrice() {
     price = document.getElementById('price').value;
    var Errorprice = document.getElementById('price-Error');
    Errorprice.textContent = "";


    if (/^[a-zA-Z]/.test(price)) {
        isValidPrice = false;
        Errorprice.textContent = "Alphabets values not allowed";
        document.getElementById('price-Error').style.color = 'red';
        document.getElementById('price').style.border = "0.09rem solid red";
    }
    else if (price == "") {
        isValidPrice = false;
        Errorprice.textContent = "Please enter valid Price";
        document.getElementById('price-Error').style.color = 'red';
        document.getElementById('price').style.border = "0.09rem solid red";
    }
    else if (/\d.0/.test(price)) {
        isValidPrice = true;
        Errorprice.textContent = "Vaild";
        document.getElementById('price-Error').style.color = 'Green';
        document.getElementById('price').style.border = "0.09rem solid black";
    }

}

function validateForm() {


    
    if (isValidbookName == true &&
        isValidAuthorEmail == true &&
        isValidAuthorName == true &&
        isValidPublishedYear == true &&
        isValidPrice == true) {


document.getElementById('tdbookName').innerHTML = document.getElementById('bookName').value;;
document.getElementById('tdauthorEmail').innerHTML = AuthorEmail;
document.getElementById('tdauthor').innerHTML = document.getElementById('authorName').value;
document.getElementById('tdpublishedYear').innerHTML = publishedYear;
document.getElementById('tdprice').innerHTML = price;
document.getElementById("submit-value").innerHTML="Successfully Register";

    }
    else
    {
        document.getElementById("submit-value").innerHTML="Please Fill Out Form";

    }
}

function showDetails()
 {
     document.getElementById("formData").style.display="none";
     document.getElementById("displayTable").style.display="block";
}
var year = document.getElementById('year');
var date = new Date();
year.innerHTML=date.getFullYear();

