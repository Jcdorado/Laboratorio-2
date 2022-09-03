import './componentes/post/posts.js';
import './componentes/contador/contador.js';
import data from "../data.js";

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {

        const compts = data.map(({
            username,
            ubicacion,
            fotopublicada,
            comentario}) => `
            <my-posts
                username="${username}"
                ubicacion="${ubicacion}"
                fotopublicada="${fotopublicada}"
                comentario="${comentario}"
            ></my-posts>

            <my-counter>contar:8</my-counter>
            `);

        this.shadowRoot.innerHTML = compts.join('');
    }
}

customElements.define('app-container', AppContainer);