// JSON fájl betöltése
async function loadData(url) {
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(`Failed to fetch '${url}': ${resp.statusText}`);
    return await resp.json();
}

function buildNavigation(data) {

}

function buildSections(data) {
    let sections = Object.keys(data).map(
        key => {
            let s = document.createElement('section')
            s.id = key
            // h2 – fő cím (String, Array, stb.)
            let h2 = document.createElement('h2');
            h2.textContent = key;
            s.appendChild(h2);

            // kategóriák bejárása
            Object.keys(data[key]).forEach(category => {
                let h3 = document.createElement('h3');
                h3.textContent = category;
                s.appendChild(h3);

                let ul = document.createElement('ul');

                // metódusok listája
                data[key][category].forEach(method => {
                    let li = document.createElement('li');
                    li.textContent = method;
                    ul.appendChild(li);
                });

                s.appendChild(ul);
            });

            return s
        }
    );
    const main = document.querySelector('#content')
    for (let s of sections) {
        main.appendChild(s)
    }
}

function buildPage(data) {
    buildNavigation(data)
    buildSections(data)
}

async function main() {
    try {
        const data = await loadData("js-built-in.json");
        buildPage(data)
        console.log(data)
    } catch (err) {
        alert(err)
    }
}

main()
// window.addEventListener('load', main)