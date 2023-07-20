import { images, dom } from "../data.js";

  export const renderImages = () => {
    dom.imagesContainer.innerHTML = '';
  
    images.forEach((image) => {
      const imageBox = document.createElement('div');
      imageBox.classList.add('image-box');
      imageBox.dataset.name = image.name;
  
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = '';
  
      const h6Element = document.createElement('h6');
      h6Element.textContent = image.title;
  
      imageBox.appendChild(imgElement);
      imageBox.appendChild(h6Element);
  
      dom.imagesContainer.appendChild(imageBox);
    });
  }
  