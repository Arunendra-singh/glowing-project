jQuery("document").ready(function() {
    jQuery("#submit-ya_wim").on("click", function() {
        wpNavMenu.registerChange();
        b()
    });

    function a() {
        jQuery("#update-nav-menu .menu-item-yawp_wim p.description").not("p.field-move").hide();
        $message = jQuery("p.msg-yawp_sim").html();
        jQuery("#update-nav-menu .menu-item-yawp_wim p.link-to-original").html($message)
    }

    function b() {
        if (0 === jQuery("#menu-to-edit").length) {
            return false
        }
        var d = jQuery(".yawp_wimdiv"),
            c = {},
            f = d.find('li input[type="checkbox"]:checked'),
            e = /menu-item\[([^\]]*)/;
        processMethod = wpNavMenu.addMenuItemToBottom;
        if (!f.length) {
            return false
        }
        d.find(".spinner").show();
        jQuery(f).each(function() {
            var h = jQuery(this),
                g = e.exec(h.attr("name")),
                i = "undefined" == typeof g[1] ? 0 : parseInt(g[1], 10);
            if (this.className && -1 != this.className.indexOf("add-to-top")) {
                processMethod = wpNavMenu.addMenuItemToTop
            }
            c[i] = h.closest("li").getItemData("add-menu-item", i)
        });
        wpNavMenu.addItemToMenu(c, processMethod, function() {
            f.removeAttr("checked");
            d.find(".spinner").hide();
            a()
        })
    }
    a()
});
