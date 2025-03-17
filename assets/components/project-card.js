class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'image', 'alt', 'description', 'link', 'date', 'keywords'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border-radius: 8px;
                    border: 1%;
                    padding: 16px;                    
                    background: white;
                    max-width: 350px;
                    font-family: Arial, sans-serif;
                }
                h2 {
                    font-size: 1.5em;
                    margin: 0 0 8px;
                }
                picture {
                    display: flex;
                    justify-content: center; /* Centering the image */
                    align-items: center; /* Centering the image vertically */
                    width: 100%;
                    height: 200px; /* Set a fixed height for all images */
                    overflow: hidden; /* Ensures no overflow if image is larger */
                }

                picture img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Ensures images maintain aspect ratio while filling the container */
                }
                p {
                    font-size: 1em;
                    margin: 8px 0;
                }
                a {
                    display: inline-block;
                    margin-top: 10px;
                    color: blue;
                    text-decoration: none;
                    font-weight: bold;
                }
                .meta {
                    font-size: 0.9em;
                    color: #666;
                    margin-top: 8px;
                }
                picture  img {
                    width: 50%;
                    border-radius: 8px;
                    align-items: center;
                }
            </style>
            <h2>${this.getAttribute('title')}</h2>
            <picture>
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('alt')}">
            </picture>
            <p>${this.getAttribute('description')}</p>
            <a href="${this.getAttribute('link')}" target="_blank">Read more</a>
            <div class="meta">
                <span>${this.getAttribute('date')}</span> | 
                <span>${this.getAttribute('keywords')}</span>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);