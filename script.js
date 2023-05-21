let users=[{id:1,name:"john",age:"18",profession:"developer"},
{id:2, name:"jack",age:"20", profession:"developer"},
{id:3, name:"karen", age:"19",profession:"admin"}];
let div=document.getElementById("table");
for(let i=0;i<users.length;i++){
    const user=document.createElement("div");
    user.className="user";
    const id=document.createElement("div");
    id.innerText=users[i].id+".";
    const name=document.createElement("div");
    name.innerText="Name: "+users[i].name;
    const age=document.createElement("div");
    age.innerText="Age: "+users[i].age;
    const profession=document.createElement("div");
    profession.innerText="Profession: "+users[i].profession;

    user.append(id);
    user.append(name);
    user.append(profession);
    user.append(age);
    div.append(user)
}

function myFilter(){
    let select=document.getElementById("profession").value;
    if(select==="none"){
        alert("Please select a profession before clicking the button");
        return;
    }
  const newSelect=select.toLowerCase();
  const filteredArr = users.filter(ele => {
    return ele.profession===newSelect;
  });
//   hide elements
  const user=document.getElementsByClassName("user");
  for(let i=0;i<user.length;i++){
    user[i].style.display="none";
  }

//   Show the filtered rows
  filteredArr.forEach((element) => {
    const user=document.createElement("div");
    user.className="user";
    const id=document.createElement("div");
    id.innerText=element.id+".";
    const name=document.createElement("div");
    name.innerText="Name: "+element.name;
    const age=document.createElement("div");
    age.innerText="Age: "+element.age;
    const profession=document.createElement("div");
    profession.innerText="Profession: "+element.profession;

    user.append(id);
    user.append(name);
    user.append(profession);
    user.append(age);
    div.append(user)
  });
}




function addUser(){
    let userObj={};
    userObj.id=users.length+1;
    userObj.name=document.getElementById("fullName").value;
    userObj.profession=document.getElementById("prof").value.toLowerCase();
    userObj.age=document.getElementById("age").value;
    users.push(userObj);
    const user=document.createElement("div");
    user.className="user";
    const id=document.createElement("div");
    id.innerText=users[users.length-1].id+".";
    const name=document.createElement("div");
    name.innerText="Name: "+users[users.length-1].name;
    const age=document.createElement("div");
    age.innerText="Age: "+users[users.length-1].age;
    const profession=document.createElement("div");
    profession.innerText="Profession: "+users[users.length-1].profession;

    user.append(id);
    user.append(name);
    user.append(profession);
    user.append(age);
    div.append(user)
}
