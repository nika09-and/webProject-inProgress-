const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const infoSaveButton = document.getElementById("infoSaveButton");

let file2Window;

function fillNewObject(title, price, description){
    const newProduct = {
        title: title,
        price: price,
        description: description
    };

    // Open File 2 in a new window or use an existing window
    if (!file2Window || file2Window.closed) {
        file2Window = window.open('product.html', '_blank');
    } else {
        // Send the product data to File 2 when the window is already open
        file2Window.createNewElement(newProduct);
    }
}

infoSaveButton.addEventListener('click', () => {
    fillNewObject(title.value, price.value, description.value);
});
