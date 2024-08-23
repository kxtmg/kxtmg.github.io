$(document).ready(function() {
    $('#home').show();
    $('.center').fadeIn();

    $('#scheduleTab').click(function() {
        $('.page:visible').fadeOut(500, () => $('#schedule').fadeIn());
      });
    
    $('#contactTab').click(function() {
        $('.page:visible').fadeOut(500, () => $('#contact').fadeIn());
    });

    $('#homeTab').click(async function() {
        $('.page:visible').fadeOut(500, () => $('#home').fadeIn());
    });
});