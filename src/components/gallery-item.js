import {LitElement, html } from '@polymer/lit-element';


class GalleryItem extends LitElement {

		static get properties() {
			return {
				image: String,
				description: String,
				date: String,
				tags: String,
			}
		}

		createRenderRoot(){
			return this;
	}

render(){
    return html`
    	<div class="gallery-item__image">
				<img src=${this.image} alt="">
			</div> 
			<div class="gallery-item__info">
				<p class="gallery-item__description">
					${this.description}
				</p>
				<p class="gallery-item__tags">tags: ${this.tags.split("|")
					.map(tag => html`
						<span>${tag}</span>
							`)
					}</p>
				<p class="gallery-item__date">11/23/19</p>
			</div>
    `
}
}

customElements.define('ps-gallery-item', GalleryItem)