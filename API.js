// 1st method

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
  } catch (error) {
    console.log("Error aya bhai:", error);
  }
}
getUsers();

// 2nd method

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Data mil gaya:", data);
  })
  .catch(error => {
    console.error("Kuch error aaya:", error);
  });
