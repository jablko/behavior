jQuery(function ($)
  {
    $(':header')
      .each(function ()
        {
          var selector = [];
          for (var level = 1; level <= this.tagName.slice(-1); level++)
          {
            selector.push('h' + level);
            selector.push(':has(h' + level + ')');
          }

          $(this).nextUntil(selector.join(', '))
            .andSelf()
            .wrapAll('<section id="' + $(this).attr('id') + '"/>');
        })
      .removeAttr('id');
  });
