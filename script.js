// Array of users
const users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" },
  ];
  
  // Function to filter cards based on selected profession
  function filterCards() {
    const profession = document.getElementById("profession").value;
  
    if (profession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }
  
    const filteredUsers = users.filter(function (user) {
      return user.profession === profession;
    });
  
    displayUsers(filteredUsers);
  }
  
  // Function to add a user to list
  function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("newProfession").value;
  
    if (name === "" || age === "" || profession === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    const newUser = {
      id: users.length + 1,
      name: name,
      profession: profession,
      age: age,
    };
  
    users.push(newUser);
    displayUsers(users);
  }
  
  // Function to display users in UI
  function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    users.forEach(function (user) {
      const card = document.createElement("div");
      card.innerHTML =
        " " +
        user.id +
        " Name: " +
        user.name +
        " Profession: " +
        user.profession +
        " Age: " +
        user.age;
      card.className = "userCard";
  
      userList.appendChild(card);
    });
  }
  
  // Initial display of users
  displayUsers(users);