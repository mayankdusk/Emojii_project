console.log(emojiList);
let emoje_container = document.getElementById("emoje_container");
let search_field = document.getElementById("search_field");

const displayEmojees=(query='')=> {
  let filteredData = emojiList.filter((e) => {
    if (e.description.indexOf(query) != -1) {
      return true;
    }
    if(e.aliases.find(elem=>elem===query)){
        return true;
    }
    if(e.tags.find(elem=>elem===query)){
        return true;
    }
  });
  emoje_container.innerHTML=''
  filteredData.forEach(e=> {
    let new_row = document.createElement("tr");
    let new_emojee = document.createElement("td");
    new_emojee.style.width='200px'
    new_emojee.style.fontSize='50px'
    let new_aliases = document.createElement("td");
    new_aliases.style.fontSize='30px'
    let new_description = document.createElement("td");
    new_description.style.fontSize = "30px";
    new_emojee.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description.innerText = e.description;

    new_row.appendChild(new_emojee);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);
    emoje_container.appendChild(new_row);
  });
}

const searchData=(e)=> {
  let value = e.target.value;
  console.log(value);
  displayEmojees(value);
}
window.addEventListener("load", displayEmojees);
search_field.addEventListener("keyup", searchData);

window.onload = () => displayEmojees();
