'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var flexSpec = require('./flex-spec');
var Declaration = require('../declaration');

var FlexShrink = function (_Declaration) {
    _inherits(FlexShrink, _Declaration);

    function FlexShrink() {
        _classCallCheck(this, FlexShrink);

        return _possibleConstructorReturn(this, _Declaration.apply(this, arguments));
    }

    /**
     * Return property name by final spec
     */
    FlexShrink.prototype.normalize = function normalize() {
        return 'flex-shrink';
    };

    /**
     * Return flex property for 2012 spec
     */


    FlexShrink.prototype.prefixed = function prefixed(prop, prefix) {
        var spec = void 0;

        var _flexSpec = flexSpec(prefix);

        spec = _flexSpec[0];
        prefix = _flexSpec[1];

        if (spec === 2012) {
            return prefix + 'flex-negative';
        } else {
            return _Declaration.prototype.prefixed.call(this, prop, prefix);
        }
    };

    /**
     * Ignore 2009 spec and use flex property for 2012
     */


    FlexShrink.prototype.set = function set(decl, prefix) {
        var spec = void 0;

        var _flexSpec2 = flexSpec(prefix);

        spec = _flexSpec2[0];
        prefix = _flexSpec2[1];

        if (spec === 2012 || spec === 'final') {
            return _Declaration.prototype.set.call(this, decl, prefix);
        }
        return undefined;
    };

    return FlexShrink;
}(Declaration);

Object.defineProperty(FlexShrink, 'names', {
    enumerable: true,
    writable: true,
    value: ['flex-shrink', 'flex-negative']
});


module.exports = FlexShrink;