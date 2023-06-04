"use strict";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const { rules } = require("../protect-me-from-my-stupidity.js");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports =
{
	"plugins" :
	[
		"vue"
	],

	"rules" :
	{
		"vue/comment-directive"                         : "error",
		"vue/jsx-uses-vars"                             : "error",
		"vue/no-async-in-computed-properties"           : "error",
		"vue/no-dupe-keys"                              : "error",
		"vue/no-duplicate-attributes"                   : ["error", { "allowCoexistClass" : true, "allowCoexistStyle" : true }],
		"vue/no-parsing-error"                          : "error",
		"vue/no-reserved-keys"                          : "error",
		"vue/no-shared-component-data"                  : "error",
		"vue/no-side-effects-in-computed-properties"    : "error",
		"vue/no-template-key"                           : "error",
		"vue/no-textarea-mustache"                      : "error",
		"vue/no-unused-components"                      : "error",
		"vue/no-unused-vars"                            : "error",
		"vue/no-use-v-if-with-v-for"                    : "error",
		"vue/require-component-is"                      : "error",
		"vue/require-prop-type-constructor"             : "error",
		"vue/require-render-return"                     : "error",
		"vue/require-v-for-key"                         : "error",
		"vue/require-valid-default-prop"                : "error",
		"vue/return-in-computed-property"               : "error",
		"vue/use-v-on-exact"                            : "error",
		"vue/valid-template-root"                       : "error",
		"vue/valid-v-bind"                              : "error",
		"vue/valid-v-cloak"                             : "error",
		"vue/valid-v-else-if"                           : "error",
		"vue/valid-v-else"                              : "error",
		"vue/valid-v-for"                               : "error",
		"vue/valid-v-html"                              : "error",
		"vue/valid-v-if"                                : "error",
		"vue/valid-v-model"                             : "error",
		"vue/valid-v-on"                                : "error",
		"vue/valid-v-once"                              : "error",
		"vue/valid-v-pre"                               : "error",
		"vue/valid-v-show"                              : "error",
		"vue/valid-v-text"                              : "error",
		"vue/attribute-hyphenation"                     : "error",
		"vue/html-closing-bracket-newline"              : "off",
		"vue/html-closing-bracket-spacing"              : "error",
		"vue/html-end-tags"                             : "error",
		"vue/html-indent"                               : ["error", "tab"],
		"vue/html-quotes"                               : ["error", "double"],
		"vue/html-self-closing"                         : ["error", { "html" : { "void" : "always" } }],
		"vue/max-attributes-per-line"                   : "off",
		"vue/multiline-html-element-content-newline"    : "error",
		"vue/mustache-interpolation-spacing"            : "error",
		"vue/no-multi-spaces"                           : ["error", { "ignoreProperties" : true }],
		"vue/no-spaces-around-equal-signs-in-attribute" : "error",
		"vue/no-template-shadow"                        : "error",
		"vue/prop-name-casing"                          : ["error", "camelCase"],
		"vue/require-default-prop"                      : "error",
		"vue/require-prop-types"                        : "error",
		"vue/singleline-html-element-content-newline"   : "error",
		"vue/v-bind-style"                              : ["error", "shorthand"],
		"vue/v-on-style"                                : ["error", "shorthand"],
		"vue/attributes-order"                          : "off",
		"vue/no-v-html"                                 : "off",
		"vue/order-in-components"                       : "off",
		"vue/this-in-template"                          : "error",
		"vue/array-bracket-spacing"                     : rules["array-bracket-spacing"],
		"vue/arrow-spacing"                             : rules["arrow-spacing"],
		"vue/block-spacing"                             : rules["block-spacing"],
		"vue/brace-style"                               : rules["brace-style"],
		"vue/camelcase"                                 : rules["camelcase"],
		"vue/comma-dangle"                              : rules["comma-dangle"],
		"vue/component-name-in-template-casing"         : ["error", "kebab-case"],
		"vue/dot-location"                              : rules["dot-location"],
		"vue/eqeqeq"                                    : rules["eqeqeq"],
		"vue/key-spacing"                               : rules["key-spacing"],
		"vue/keyword-spacing"                           : rules["keyword-spacing"],
		"vue/match-component-file-name"                 : ["error", { "extensions" : [".vue"], "shouldMatchCase" : true }],
		"vue/no-boolean-default"                        : "error",
		"vue/no-deprecated-scope-attribute"             : "error",
		"vue/no-empty-pattern"                          : rules["no-empty-pattern"],
		"vue/no-restricted-syntax"                      : "off",
		"vue/object-curly-spacing"                      : rules["object-curly-spacing"],
		"vue/require-direct-export"                     : "error",
		"vue/script-indent"                             : ["error", "tab", { "baseIndent" : 1, "switchCase" : 1 }],
		"vue/space-infix-ops"                           : rules["space-infix-ops"],
		"vue/space-unary-ops"                           : rules["space-unary-ops"],
		"vue/v-slot-style"                              : "error",
		"vue/valid-v-slot"                              : "error",
		"vue/component-definition-name-casing"          : ["error", "kebab-case"],
		"vue/component-tags-order"                      : ["error", { "order" : ["template", "script", "style"] }],
		"vue/max-len"                                   : "off",
		"vue/no-deprecated-slot-attribute"              : "error",
		"vue/no-deprecated-slot-scope-attribute"        : "error",
		"vue/no-irregular-whitespace"                   : "error",
		"vue/no-reserved-component-names"               : "error",
		"vue/no-static-inline-styles"                   : "off",
		"vue/no-unsupported-features"                   : "off",
		"vue/require-name-property"                     : "error",
		"vue/static-class-names-order"                  : "off",
		"vue/valid-v-bind-sync"                         : "error",
		"vue/sort-keys"                                 : rules["sort-keys"],
		"vue/padding-line-between-blocks"               : "error",
		"vue/array-bracket-newline"                     : rules["array-bracket-newline"],
		"vue/block-tag-newline"                         : ["error", { "singleline" : "always", "multiline" : "always", "maxEmptyLines" : 1 }],
		"vue/comma-spacing"                             : rules["comma-spacing"],
		"vue/comma-style"                               : rules["comma-style"],
		"vue/custom-event-name-casing"                  : "error",
		"vue/dot-notation"                              : rules["dot-notation"],
		"vue/func-call-spacing"                         : rules["func-call-spacing"],
		"vue/html-comment-content-newline"              : ["error", { "singleline" : "never", "multiline" : "always" }],
		"vue/html-comment-content-spacing"              : "error",
		"vue/html-comment-indent"                       : ["error", "tab"],
		"vue/no-arrow-functions-in-watch"               : "error",
		"vue/no-bare-strings-in-template"               : "off",
		"vue/no-custom-modifiers-on-v-model"            : "error",
		"vue/no-deprecated-data-object-declaration"     : "off",
		"vue/no-deprecated-destroyed-lifecycle"         : "off",
		"vue/no-deprecated-dollar-listeners-api"        : "off",
		"vue/no-deprecated-dollar-scopedslots-api"      : "off",
		"vue/no-deprecated-events-api"                  : "off",
		"vue/no-deprecated-filter"                      : "off",
		"vue/no-deprecated-functional-template"         : "off",
		"vue/no-deprecated-html-element-is"             : "off",
		"vue/no-deprecated-inline-template"             : "off",
		"vue/no-deprecated-props-default-this"          : "off",
		"vue/no-deprecated-v-bind-sync"                 : "off",
		"vue/no-deprecated-v-on-native-modifier"        : "off",
		"vue/no-deprecated-v-on-number-modifiers"       : "off",
		"vue/no-deprecated-vue-config-keycodes"         : "off",
		"vue/no-dupe-v-else-if"                         : "error",
		"vue/no-duplicate-attr-inheritance"             : "error",
		"vue/no-empty-component-block"                  : "error",
		"vue/no-extra-parens"                           : rules["no-extra-parens"],
		"vue/no-lifecycle-after-await"                  : "error",
		"vue/no-lone-template"                          : "error",
		"vue/no-multiple-objects-in-class"              : "error",
		"vue/no-multiple-slot-args"                     : "error",
		"vue/no-multiple-template-root"                 : "error",
		"vue/no-mutating-props"                         : "error",
		"vue/no-potential-component-option-typo"        : "off",
		"vue/no-ref-as-operand"                         : "error",
		"vue/no-restricted-component-options"           : "off",
		"vue/no-restricted-static-attribute"            : "off",
		"vue/no-restricted-v-bind"                      : "off",
		"vue/no-setup-props-destructure"                : "error",
		"vue/no-sparse-arrays"                          : rules["no-sparse-arrays"],
		"vue/no-template-target-blank"                  : "error",
		"vue/no-unused-properties"                      : ["error", { "groups" : ["props", "data", "computed", "methods"] }],
		"vue/no-useless-concat"                         : rules["no-useless-concat"],
		"vue/no-useless-mustaches"                      : "error",
		"vue/no-useless-v-bind"                         : "error",
		"vue/no-v-for-template-key-on-child"            : "off",
		"vue/no-v-for-template-key"                     : "error",
		"vue/no-v-model-argument"                       : "off",
		"vue/no-watch-after-await"                      : "error",
		"vue/object-curly-newline"                      : rules["object-curly-newline"],
		"vue/object-property-newline"                   : rules["object-property-newline"],
		"vue/one-component-per-file"                    : "error",
		"vue/operator-linebreak"                        : rules["operator-linebreak"],
		"vue/prefer-template"                           : rules["prefer-template"],
		"vue/require-explicit-emits"                    : "off",
		"vue/require-slots-as-functions"                : "off",
		"vue/require-toggle-inside-transition"          : "error",
		"vue/return-in-emits-validator"                 : "error",
		"vue/space-in-parens"                           : rules["space-in-parens"],
		"vue/template-curly-spacing"                    : rules["template-curly-spacing"],
		"vue/v-for-delimiter-style"                     : ["error", "in"],
		"vue/valid-v-is"                                : "error",
		"vue/html-button-has-type"                      : "error",
		"vue/new-line-between-multi-line-property"      : "error",
		"vue/next-tick-style"                           : ["error", "promise"],
		"vue/no-constant-condition"                     : rules["no-constant-condition"],
		"vue/no-restricted-block"                       : "off",
		"vue/no-restricted-call-after-await"            : "off",
		"vue/no-restricted-custom-event"                : "off",
		"vue/no-restricted-props"                       : "off",
		"vue/no-unused-refs"                            : "error",
		"vue/v-on-event-hyphenation"                    : ["error", "always", { "autofix" : false }],
		"vue/valid-next-tick"                           : "error",
		"vue/block-lang"                                : "off",
		"vue/component-api-style"                       : ["error", ["options", "script-setup"]],
		"vue/component-options-name-casing"             : ["error", "kebab-case"],
		"vue/first-attribute-linebreak"                 : "off",
		"vue/multi-word-component-names"                : "off",
		"vue/no-child-content"                          : "error",
		"vue/no-computed-properties-in-data"            : "error",
		"vue/no-deprecated-router-link-tag-prop"        : "off",
		"vue/no-deprecated-v-is"                        : "off",
		"vue/no-export-in-script-setup"                 : "error",
		"vue/no-expose-after-await"                     : "error",
		"vue/no-loss-of-precision"                      : rules["no-loss-of-precision"],
		"vue/no-reserved-props"                         : "error",
		"vue/no-restricted-class"                       : "off",
		"vue/no-this-in-before-route-enter"             : "error",
		"vue/no-undef-properties"                       : "error",
		"vue/no-use-computed-property-like-method"      : "error",
		"vue/no-useless-template-attributes"            : "error",
		"vue/no-v-text"                                 : "error",
		"vue/prefer-separate-static-class"              : "error",
		"vue/require-emit-validator"                    : "off",
		"vue/require-expose"                            : "off",
		"vue/valid-define-emits"                        : "error",
		"vue/valid-define-props"                        : "error",
		"vue/valid-v-memo"                              : "error",
		"vue/no-undef-components"                       : "off",
		"vue/no-v-text-v-html-on-component"             : "error",
		"vue/object-shorthand"                          : rules["object-shorthand"],
		"vue/prefer-import-from-vue"                    : "error",
		"vue/prefer-true-attribute-shorthand"           : "error",
		"vue/quote-props"                               : rules["quote-props"],
		"vue/match-component-import-name"               : "error",
		"vue/define-macros-order"                       : "off",
		"vue/no-restricted-html-elements"               : "off",
		"vue/prefer-prop-type-boolean-first"            : "off",
		"vue/valid-attribute-name"                      : "error",
		"vue/valid-model-definition"                    : "error",
		"vue/define-emits-declaration"                  : "off",
		"vue/define-props-declaration"                  : "off",
		"vue/multiline-ternary"                         : rules["multiline-ternary"],
		"vue/no-ref-object-destructure"                 : "error",
		"vue/no-required-prop-with-default"             : "error",
		"vue/padding-line-between-tags"                 : "off",
		"vue/require-prop-comment"                      : "off",
		"vue/v-on-handler-style"                        : ["error", ["method", "inline"]],
		"vue/array-element-newline"                     : rules["array-element-newline"],
		"vue/padding-lines-in-component-definition"     : "off",
		"vue/no-root-v-if"                              : "off",
		"vue/prefer-define-options"                     : "error",
		"vue/valid-define-options"                      : "error"
	},

	"overrides" :
	[
		{
			"files" : ["**/*.vue"],

			"rules" :
			{
				"indent" : "off"
			}
		}
	]
};
