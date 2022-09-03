class Mycounter extends HTMLElement{

    static get observedAttributes(){
        return ["count"];
    } 

    attributeChangedCallback(prop, oldValue, newValue){
        this[prop] = newValue;
        this.mount();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.increaseCount = this.increaseCount.bind(this);
    }

    connectedCallback(){
        this.mount();
    }

    mount(){
        this.render();
        this.addEventListener();
    }

    addEventListener(){
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click", this.increaseCount);
    }

    increaseCount(){
        const currentValue = Number(this.getAttribute("count"));
        this.setAttribute("count", currentValue +1);
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/componentes/contador/styles.css">

        <section id="union">
        <h1 id="cantidadDeLikes">${this.count || 0}</h1>
        <button id="boton">Like</button>
        </section>
        `;
    }
}

customElements.define("my-counter", Mycounter);
export default Mycounter;