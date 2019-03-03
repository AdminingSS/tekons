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

    (()=> {
        const $uploadFile = $('.upload-file');
        const $uploadImg = $('.upload-img');
        const $uploadVideo = $('.upload-video');
        const $buttonReset = $('.button-reset-form');

        $uploadFile.on('change', function () {
            if(!$uploadImg.hasClass('uk-hidden')) $uploadImg.addClass('uk-hidden');
            if($uploadVideo.hasClass('uk-hidden')) $uploadVideo.removeClass('uk-hidden');
        });

        $buttonReset.on('click', function () {
            if($uploadImg.hasClass('uk-hidden')) $uploadImg.removeClass('uk-hidden');
            if(!$uploadVideo.hasClass('uk-hidden')) $uploadVideo.addClass('uk-hidden');
        });


    })();

    (()=> {
        const $editableForms = $('.tm-editable');

        $editableForms.each(function () {
            const $commentField = $(this).find('textarea.tm-comment-box');
            const $breakdownList = $(this).find('.tm-text-box ol');
            const $breakdownInput = $(this).find('.tm-text-box-edit input');
            const baseListLength = $breakdownList.find('li').length;
            const $buttonReset = $(this).find('.button-reset-form');


            $commentField.on('change', function () {
                const $currentElem = $(this);
                const text = $currentElem.val();

                $commentField.each(function () {
                    if($currentElem !== $(this)) {
                        $(this).val(text);
                    }
                });
            });

            $breakdownInput.on('change', function () {
                const $currentElem = $(this);
                const text = $currentElem.val();
                const currentListLength = $breakdownList.find('li').length;

                if(currentListLength === baseListLength) {
                    if (text === '') return;
                    $breakdownList.append($("<li>").text(text));
                }
                else {
                    if (text === '') {
                        $breakdownList.find('li').last().remove();
                        return;
                    }
                    $breakdownList.find('li').last().text(text);
                }

            });

            $buttonReset.on('click', function () {
                const currentListLength = $breakdownList.find('li').length;

                if(currentListLength !== baseListLength) {
                    $breakdownList.find('li').last().remove();
                }
            });
        });

    })();
});