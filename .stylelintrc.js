const propertyGroups = require('stylelint-config-recess-order/groups')

module.exports = {
  plugins: [
    "stylelint-at-rule-no-children"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order"
  ],
  rules: {
    'string-no-newline': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-property-value-no-unknown': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'color-named': "never",
    'number-max-precision': 2,
    'unit-disallowed-list': [
      "of"
    ],
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'declaration-no-important': [
      true,
      {
        severity: "warning"
      }
    ],
    'declaration-block-single-line-max-declarations': 0,
    'declaration-empty-line-before': null,
    'max-nesting-depth': 5,
    'color-hex-length': "long",
    'font-family-name-quotes': "always-where-recommended",
    'font-weight-notation': "numeric",
    'function-url-quotes': "always",
    'value-keyword-case': "lower",
    'selector-attribute-quotes': "always",
    'selector-pseudo-element-colon-notation': "double",
    'selector-type-case': "lower",
    'rule-empty-line-before': [
      "always",
      {
        except: [
          "after-single-line-comment"
        ]
      }
    ],
    'at-rule-empty-line-before': [
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
    'comment-empty-line-before': [
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
    'comment-whitespace-inside': "always",
    'selector-class-pattern': "^[A-Za-z]+$",
    'aditayvm/at-rule-no-children': [
      {
        ignore: [
          "mixin",
          "if",
          "else",
          "include",
          "media",
          "each"
        ]
      }
    ],
    'order/properties-order': [propertyGroups.map((group) => ({
			...group,
			emptyLineBefore: 'always',
			noEmptyLineBetween: true,
		}))],
  }
}