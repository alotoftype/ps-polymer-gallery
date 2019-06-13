import {LitElement, html } from '@polymer/lit-element';


class GallerySearch extends LitElement {


  constructor() {
    super()
  }

  render(){
    return html`
    <style>
      .box {
        display: flex;
        margin: .8rem auto;
        max-width: 90vw;
        justify-content: center;
        align-items: center;
      }
    input{
      border: 1px solid #80c254;
      display: block;
      margin: 0 .8rem;
      height: 2.4rem;
      max-width: 50rem;
      width: 70vw;
      -webkit-appearance: none;
    }
    input::placeholder {
      padding-left: .8rem;
      color: #4d4d4d;
      font-variant: small-caps;
    }
    select {
      -webkit-appearance: none;
      background-color:#80c254;
      color: #fff;
      padding: 0 .4rem;
      border: none;
      border-radius: 0;
      height: 2.4rem;
      width: 5rem;
    }
    </style>
    <div class="box">
    <input type="search" placeholder="search"/>
    <select name="" id="">
      <option value=""selected>Sort by:</option>
      <option value="Active">Active</option>
      <option value="Date">Date</option>
    </select>
    </div>
    `
  }
}

customElements.define('ps-gallery-search', GallerySearch)