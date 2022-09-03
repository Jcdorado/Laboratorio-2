class Posts extends HTMLElement {

static get observedAttributes() {
    return ['username', 'ubicacion', 'fotopublicada', 'comentario'];
}

    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel= "stylesheet" href="./src/componentes/post/styles.css">

        <section id="fondoDePantalla">

        <img id="logo" src="./assets/logo.png">
        <h1 id="Username">${this.username}</h1>
        <h2 id="Ubicacion">${this.ubicacion}</h2>
        <img id="info" src="./assets/info.png">
        <img id="post" src="${this.fotopublicada}">
        <img id="Heart" src="./assets/Heart.png">
        <img id="comment" src="./assets/comment.png">
        <img id="shareicon" src="./assets/shareicon.png">
        <img id="save" src="./assets/Save.png">
        <img id="scroll" src="./assets/scroll.png">
        <h3 id="comentario"><strong>${this.username}</strong> ${this.comentario}</h3>

        </section>`;
  }
}

customElements.define("my-posts", Posts);
export default Posts;