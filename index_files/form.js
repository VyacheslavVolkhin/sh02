    // Forms
$(document).on('submit', 'form[data-oc-toggle=\'ajax\']', function (e) {
    let button;
    e.preventDefault();

    const element = this;
    const form = e.target;
    let action = $(form).attr('action');
    if (e.originalEvent !== undefined && e.originalEvent.submitter !== undefined) {
        button = e.originalEvent.submitter;
    } else {
        button = '';
    }

    const formaction = $(button).attr('formaction');

    if (formaction !== undefined) {
        action = formaction;
    }

    let method = $(form).attr('method');

    if (method === undefined) {
        method = 'post';
    }

    var enctype = $(element).attr('enctype');

    if (enctype === undefined) {
        enctype = 'application/x-www-form-urlencoded';
    }

    console.log(e);
    console.log('element ' + element);
    console.log('action ' + action);
    console.log('button ' + button);
    console.log('formaction ' + formaction);
    console.log('method ' + method);
    console.log('enctype ' + enctype);


    $.ajax({
        url: action.replaceAll('&amp;', '&'),
        type: method,
        data: $(form).serialize(),
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
   
        success: function (json) {
            console.log(json);

            $('.alert-dismissible').remove();
            $(element).find('.is-invalid').removeClass('is-invalid');
            $(element).find('.invalid-feedback').removeClass('d-block');

            if (json['redirect']) {
                location = json['redirect'];
            }

            if (typeof json['error'] == 'string') {
                    toastr.error(json['error'], 'Ошибка!', {timeOut: 15000});
            }

            if (typeof json['error'] == 'object') {
                if (json['error']['warning']) {
                  toastr.error(json['error'], 'Ошибка!', {timeOut: 15000});

                }

                for (key in json['error']) {
                    $('#input-' + key.replaceAll('_', '-')).addClass('is-invalid').find('.form-control, .form-select, .form-check-input, .form-check-label').addClass('is-invalid');
                    $('#error-' + key.replaceAll('_', '-')).html(json['error'][key]).addClass('d-block');
                }
            }

            if (json['success']) {
           
                toastr.success(json['success'], 'Успех', {timeOut: 15000})
                
                // Refresh
                var url = $(form).attr('data-oc-load');
                var target = $(form).attr('data-oc-target');

                if (url !== undefined && target !== undefined) {
                    $(target).load(url);
                }
            }

            // Replace any form values that correspond to form names.
            for (key in json) {
                $(element).find('[name=\'' + key + '\']').val(json[key]);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});