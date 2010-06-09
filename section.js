jQuery(function ($)
  {
    $(':header').each(function ()
      {
        var selector = [];
        for (var i = 1; i <= this.tagName.slice(-1); i++)
        {
          selector.push('h' + i);
        }

        $(this).nextUntil(selector.join(', '))
          .andSelf()
          .wrapAll('<section/>');
      });
  });
