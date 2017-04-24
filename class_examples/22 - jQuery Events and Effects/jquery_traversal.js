/*
 * Filename:    jquery_traversal.js
 * Description: Examples of jQuery Traversal
 * Author:      Luke Sathrum
 */

// Add handler for traversal methods
$('body *').not('table *, table').on('click', function(e) {
  if(e.target === e.currentTarget) {
    e.stopPropagation();
    $t = $(this);
    $('#this').text($t.getTag());
    $('#parent').text($t.parent().getTag());
    OutputMultiple('#parents', $t.parents());
    OutputMultiple('#children', $t.children());
    OutputMultiple('#siblings', $t.siblings());
    $('#next').text($t.next().getTag());
    OutputMultiple('#nextAll', $t.nextAll());
    $('#prev').text($t.prev().getTag());
    OutputMultiple('#prevAll', $t.prevAll());
  }
});

function OutputMultiple(text, $t) {
  $(text).empty().append($('<pre>').text($t.getTags()));
}

// Add new jQuery functions
jQuery.fn.getTag = function() {
  if (this === 'undefined' || $(this).length === 0) {
    return 'Does not Exist';
  }
  return $(this).clone()
                .empty()
                .prop('outerHTML');
};

jQuery.fn.getTags = function() {
  if (this == 'undefined') {
    return 'Does not Exist';
  }
  var text = '';
  $(this).each(function() {
                 text += $(this).getTag() + '\n';                 
               });
  return text || 'None';
};