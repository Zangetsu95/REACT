let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {

    const items = [
        "tache 1",
        "tache 2",
        "tache 3"

    ]

    /* It's a function that takes an array of items and returns an array of li elements. */
    const lis = items.map((item,k) => <li key={k}>{item}</li>)

    const title = <div>
        <h1 className="title" id="title">
            Bonjour les gens <span>{n}</span>
        </h1>
        <ul>{lis}</ul>
    </div>
    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)
