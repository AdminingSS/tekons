$(document).ready(function () {

    (() => {
        const $videoAccordion = $('.tm-takeon-add');
        const $borderElem = $videoAccordion.find('.uk-accordion-title');
        $videoAccordion.on('show', function () {
            $borderElem.css("border-radius", "3px 3px 0 0")
        });
        UIkit.util.on($videoAccordion, 'hide', function () {
            $borderElem.css("border-radius", "3px")
        });
    })();

    (() => {

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

    (() => {
        const $selects = $('.tm-select .select-wrapper');

        $selects.each(function () {
            const $selectWrapper = $(this);
            const $select = $selectWrapper.find('.select-trigger');
            const $dropdown = $selectWrapper.find('.select-dropdown');
            const $input = $selectWrapper.find('input');

            $dropdown.on('click', '.select-option', event, function () {
                const $target = $(event.target);

                if (!$target.attr('data-value')) return false;

                const optionText = $target.text();

                $select.text(optionText);
                $input.val($target.attr('data-value'));

                UIkit.dropdown($dropdown).hide();
            });
        })
    })();

});