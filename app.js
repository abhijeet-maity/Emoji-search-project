const text = document.querySelector("#search");
const tbody = document.querySelector("#tableData");
function printing() {
    console.log("Hello");
    emojiList.forEach((item) => {
        console.log(item);
        const row = document.createElement("tr");
        row.classList.add("each-row");
        row.innerHTML = `<td class = "emoji">${item.emoji}</td><td class = "emoji-name">${item.aliases[0][0].toUpperCase() + item.aliases[0].slice(1)}</td><td class = "description">${item.description[0].toUpperCase() +
            item.description.slice(1)}</td>`;
        tbody.appendChild(row);
        

    })
}
;
function searchinig() {
    tbody.innerHTML = "";
    const textData = text.value.toLowerCase();
    if(textData === " ") {
        alert("Please enter the valid search");
        return;
    }
    let arr = emojiList.filter((item) => {
        return item.tags.some((data) => {
            return data.includes(textData);
        })
    });
    arr.forEach((item) => {
        const row = document.createElement("tr");
        row.classList.add("each-row");
        row.innerHTML = `<td class = "emoji">${item.emoji}</td><td class = "emoji-name">${item.aliases[0][0].toUpperCase() + item.aliases[0].slice(1)}</td><td class = "description">${item.description[0].toUpperCase() +
            item.description.slice(1)}</td>`;
        tbody.appendChild(row);
    })
}
text.addEventListener("keyup", ()=> {
    searchinig();
});

printing();