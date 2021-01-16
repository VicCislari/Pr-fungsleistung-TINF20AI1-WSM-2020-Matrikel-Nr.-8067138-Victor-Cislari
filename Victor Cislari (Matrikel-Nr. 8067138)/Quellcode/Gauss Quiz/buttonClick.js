/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/

function buttonClick(button) // Event-Handle
{
    var all_buttons_of_section = button.parentElement.children;
    for (var i = 0; i < all_buttons_of_section.length; i++) //disactivate all other buttons by setting their class to "".
    {
        var button_child = all_buttons_of_section[i];

        button_child.className = "";
    }

    button.className = "active";
}
