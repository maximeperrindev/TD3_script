import $ from 'jquery';
import './style.css';

window.deleteArticle = deleteArticle;
window.addItem = addItem;

$(document).ready(function() {
    console.log('Document ready !');
    let ul = $("ul");
    let addBtn = $('button');
    addBtn.click(function() {
        console.log('Button clicked');
        let inputValue = $('input').val();
        if (inputValue != "") {
            console.log('Input value : ' + inputValue);
            let qty = parseInt(Math.random() * (100 - 1) + 1);
            $("<li class='list-item load'>" + inputValue + "<span>Quantity left : " + qty + "</span><span><button class='btn-delete' onclick='window.deleteArticle(this)'>-</button><input id='quantity' type='number' value=0 max=" + qty + "><button onclick='window.addItem()' class='btn-add-item'>+</button></span></li>").appendTo(ul);
            $('input').val('');
            $('input').css('border', '');
            $('input').focus();
        } else {
            $('input').css('border', '1px solid red');
        }
    });
});

/**
 * Fonction de suppression qui prend en paramètre l'élément qui l'appelle
 * Cela supprime son parent
 */
function deleteArticle(obj) {
    var domElement = $(obj); //On récupère l'élément du  DOM correspondant au click (ici c'est le bouton)
    if ($('#quantity').val() > 1) {
        console.log('oui');
        $('#quantity').val(parseInt($('#quantity').val()) - 1);
    } else {
        if (confirm('Do you want to delete this article ?')) {
            //On récupère son parent proche li pour le supprimer (ce qui supprimera tout l'article avec le bouton)
            if (domElement.parent('span').parent('li').remove()) {
                console.log('Removed');
            }
        }
    }
}

function addItem() {
    $('#quantity').val(parseInt($('#quantity').val()) + 1);
}