/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/
var cartContainer;
var cartDiv;

function add(item) {
    item.attributes.class.value = "inCart";
    var item = document.getElementById(item.id); //gets the first item in document with the id.
    item.setAttribute("class", "inCart");
    var itemClone = item.cloneNode(true); //clone it with all the children. if you dont clone it, than the referenced item will simply be moved to the cart. //creates a representation
    cartDiv.appendChild(itemClone);

    cartContainer.setAttribute("class", "showCart");
}

function remove(item_selected) {
    /*
    the referenced item in the argument section,
      could be an item from the actual cart,
      but it also could be an item from the container.
      The following commands are to ensure that javScript picks the
      correct item from the correct box.
    */

    var item = document.getElementById(item_selected.id) //gets the item from container, as it appears first in the document
    var itemInCart = document.getElementById("cart").querySelector("#" + item_selected.id) //gets the targeted item from the cart box //basically the representation in the cart

    itemInCart.remove();
    item.attributes.class.value = "notInCart";

    if (cartDiv.children.length == 0) // if the cart has no items, that change the class to "emptyCart".
        cartContainer.setAttribute("class", "emptyCart");
}

window.onload = function() {
    cartContainer = document.getElementById("cartContainer");
    cartDiv = cartContainer.querySelector("#cart");
};
