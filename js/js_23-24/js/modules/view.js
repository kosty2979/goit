define (
    'View',

    ['jquery', 'lodash', 'Model'],

    function (Model) {
      return  function View(model) {
    var self = this;
    function init() {
       var tmpl=$("#template1").html();
        var html = _.template(tmpl)();
        $("body").append (html);
        self.elements = {
            input    : $('.control__text'),
            add      : $('.control__add'),
            note     : $('.container')
        };

        self.renderList(model.data);
    };
    self.renderList = function(data) {
        var tmpl=$("#template2").html();
            var note = _.template(tmpl)({data:data});
            self.elements.note.html(note);
    };
    init();

}
}
);