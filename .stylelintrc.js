const propertyGroups = require('stylelint-config-recess-order/groups')

module.exports = {
  // какие плагины используем
  plugins: [],
  // какие плагины будем расширять
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order" // плагин для сортровки свойств по определенным группам
  ],
  rules: {
    'string-no-newline': true, // запрещаем некорректные переносы строк
    'font-family-no-missing-generic-family-keyword': true, // только валидные свойства в семействе шрифтов
    'font-family-no-duplicate-names': true, // запрещаем повторяющиеся имена в семействе шрифтов
    'function-calc-no-unspaced-operator': true, // в функции calc перед и после оператора должны быть пробелы
    'function-linear-gradient-no-nonstandard-direction': true, // запрещаем нестандартные направления градиентов
    'unit-no-unknown': true, // запрещаем неизвестные единицы измерения
    'property-no-unknown': true, // запрещаем неизвестные свойства
    'declaration-block-no-duplicate-properties': true, // запрещаем одинаковые свойства в рамках одного селектора
    'declaration-block-no-shorthand-property-overrides': true, // запрещаем сокращенные свойства, которые переопределяют полное свойство
    'block-no-empty': true, // зарпрещаем пустые селекторы
    'comment-no-empty': true, // запрещаем пустые комментарии
    'selector-pseudo-class-no-unknown': true, // запрещаем неизвестные псевдоклассы
    'selector-pseudo-element-no-unknown': true, // запрещаем неизвестные псевдоэлементы
    'selector-type-no-unknown': true, // запрещаем неизвестные типы селекторов
    'no-duplicate-selectors': true, // запрещаем повторяющиеся селекторы
    'no-empty-source': true, // запрещаем пустые файлы со стилями
    'no-invalid-double-slash-comments': true, // запрещаем комментарии с двойным слэшем
    'color-named': "never", // цвета никогда не должны быть явно указанными (только переменные, никаких black, white, rgb, rgba, hex и т.д)
    'number-max-precision': 2, // ограничиваем количество десятичных знаков двумя разрядами
    'shorthand-property-no-redundant-values': true, // запрещаем избыточные значения в свойствах, где можно сделать запись короче
    'value-no-vendor-prefix': true, // запрещаем префиксы для значений свойств
    'declaration-no-important': [ // подсвечиваем использование правила !important
      true,
      {
        severity: "warning"
      }
    ],
    'declaration-block-single-line-max-declarations': 1, // ограничиваем количество объявлений свойств в одной строке
    'declaration-empty-line-before': null, // пустая строка перед очередным свойством (отключено, чтобы не было конфликтов с плагином для сортировки свойств)
    'max-nesting-depth': 5, // ограничиваем глубину вложенности
    'color-hex-length': "long", // разрешаем только длинные hex-значения цветов
    'font-family-name-quotes': "always-where-recommended", // используем кавычки в названиях шрифтов там, где это рекомендуемо
    'font-weight-notation': "numeric", // разрешаем использовать только численные значения для толщины шрифта
    'function-url-quotes': "always", // в функции url адрес всегда должен быть в кавычках
    'value-keyword-case': "lower", // разрешаем только нижний регистр для значений
    'selector-attribute-quotes': "always", // для селекторов с атрибутами всегда ставить кавычки у атрибута
    'selector-pseudo-element-colon-notation': "double", // разрешаем только (::) для псевдоэлементов
    'selector-type-case': "lower", // разрешаем только нижний регистр для свойств
    'rule-empty-line-before': [ // перед новым селектором должна быть пустая строка (после однострочного комментария отключаем данные требование)
      "always",
      {
        except: [
          "after-single-line-comment"
        ]
      }
    ],
    'at-rule-empty-line-before': [ // пустая строка перед правилами, начинающимися с @ 
      "always",
      {
        except: [
          "blockless-after-blockless",
          "first-nested"
        ],
        ignore: [
          "after-comment"
        ]
      }
    ],
    'comment-empty-line-before': [ // требуем пустую строку перед комментарием
      "always",
      {
        except: [
          "first-nested"
        ],
        ignore: [
          "after-comment",
          "stylelint-commands"
        ]
      }
    ],
    'comment-whitespace-inside': "always", // требуем пробелы внутри комментария
    'selector-class-pattern': "^[A-Za-z]+$", // регулярка, позволяющая использовать заглавные буквы в названии селектора

    // всегда добавляем пустую строку между свойствами разных групп
    'order/properties-order': [propertyGroups.map((group) => ({
			...group,
			emptyLineBefore: 'always',
			noEmptyLineBetween: true,
		}))],
  }
}