const forme_cont = document.getElementById('forme');
const text_cont = document.getElementById('text');
const btn = document.getElementById('btn');
const myRequest = new Request("./assets/js/data.json");
let array_length;

let ligne = 0;

// au lancement de la page
get_json(ligne);



// event

btn.addEventListener("click", () => {
    if(ligne < array_length - 1) {
        ligne++;
        get_json(ligne);
    }
});



// functions

async function get_json(index) {
    const data_json = await fetch(myRequest)
    .then(res => res.json())
    .then(json => {
        array_length = json.length;
        return json;
    });

    text_cont.textContent = data_json[index]['text'];
    forme_cont.setAttribute("src", data_json[index]['img']);
}