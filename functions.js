////////////////// CARRITO DE COMPRAS CON JS /////////////////////////

let carrito = [];

const AddProduct = () => {
    let product = prompt("Que producto desea agregar?");
    carrito.push(product);
}

const GetProducts = () => {
    alert(`Su carrito esta cargado por:\n- ${carrito.join('\n- ')}`);
}


const GetProduct = () => {
    const product = prompt('Que producto desea saber si esta en su carrito?');
    if (carrito.includes(product) === true) {
        alert('El producto se encuentra en su carrito');
    } else {
        alert('El producto no se encuentra en su carrito')
    }
}

const SearchProducts = () => {
    const search = prompt('Que producto desea buscar?');
    let results = carrito.filter(product => product.includes(search));
    alert(results)
}

const removeProduct = function() {
    const productToRemove = prompt('Que producto desea eliminar?');
    carrito = carrito.filter(product => product != productToRemove);
}