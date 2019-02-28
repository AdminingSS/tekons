$(document).ready(function () {

    (function() {
        const $videoAccordion = $('.tm-takeon-add');
        const $borderElem = $videoAccordion.find('.uk-accordion-title');
        $videoAccordion.on('show', function () {
            $borderElem.css("border-radius", "3px 3px 0 0")
        });
        UIkit.util.on($videoAccordion, 'hide', function () {
            $borderElem.css("border-radius", "3px")
        });
    })();

    (function () {

        const $ratingElem = $('.tm-rating-set');
        const $starElems = $ratingElem.find('li a');

        $ratingElem.on('click', 'a', function () {
            event.preventDefault();

            const target = $starElems.index(this);

            $starElems.each(function () {
                const $starElem = $(this);

                if (!$starElem.parent().hasClass('uk-active') && $starElems.index($starElem) <= target) {
                    $starElem.parent().addClass('uk-active');
                }
                else if ($starElem.parent().hasClass('uk-active') && $starElems.index($starElem) > target) {
                    $starElem.parent().removeClass('uk-active');
                }
            });
        });

    })();

});