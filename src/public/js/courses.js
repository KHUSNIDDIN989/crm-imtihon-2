let hpCharacters = [];
let dsCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.student_name
      .toLowerCase()
      .includes(searchString.toLowerCase().trim());
  });
  displayCharacters(filteredCharacters);
});
filter.addEventListener("click", (e) => {
  const searchString = e.target.value;

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.direction
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("http://localhost:9999/get");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character, i) => {
      return `
            <tr>
      <th scope="row">${i + 1}</th>
      <td> ${character.student_name}</td>
      <td>+${character.student_phone}</td>
      <td> ${character.direction}</td>
      <td> ${character.class_days}</td>
      <td>${character.class_time}</td>
      <td class="pointer" data-delete=${character.student_id} id="delete">
       <i id="delete" class="bi bi-trash"></i>
      </td>
    </tr>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();

// DELETED STUDENET
tbody.addEventListener("click", (e) => {
  if (e.target.matches("#delete")) {
    fetch(`http://localhost:9999/delete/${e.target.dataset.delete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.href = "students";
        }
      });
  }
});
