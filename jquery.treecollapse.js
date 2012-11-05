/**
 * treeCollapse.js
 *
 * Creates a Collapsable tree out of nested UL's
 *
 * @Author Anthony Porthouse <admin@port3m5.com>
 */
(function($) {
    "use strict";

    var methods = {
        init: function(options) {
            var settings = $.extend({
            }, options);

            return this.each(function() {
                if(this.nodeName.toLowerCase() !== "ul") {
                    $.error('treeCollapse Needs to be attached to an ul');
                }

                $(this).addClass('tree-super-parent');

                var anchor = $('<a href="#" class="tree-arrow">#</a>');
                anchor.on('click.treeCollapse', methods.toggleCollapse);

                $(this).find('li > ul').parent().addClass('tree-parent').prepend(anchor);

                $(this).find('ul').each(function(i) {
                    $(this).addClass('tree-collapsable').hide();

                });
            });

        },
        toggleCollapse: function(e) {
            e.preventDefault();
            $(this).toggleClass('tree-toggled').siblings('.tree-collapsable').slideToggle();
        }
    }

    $.fn.treeCollapse = function(method) {
        if( methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if( typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('jQuery treeCollapse has no method ' + method);
        }
    };
})(jQuery);