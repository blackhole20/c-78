var name_of_students=[];
function submit(){
   var name_1=document.getElementById("student1").value;
   var name_2=document.getElementById("student2").value;
   var name_3=document.getElementById("student3").value;
   var name_4=document.getElementById("student4").value;
   name_of_students.push(name_1);
   name_of_students.push(name_2);
   name_of_students.push(name_3);
   name_of_students.push(name_4);
   console.log(name_of_students);
   document.getElementById("name").innerHTML=name_of_students;
   document.getElementById("submitbutton").style.display="none";
   document.getElementById("sortbutton").style.display="inline-block";
}

function sort(){
    name_of_students.sort()
    console.log(name_of_students);
    document.getElementById("name").innerHTML=name_of_students;
}