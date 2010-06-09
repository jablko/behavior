jQuery(function ($)
  {
    $('.csv').replaceWith(function ()
      {
        return ['<table>',
            '<tbody>',
              $(this).text()
                .replace(/^/gm, '<tr><td>')
                .replace(/$/gm, '</td></tr>')
                .replace(/,/g, '</td><td>'),
            '</tbody>',
          '</table>'].join('');
      });
  });
