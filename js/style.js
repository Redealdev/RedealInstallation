/* JS Code For installation selection */
$(document).ready(function () {
    $("#langufilter").msDropdown();
});

$( ".event-type-select" ).change(function() {
    var selectedEventType = this.options[this.selectedIndex].value;
    if (selectedEventType == "sweden") {
        $('.tabpadding').removeClass('d-none');
    } else {
        $('.tabpadding').addClass('d-none');
        $('.tabpadding[data-eventtype="' + selectedEventType + '"]').removeClass('d-none');
    }
});

/*/!* JS Code For installation page filter popup *!/
$("#langufilter").on("change", function () {
    $modal = $('#fliterpopup');
    if($(this).val() === 'sweden' || $(this).val() ==='other'){
        $modal.modal('show');
    }
});*/

/* JS Code For Index page Country selection*/
function closeMe()
{
    window.close();
}
