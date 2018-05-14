$(document).ready(function() {

$('.menu__list').on('click', '.menu__list-item', function() {
	$('body').animate({scrollTop: $('[data-section="'+ $(this).attr('data-target')+'"]').offset().top}, '500');
});

$(document).on('scroll', function() {
	if ($(document).scrollTop() > 200) {
		$('.button-top').fadeIn(200);
	} else {
		$('.button-top').fadeOut(200);
	}
});

$(document).trigger('scroll');

$('.button-top').click(function(){
	$('body').animate({scrollTop: 0}, '500');
});

  $('.sponsors__list-item').hover(function(){
    var $img = $(this).find('img');
    $img.attr('src', $img.attr('data-color-src'));
  }, function(){
    var $img = $(this).find('img');
    $img.attr('src', $img.attr('data-grey-src'));
  });

});



ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [46.1505,30.5425],
        zoom: 10
    }),

		MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
	    '<div class="map-popover top">' +
      '<a class="map-popover__close" href="#">&times;</a>' +
      '<div class="map-popover__arrow"></div>' +
      '<div class="map-popover__marker"></div>' +
      '<div class="map-popover__inner">' +
      '$[[options.contentLayout]]' +
      '</div>' +
      '</div>', {
      build: function () {
          this.constructor.superclass.build.call(this);
          this._$element = $('.map-popover', this.getParentElement());
          this.applyElementOffset();
          this._$element.find('.map-popover__close')
              .on('click', $.proxy(this.onCloseClick, this));
      },
      clear: function () {
          this._$element.find('.map-popover__close')
              .off('click');
          this.constructor.superclass.clear.call(this);
      },

      onSublayoutSizeChange: function () {
          MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

          if(!this._isElement(this._$element)) {
              return;
          }

          this.applyElementOffset();
          this.events.fire('shapechange');
      },
      applyElementOffset: function () {
          this._$element.css({
              left: -(this._$element[0].offsetWidth / 2),
              top: -(this._$element[0].offsetHeight + this._$element.find('.map-popover__arrow')[0].offsetHeight)
          });
      },
      onCloseClick: function (e) {
          e.preventDefault();

          this.events.fire('userclose');
      },
      getShape: function () {
        if(!this._isElement(this._$element)) {
            return MyBalloonLayout.superclass.getShape.call(this);
        }

        var position = this._$element.position();

        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
            [position.left, position.top], [
                position.left + this._$element[0].offsetWidth,
                position.top + this._$element[0].offsetHeight + this._$element.find('.map-popover__arrow')[0].offsetHeight
            ]
        ]));
      },
      _isElement: function (element) {
        return element && element[0] && element.find('.map-popover__arrow')[0];
      }
    }),

    MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="map-popover__image"></div>' +
      '<div class="map-popover__title">Место проведения</div>' +
      '<div class="map-popover__adress">Грибовка, <br>отель «<strong>Черное море Бугаз</strong>»</div>'

    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        balloonShadow: false,
        balloonLayout: MyBalloonLayout,
        balloonContentLayout: MyBalloonContentLayout,
        balloonPanelMaxMapArea: 0,
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/marker.png',
        // Размеры метки.
        iconImageSize: [48, 59],
        iconImageOffset: [-24, -59],
        // Не скрываем иконку при открытом балуне.
        hideIconOnBalloonOpen: false,
        // И дополнительно смещаем балун, для открытия над иконкой.
        balloonOffset: [0, -36]
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
}
