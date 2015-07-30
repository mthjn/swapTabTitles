var originalTitle = document.title,
 swapTitle = document.getElementsByTagName('title')[0].getAttribute('data-alt-title');
window.onblur = function () {
    document.title = swapTitle;
}
window.onfocus = function() {
    document.title = originalTitle;
}
