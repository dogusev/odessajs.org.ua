(function () {
  var DICTIONARY = {
    "Ё": "YO",
    "Й": "I",
    "Ц": "TS",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "Щ": "SCH",
    "З": "Z",
    "Х": "H",
    "Ъ": "",
    "ё": "yo",
    "й": "i",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "ъ": "",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "a",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "Э": "E",
    "ф": "f",
    "ы": "i",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "э": "e",
    "Я": "Ya",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "",
    "Б": "B",
    "Ю": "YU",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "ь": "",
    "б": "b",
    "ю": "yu"
  };

  function transliterate(word) {
    return word.split('').map(function (char) {
      return DICTIONARY[char] || char;
    }).join("");
  }

  $('.speaker').each(function (_index, _element) {
    var element = $(_element);
    var name = element.find('.name').text();
    var speak = element.find('.speak').text();
    var more = element.find('.more').text();
    var modal = $(document.createElement('div'));
    var transliteratedName = transliterate(name).replace(/\s/g, '-');

    element.attr('data-remodal-target', transliteratedName);

    modal
      .addClass('remodal')
      .attr('data-remodal-id', transliteratedName)
      .append($(document.createElement('button')).attr('data-remodal-action', 'close').addClass('remodal-close'))
      .append($(document.createElement('h2')).text(name))
      .append($(document.createElement('br')))
      .append($(document.createElement('h3')).text(speak))
      .append($(document.createElement('br')))
      .append($(document.createElement('p')).text(more));

    $('body').append(modal);
  });
})();
