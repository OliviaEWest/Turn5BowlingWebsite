$( document ).ready(function() {
// // init the state from the input
$(".image-checkbox").each(function () {
  if ($(this).find('input[type="checkbox"]').first().prop("checked")) {
    $(this).addClass('image-checkbox-checked');
  }
  else {
    $(this).removeClass('image-checkbox-checked');
  }
});

// sync the state to the input
$(".image-checkbox").on("click", function (e) {
  var check = $(this).find('input[type="checkbox"]').first();
  if (!check.prop('disabled')) {
    $(this).toggleClass('image-checkbox-checked');
    var $checkbox = $(this).find('input[type="checkbox"]');
    $checkbox.prop("checked",!$checkbox.prop("checked"));
    $checkbox.trigger('change');
    e.preventDefault();
  }

});
    });
