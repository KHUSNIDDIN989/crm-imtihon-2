const delete__group = document.querySelectorAll("#delete__group");

// DELETED GROUP
delete__group.forEach((e) => {
  e.addEventListener("click", (e) => {
    fetch(`http://localhost:9999/groupsDelete/${e.target.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.href = "/groups";
        }
      });
  });
});
