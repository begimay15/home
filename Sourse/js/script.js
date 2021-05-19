$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#number").mask("8(999) 999-9999");
});

let elms = document.getElementsByClassName( 'splide' );
for ( let i = 0, len = elms.length; i < len; i++ ) {
    new Splide( elms[ i ] ).mount();
}
//Map
ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.8083, 37.5868],
            zoom: 16,
            controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark([55.8083, 37.5868]);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}