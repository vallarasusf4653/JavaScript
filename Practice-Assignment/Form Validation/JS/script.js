
function validate()
{
    event.preventDefault();
     var username =document.getElementById("username").value;
     var age =document.getElementById("age").value;
     var password=document.getElementById("password").value;
     //alert(username+ " "+age)
     document.getElementById("tableinfo").style.visibility='visible';
     var table=document.getElementById("table-insert");
     var row=table.insertRow(0);
     var  cell1= row.insertCell(0);
     var cell2 =row.insertCell(1);
     var cell3 =row.insertCell(2);
     cell1.innerHTML=username;
     cell2.innerHTML=age;
     cell3.innerHTML=password;
     document.getElementsByClassName("form-login").reset();

}