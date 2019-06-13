import {LitElement, html} from '@polymer/lit-element';
//import nanoid from 'nanoid';
import './gallery-item';

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
	render(){
		return html`
		<div class="gallery">
			${this.images.map(image => html`
			<ps-gallery-item
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