import {LitElement, html} from '@polymer/lit-element';
import nanoid from 'nanoid';
import './gallery-item';
import './gallery-search';

class PsGallery extends LitElement {
	static get properties() {
		return {
			images: {type: Array}
		}
		
	}
	constructor(){
		super();
		this.images = []
	}
	createRenderRoot(){
		return this;
}
	connectedCallback() {
		super.connectedCallback();
	  this.loadAsync()
	}
	async loadAsync(){
		let data = await (await fetch('http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0')).json()
		this.dataLoaded(data)
		console.log(this.images)
	} 
	dataLoaded(data) {
		this.images = data.rows;
		
	}
	search(e, value) {
		console.log(e.target.value, value)
	}

	render(){
		return html`
			<div class="gallery-search__container">
				<ps-gallery-search></ps-gallery-search>
			</div>
			<div className="gallery-container">
			${this.images.map(image => html`
			<ps-gallery-item class="gallery-item"
			id=${image.id = nanoid()}
			.description=${image.description}
			.image=${image.image}
			.tags=${image.tag}
			.date=${image.date}
			></ps-gallery-item>
			`
			)}
			</div>
		`
	}
}

customElements.define('ps-gallery', PsGallery);