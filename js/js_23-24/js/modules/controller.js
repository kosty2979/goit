define (
    'Controller',

    ['jquery', 'lodash', 'Model', 'View'],

    function () {

        return function Controller (model, view) {
    var self = this;
        view.elements.add.on('click', addItem);
        view.elements.note.on('click','.item__edit', editItem );
        view.elements.note.on('click', '.item__rem', removeItem);
        view.elements.note.on('click', '.item__close', closeEdit);
        view.elements.note.on('click', '.item__submit', confirmEdit);

    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).siblings(".item__text").html();
        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem() {
        $(this).hide();
        $(this).siblings(".edit").show();
        $(this).siblings(".someNote").hide();
        
    }

    function closeEdit(){
        $(this).hide();
        $(this).siblings(".edit").hide();
        $(this).siblings(".someNote").show();
    }

    function confirmEdit(){
        var oldNote = $(this).siblings(".item__text").html();
        var newNote = $(this).siblings(".item__new").val();
        model.replaceItem(oldNote, newNote);
        view.renderList(model.data);
    }
}
}
);