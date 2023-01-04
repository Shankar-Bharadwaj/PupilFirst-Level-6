/* eslint-disable no-unused-vars */
var token = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");

// Function to check or uncheck a todo item
function updateTodo(id) {
  const boolVal = document.getElementById("todos-checkbox-" + id).checked;
  fetch(`/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _csrf: token,
      completed: boolVal,
    }),
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function to delete a todo item
function deleteTodo(id) {
  fetch(`/todos/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _csrf: token,
    }),
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    })
    .catch((err) => console.log(err));
}
