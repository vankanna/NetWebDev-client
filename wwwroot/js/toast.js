
﻿$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        
        $('#product-name').html($(this).data('product-name'));
        $('#product-code').html($(this).data('product-code'));
        $('#toast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keyup', function(e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }
    });
});