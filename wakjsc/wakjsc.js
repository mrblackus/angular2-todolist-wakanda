(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WakJSC"] = factory();
	else
		root["WakJSC"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var wakjsc_1 = __webpack_require__(192);
	var browser_http_client_1 = __webpack_require__(214);
	wakjsc_1.default.HttpClient = browser_http_client_1.default;
	var wakjsc = new wakjsc_1.default();
	// export default wakjsc;
	module.exports = wakjsc;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(3);
	
	__webpack_require__(190);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(37);
	__webpack_require__(43);
	__webpack_require__(45);
	__webpack_require__(47);
	__webpack_require__(49);
	__webpack_require__(51);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(123);
	__webpack_require__(125);
	__webpack_require__(127);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(146);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(189);
	module.exports = __webpack_require__(8);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(5)
	  , $export           = __webpack_require__(6)
	  , DESCRIPTORS       = __webpack_require__(11)
	  , createDesc        = __webpack_require__(10)
	  , html              = __webpack_require__(17)
	  , cel               = __webpack_require__(18)
	  , has               = __webpack_require__(20)
	  , cof               = __webpack_require__(21)
	  , invoke            = __webpack_require__(22)
	  , fails             = __webpack_require__(12)
	  , anObject          = __webpack_require__(23)
	  , aFunction         = __webpack_require__(16)
	  , isObject          = __webpack_require__(19)
	  , toObject          = __webpack_require__(24)
	  , toIObject         = __webpack_require__(26)
	  , toInteger         = __webpack_require__(28)
	  , toIndex           = __webpack_require__(29)
	  , toLength          = __webpack_require__(30)
	  , IObject           = __webpack_require__(27)
	  , IE_PROTO          = __webpack_require__(14)('__proto__')
	  , createArrayMethod = __webpack_require__(31)
	  , arrayIndexOf      = __webpack_require__(36)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(33)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , hide      = __webpack_require__(9)
	  , redefine  = __webpack_require__(13)
	  , ctx       = __webpack_require__(15)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(5)
	  , createDesc = __webpack_require__(10);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(7)
	  , hide      = __webpack_require__(9)
	  , SRC       = __webpack_require__(14)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(8).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(25);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(25);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(28)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(28)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(15)
	  , IObject  = __webpack_require__(27)
	  , toObject = __webpack_require__(24)
	  , toLength = __webpack_require__(30)
	  , asc      = __webpack_require__(32);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(19)
	  , isArray  = __webpack_require__(33)
	  , SPECIES  = __webpack_require__(34)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(21);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(35)('wks')
	  , uid    = __webpack_require__(14)
	  , Symbol = __webpack_require__(7).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(26)
	  , toLength  = __webpack_require__(30)
	  , toIndex   = __webpack_require__(29);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(5)
	  , global         = __webpack_require__(7)
	  , has            = __webpack_require__(20)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(13)
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(38)
	  , uid            = __webpack_require__(14)
	  , wks            = __webpack_require__(34)
	  , keyOf          = __webpack_require__(39)
	  , $names         = __webpack_require__(40)
	  , enumKeys       = __webpack_require__(41)
	  , isArray        = __webpack_require__(33)
	  , anObject       = __webpack_require__(23)
	  , toIObject      = __webpack_require__(26)
	  , createDesc     = __webpack_require__(10)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(42)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(5).setDesc
	  , has = __webpack_require__(20)
	  , TAG = __webpack_require__(34)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(5)
	  , toIObject = __webpack_require__(26);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(26)
	  , getNames  = __webpack_require__(5).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(5);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(44)});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(5)
	  , toObject = __webpack_require__(24)
	  , IObject  = __webpack_require__(27);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(12)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {is: __webpack_require__(46)});

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(48).set});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(5).getDesc
	  , isObject = __webpack_require__(19)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(50)
	  , test    = {};
	test[__webpack_require__(34)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(13)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(21)
	  , TAG = __webpack_require__(34)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(19);
	
	__webpack_require__(52)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(26);
	
	__webpack_require__(52)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(24);
	
	__webpack_require__(52)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(24);
	
	__webpack_require__(52)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(52)('getOwnPropertyNames', function(){
	  return __webpack_require__(40).get;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(5).setDesc
	  , createDesc = __webpack_require__(10)
	  , has        = __webpack_require__(20)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(11) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(5)
	  , isObject      = __webpack_require__(19)
	  , HAS_INSTANCE  = __webpack_require__(34)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(5)
	  , global      = __webpack_require__(7)
	  , has         = __webpack_require__(20)
	  , cof         = __webpack_require__(21)
	  , toPrimitive = __webpack_require__(65)
	  , fails       = __webpack_require__(12)
	  , $trim       = __webpack_require__(66).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(11) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(13)(global, NUMBER, $Number);
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	  , defined = __webpack_require__(25)
	  , fails   = __webpack_require__(12)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(6)
	  , _isFinite = __webpack_require__(7).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(70)});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(19)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(6)
	  , isInteger = __webpack_require__(70)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(6)
	  , log1p   = __webpack_require__(78)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 78 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(6);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(6)
	  , sign    = __webpack_require__(82);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(6)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(86)});

/***/ },
/* 86 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(6)
	  , sign      = __webpack_require__(82)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(6)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(6)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(78)});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {sign: __webpack_require__(82)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(6)
	  , expm1   = __webpack_require__(86)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(6)
	  , expm1   = __webpack_require__(86)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(6)
	  , toIndex        = __webpack_require__(29)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(6)
	  , toIObject = __webpack_require__(26)
	  , toLength  = __webpack_require__(30);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(66)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(101)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(102)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(28)
	  , defined   = __webpack_require__(25);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(42)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(13)
	  , hide           = __webpack_require__(9)
	  , has            = __webpack_require__(20)
	  , Iterators      = __webpack_require__(103)
	  , $iterCreate    = __webpack_require__(104)
	  , setToStringTag = __webpack_require__(38)
	  , getProto       = __webpack_require__(5).getProto
	  , ITERATOR       = __webpack_require__(34)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(5)
	  , descriptor     = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(38)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(34)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $at     = __webpack_require__(101)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(6)
	  , toLength  = __webpack_require__(30)
	  , context   = __webpack_require__(107)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(109)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(108)
	  , defined  = __webpack_require__(25);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(19)
	  , cof      = __webpack_require__(21)
	  , MATCH    = __webpack_require__(34)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(34)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(6)
	  , context  = __webpack_require__(107)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(109)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(112)
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(28)
	  , defined   = __webpack_require__(25);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(6)
	  , toLength    = __webpack_require__(30)
	  , context     = __webpack_require__(107)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(109)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(15)
	  , $export     = __webpack_require__(6)
	  , toObject    = __webpack_require__(24)
	  , call        = __webpack_require__(115)
	  , isArrayIter = __webpack_require__(116)
	  , toLength    = __webpack_require__(30)
	  , getIterFn   = __webpack_require__(117);
	$export($export.S + $export.F * !__webpack_require__(118)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(103)
	  , ITERATOR   = __webpack_require__(34)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(50)
	  , ITERATOR  = __webpack_require__(34)('iterator')
	  , Iterators = __webpack_require__(103);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(34)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(121)
	  , step             = __webpack_require__(122)
	  , Iterators        = __webpack_require__(103)
	  , toIObject        = __webpack_require__(26);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(102)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(34)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(9)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(124)('Array');

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(7)
	  , $           = __webpack_require__(5)
	  , DESCRIPTORS = __webpack_require__(11)
	  , SPECIES     = __webpack_require__(34)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(6);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(126)});
	
	__webpack_require__(121)('copyWithin');

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(24)
	  , toIndex  = __webpack_require__(29)
	  , toLength = __webpack_require__(30);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(6);
	
	$export($export.P, 'Array', {fill: __webpack_require__(128)});
	
	__webpack_require__(121)('fill');

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(24)
	  , toIndex  = __webpack_require__(29)
	  , toLength = __webpack_require__(30);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(6)
	  , $find   = __webpack_require__(31)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(121)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(6)
	  , $find   = __webpack_require__(31)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(121)(KEY);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(5)
	  , global   = __webpack_require__(7)
	  , isRegExp = __webpack_require__(108)
	  , $flags   = __webpack_require__(132)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(11) && (!CORRECT_NEW || __webpack_require__(12)(function(){
	  re2[__webpack_require__(34)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(13)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(124)('RegExp');

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(23);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(5);
	if(__webpack_require__(11) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(132)
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(135)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(9)
	  , redefine = __webpack_require__(13)
	  , fails    = __webpack_require__(12)
	  , defined  = __webpack_require__(25)
	  , wks      = __webpack_require__(34);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(135)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(135)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(135)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(5)
	  , LIBRARY    = __webpack_require__(42)
	  , global     = __webpack_require__(7)
	  , ctx        = __webpack_require__(15)
	  , classof    = __webpack_require__(50)
	  , $export    = __webpack_require__(6)
	  , isObject   = __webpack_require__(19)
	  , anObject   = __webpack_require__(23)
	  , aFunction  = __webpack_require__(16)
	  , strictNew  = __webpack_require__(140)
	  , forOf      = __webpack_require__(141)
	  , setProto   = __webpack_require__(48).set
	  , same       = __webpack_require__(46)
	  , SPECIES    = __webpack_require__(34)('species')
	  , speciesConstructor = __webpack_require__(142)
	  , asap       = __webpack_require__(143)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(11)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(145)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(38)(P, PROMISE);
	__webpack_require__(124)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(118)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(15)
	  , call        = __webpack_require__(115)
	  , isArrayIter = __webpack_require__(116)
	  , anObject    = __webpack_require__(23)
	  , toLength    = __webpack_require__(30)
	  , getIterFn   = __webpack_require__(117);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(23)
	  , aFunction = __webpack_require__(16)
	  , SPECIES   = __webpack_require__(34)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , macrotask = __webpack_require__(144).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(21)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(15)
	  , invoke             = __webpack_require__(22)
	  , html               = __webpack_require__(17)
	  , cel                = __webpack_require__(18)
	  , global             = __webpack_require__(7)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(21)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(13);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(147);
	
	// 23.1 Map Objects
	__webpack_require__(148)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(5)
	  , hide         = __webpack_require__(9)
	  , redefineAll  = __webpack_require__(145)
	  , ctx          = __webpack_require__(15)
	  , strictNew    = __webpack_require__(140)
	  , defined      = __webpack_require__(25)
	  , forOf        = __webpack_require__(141)
	  , $iterDefine  = __webpack_require__(102)
	  , step         = __webpack_require__(122)
	  , ID           = __webpack_require__(14)('id')
	  , $has         = __webpack_require__(20)
	  , isObject     = __webpack_require__(19)
	  , setSpecies   = __webpack_require__(124)
	  , DESCRIPTORS  = __webpack_require__(11)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(7)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(13)
	  , redefineAll    = __webpack_require__(145)
	  , forOf          = __webpack_require__(141)
	  , strictNew      = __webpack_require__(140)
	  , isObject       = __webpack_require__(19)
	  , fails          = __webpack_require__(12)
	  , $iterDetect    = __webpack_require__(118)
	  , setToStringTag = __webpack_require__(38);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(147);
	
	// 23.2 Set Objects
	__webpack_require__(148)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(5)
	  , redefine     = __webpack_require__(13)
	  , weak         = __webpack_require__(151)
	  , isObject     = __webpack_require__(19)
	  , has          = __webpack_require__(20)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(148)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(9)
	  , redefineAll       = __webpack_require__(145)
	  , anObject          = __webpack_require__(23)
	  , isObject          = __webpack_require__(19)
	  , strictNew         = __webpack_require__(140)
	  , forOf             = __webpack_require__(141)
	  , createArrayMethod = __webpack_require__(31)
	  , $has              = __webpack_require__(20)
	  , WEAK              = __webpack_require__(14)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(151);
	
	// 23.4 WeakSet Objects
	__webpack_require__(148)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(6)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(5)
	  , $export   = __webpack_require__(6)
	  , aFunction = __webpack_require__(16)
	  , anObject  = __webpack_require__(23)
	  , isObject  = __webpack_require__(19)
	  , bind      = Function.bind || __webpack_require__(8).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(5)
	  , $export  = __webpack_require__(6)
	  , anObject = __webpack_require__(23);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(12)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(6)
	  , getDesc  = __webpack_require__(5).getDesc
	  , anObject = __webpack_require__(23);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(6)
	  , anObject = __webpack_require__(23);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(104)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(5)
	  , has      = __webpack_require__(20)
	  , $export  = __webpack_require__(6)
	  , isObject = __webpack_require__(19)
	  , anObject = __webpack_require__(23);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(5)
	  , $export  = __webpack_require__(6)
	  , anObject = __webpack_require__(23);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(6)
	  , getProto = __webpack_require__(5).getProto
	  , anObject = __webpack_require__(23);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(6)
	  , anObject      = __webpack_require__(23)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(6);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(164)});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(5)
	  , anObject = __webpack_require__(23)
	  , Reflect  = __webpack_require__(7).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(6)
	  , anObject           = __webpack_require__(23)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(5)
	  , has        = __webpack_require__(20)
	  , $export    = __webpack_require__(6)
	  , createDesc = __webpack_require__(10)
	  , anObject   = __webpack_require__(23)
	  , isObject   = __webpack_require__(19);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(6)
	  , setProto = __webpack_require__(48);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(6)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(121)('includes');

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(6)
	  , $at     = __webpack_require__(101)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $pad    = __webpack_require__(171);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(30)
	  , repeat   = __webpack_require__(112)
	  , defined  = __webpack_require__(25);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $pad    = __webpack_require__(171);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(66)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(66)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(6)
	  , $re     = __webpack_require__(176)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(5)
	  , $export    = __webpack_require__(6)
	  , ownKeys    = __webpack_require__(164)
	  , toIObject  = __webpack_require__(26)
	  , createDesc = __webpack_require__(10);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(6)
	  , $values = __webpack_require__(179)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(5)
	  , toIObject = __webpack_require__(26)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(6)
	  , $entries = __webpack_require__(179)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(6);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(182)('Map')});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(141)
	  , classof = __webpack_require__(50);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(6);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(182)('Set')});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(5)
	  , $export = __webpack_require__(6)
	  , $ctx    = __webpack_require__(15)
	  , $Array  = __webpack_require__(8).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(7)
	  , $export    = __webpack_require__(6)
	  , invoke     = __webpack_require__(22)
	  , partial    = __webpack_require__(186)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(187)
	  , invoke    = __webpack_require__(22)
	  , aFunction = __webpack_require__(16);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	  , $task   = __webpack_require__(144);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(120);
	var global      = __webpack_require__(7)
	  , hide        = __webpack_require__(9)
	  , Iterators   = __webpack_require__(103)
	  , ITERATOR    = __webpack_require__(34)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(191)))

/***/ },
/* 191 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var catalog_business_1 = __webpack_require__(193);
	var directory_business_1 = __webpack_require__(212);
	var entity_1 = __webpack_require__(203);
	var collection_1 = __webpack_require__(210);
	var WakJSC = (function () {
	    function WakJSC(host) {
	        this._httpClient = new WakJSC.HttpClient({
	            apiPrefix: (host || '') + '/rest'
	        });
	        var directoryBusiness = new directory_business_1.default({
	            wakJSC: this
	        });
	        this.directory = {
	            login: function (username, password, duration) {
	                return directoryBusiness.login(username, password, duration);
	            },
	            logout: function () {
	                return directoryBusiness.logout();
	            },
	            currentUser: function () {
	                return directoryBusiness.currentUser();
	            },
	            currentUserBelongsTo: function (group) {
	                return directoryBusiness.currentUserBelongsTo(group);
	            }
	        };
	        this.helper = {
	            isEntity: function (object) {
	                return object instanceof entity_1.default;
	            },
	            isCollection: function (object) {
	                return object instanceof collection_1.default;
	            }
	        };
	    }
	    WakJSC.prototype.getCatalog = function (dataClasses) {
	        var catalogBusiness = new catalog_business_1.default({
	            wakJSC: this
	        });
	        return catalogBusiness.get(dataClasses);
	    };
	    WakJSC.prototype.version = function () {
	        return '0.0.1';
	    };
	    return WakJSC;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WakJSC;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var catalog_service_1 = __webpack_require__(195);
	var catalog_1 = __webpack_require__(197);
	var dataclass_1 = __webpack_require__(198);
	var dataclass_business_1 = __webpack_require__(199);
	var CatalogBusiness = (function (_super) {
	    __extends(CatalogBusiness, _super);
	    function CatalogBusiness(obj) {
	        _super.call(this, obj);
	        this.service = new catalog_service_1.default({
	            wakJSC: this.wakJSC
	        });
	    }
	    CatalogBusiness.prototype.get = function (dataClasses) {
	        var _this = this;
	        return this.service.get(dataClasses).then(function (dataClassDBOArray) {
	            var dcArray = [];
	            for (var _i = 0; _i < dataClassDBOArray.length; _i++) {
	                var dcDBO = dataClassDBOArray[_i];
	                var attributes = [];
	                for (var _a = 0, _b = dcDBO.attributes; _a < _b.length; _a++) {
	                    var attr = _b[_a];
	                    switch (attr.kind) {
	                        case 'relatedEntity':
	                            attributes.push(new dataclass_1.AttributeRelated({
	                                name: attr.name,
	                                type: attr.type,
	                                kind: attr.kind
	                            }));
	                            break;
	                        case 'storage':
	                        case 'calculated':
	                        case 'alias':
	                            var readOnly = attr.readOnly || (attr.type === 'image' || attr.type === 'blob');
	                            attributes.push(new dataclass_1.Attribute({
	                                name: attr.name,
	                                type: attr.type,
	                                readOnly: readOnly,
	                                kind: attr.kind
	                            }));
	                            break;
	                        case 'relatedEntities':
	                            attributes.push(new dataclass_1.AttributeCollection({
	                                name: attr.name,
	                                type: attr.type,
	                                kind: attr.kind
	                            }));
	                            break;
	                        default:
	                            throw new Error('[WakJSC] Unhandled ' + attr.kind + ' attribute type');
	                    }
	                }
	                var methods = {
	                    entity: [],
	                    collection: [],
	                    dataClass: []
	                };
	                for (var _c = 0, _d = dcDBO.methods; _c < _d.length; _c++) {
	                    var method = _d[_c];
	                    switch (method.applyTo) {
	                        case 'entity':
	                            methods.entity.push(method.name);
	                            break;
	                        case 'entityCollection':
	                            methods.collection.push(method.name);
	                            break;
	                        case 'dataClass':
	                            methods.dataClass.push(method.name);
	                            break;
	                        default:
	                            throw new Error('Unrecognized method type');
	                    }
	                }
	                var dataClass = new dataclass_1.DataClass({
	                    name: dcDBO.name,
	                    collectionName: dcDBO.collectionName,
	                    attributes: attributes,
	                    methods: methods
	                });
	                //Binding framework methods to the dataclass
	                var dataClassBusiness = new dataclass_business_1.default({
	                    wakJSC: _this.wakJSC,
	                    dataClass: dataClass,
	                    methods: methods
	                });
	                dataClassBusiness._decorateDataClass();
	                dcArray.push(dataClass);
	            }
	            return new catalog_1.default({
	                dataClasses: dcArray
	            });
	        });
	    };
	    return CatalogBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CatalogBusiness;


/***/ },
/* 194 */
/***/ function(module, exports) {

	var AbstractBusiness = (function () {
	    function AbstractBusiness(_a) {
	        var wakJSC = _a.wakJSC;
	        this.wakJSC = wakJSC;
	    }
	    return AbstractBusiness;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AbstractBusiness;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var CatalogService = (function (_super) {
	    __extends(CatalogService, _super);
	    function CatalogService() {
	        _super.apply(this, arguments);
	    }
	    CatalogService.prototype.get = function (dataClasses) {
	        var strDataclasses = '/';
	        if (Array.isArray(dataClasses)) {
	            strDataclasses += dataClasses.join();
	        }
	        else if (typeof dataClasses === 'undefined') {
	            strDataclasses += '$all';
	        }
	        else {
	            throw new Error('Catalog.get: first parameter should be an array');
	        }
	        return this.httpClient.get({ uri: '/$catalog' + strDataclasses })
	            .then(function (res) {
	            var catalog = [];
	            var rawObj = JSON.parse(res.body);
	            for (var _i = 0, _a = rawObj.dataClasses; _i < _a.length; _i++) {
	                var d = _a[_i];
	                var attributes = [];
	                if (d.attributes) {
	                    for (var _b = 0, _c = d.attributes; _b < _c.length; _b++) {
	                        var attr = _c[_b];
	                        attributes.push({
	                            name: attr.name,
	                            kind: attr.kind,
	                            type: attr.type,
	                            readOnly: attr.readOnly
	                        });
	                    }
	                }
	                var methods = [];
	                if (d.methods) {
	                    for (var _d = 0, _e = d.methods; _d < _e.length; _d++) {
	                        var m = _e[_d];
	                        methods.push({
	                            name: m.name,
	                            applyTo: m.applyTo
	                        });
	                    }
	                }
	                catalog.push({
	                    name: d.name,
	                    collectionName: d.collectionName,
	                    attributes: attributes,
	                    methods: methods
	                });
	            }
	            return catalog;
	        });
	    };
	    return CatalogService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CatalogService;


/***/ },
/* 196 */
/***/ function(module, exports) {

	var AbstractService = (function () {
	    function AbstractService(_a) {
	        var wakJSC = _a.wakJSC;
	        this.wakJSC = wakJSC;
	        this.httpClient = wakJSC._httpClient;
	    }
	    return AbstractService;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AbstractService;


/***/ },
/* 197 */
/***/ function(module, exports) {

	var Catalog = (function () {
	    function Catalog(_a) {
	        var dataClasses = _a.dataClasses;
	        for (var _i = 0; _i < dataClasses.length; _i++) {
	            var dc = dataClasses[_i];
	            this[dc.name] = dc;
	        }
	    }
	    return Catalog;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Catalog;


/***/ },
/* 198 */
/***/ function(module, exports) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DataClass = (function () {
	    function DataClass(_a) {
	        var name = _a.name, collectionName = _a.collectionName, attributes = _a.attributes, methods = _a.methods;
	        this.name = name;
	        this.collectionName = collectionName;
	        this.attributes = attributes;
	        this.methods = methods;
	    }
	    return DataClass;
	})();
	exports.DataClass = DataClass;
	var Attribute = (function () {
	    function Attribute(_a) {
	        var name = _a.name, type = _a.type, readOnly = _a.readOnly, kind = _a.kind;
	        this.name = name;
	        this.type = type;
	        this.readOnly = readOnly === true;
	        this.kind = kind;
	    }
	    return Attribute;
	})();
	exports.Attribute = Attribute;
	var AttributeRelated = (function (_super) {
	    __extends(AttributeRelated, _super);
	    function AttributeRelated() {
	        _super.apply(this, arguments);
	    }
	    return AttributeRelated;
	})(Attribute);
	exports.AttributeRelated = AttributeRelated;
	var AttributeCollection = (function (_super) {
	    __extends(AttributeCollection, _super);
	    function AttributeCollection(_a) {
	        var name = _a.name, type = _a.type, readOnly = _a.readOnly, kind = _a.kind;
	        _super.call(this, { name: name, type: type, readOnly: readOnly, kind: kind });
	        this.entityType = type.substring(0, type.length - 10);
	    }
	    return AttributeCollection;
	})(Attribute);
	exports.AttributeCollection = AttributeCollection;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var entity_business_1 = __webpack_require__(200);
	var dataclass_service_1 = __webpack_require__(204);
	var collection_business_1 = __webpack_require__(205);
	var media_business_1 = __webpack_require__(208);
	var entity_1 = __webpack_require__(203);
	var collection_1 = __webpack_require__(210);
	var dataclass_1 = __webpack_require__(198);
	var media_1 = __webpack_require__(211);
	var const_1 = __webpack_require__(207);
	//This map stores all DataClassBusiness instances of existing dataClasses
	var _dataClassBusinessMap = new Map();
	var DataClassBusiness = (function (_super) {
	    __extends(DataClassBusiness, _super);
	    function DataClassBusiness(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass, methods = _a.methods;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClass = dataClass;
	        this.methods = methods;
	        this.service = new dataclass_service_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: dataClass
	        });
	        _dataClassBusinessMap.set(dataClass.name, this);
	        this._dataClassBusinessMap = _dataClassBusinessMap;
	    }
	    DataClassBusiness.prototype._decorateDataClass = function () {
	        //Do not forget to bind(this) to have "this" pointing on business object
	        //instead of given dataclass object
	        this.dataClass.find = this.find.bind(this);
	        this.dataClass.query = this.query.bind(this);
	        this.dataClass.create = this.create.bind(this);
	        this._addUserDefinedMethods();
	    };
	    DataClassBusiness.prototype._addUserDefinedMethods = function () {
	        var _this = this;
	        var _this = this;
	        // for (let method of this.methods.dataClass) {
	        this.methods.dataClass.forEach(function (method) {
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            _this.dataClass[method] = function () {
	                var params = Array.from(arguments);
	                return _this.callMethod(method, params);
	            };
	        });
	    };
	    DataClassBusiness.prototype.callMethod = function (methodName, parameters) {
	        return this.service.callMethod(methodName, parameters)
	            .then(function (obj) {
	            if (obj && obj.__entityModel) {
	                var business = _dataClassBusinessMap.get(obj.__entityModel);
	                if (business) {
	                    //Returned object is a collection
	                    if (typeof obj.__COUNT !== 'undefined' &&
	                        typeof obj.__ENTITIES !== 'undefined' &&
	                        typeof obj.__FIRST !== 'undefined' &&
	                        typeof obj.__SENT !== 'undefined') {
	                        return business._presentationCollectionFromDbo({
	                            dbo: obj
	                        });
	                    }
	                    else if (obj.__KEY && obj.__STAMP) {
	                        return business._presentationEntityFromDbo({
	                            dbo: obj
	                        });
	                    }
	                }
	            }
	            return obj;
	        });
	    };
	    DataClassBusiness.prototype.find = function (id, options) {
	        var _this = this;
	        var opt = options || {};
	        return this.service.find(id, opt).then(function (entity) {
	            return _this._presentationEntityFromDbo({
	                dbo: entity
	            });
	        });
	    };
	    DataClassBusiness.prototype.query = function (options) {
	        var _this = this;
	        var opt = options || {};
	        var initialSelect = opt.select;
	        if (!opt.pageSize) {
	            opt.pageSize = const_1.default.DEFAULT_PAGE_SIZE;
	        }
	        return this.service.query(opt).then(function (collection) {
	            return _this._presentationCollectionFromDbo({
	                dbo: collection,
	                pageSize: opt.pageSize,
	                initialSelect: initialSelect
	            });
	        });
	    };
	    DataClassBusiness.prototype.create = function (pojo) {
	        var entityToAttach = {};
	        for (var prop in pojo) {
	            if (pojo[prop] instanceof entity_1.default) {
	                entityToAttach[prop] = pojo[prop];
	                delete pojo[prop];
	            }
	        }
	        var entity = this._presentationEntityFromDbo({
	            dbo: pojo || {}
	        });
	        for (var prop in entityToAttach) {
	            if (Object.prototype.hasOwnProperty.call(entityToAttach, prop)) {
	                entity[prop] = entityToAttach[prop];
	            }
	        }
	        return entity;
	    };
	    DataClassBusiness.prototype._createEntity = function (_a) {
	        var key = _a.key, deferred = _a.deferred;
	        var entity = new entity_1.default({
	            key: key,
	            deferred: deferred,
	            dataClass: this.dataClass
	        });
	        var business = new entity_business_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: this.dataClass,
	            entity: entity,
	            dataClassBusiness: this
	        });
	        business._decorateEntity();
	        return entity;
	    };
	    DataClassBusiness.prototype._createCollection = function (_a) {
	        var uri = _a.uri, deferred = _a.deferred, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        var collection = new collection_1.default({
	            deferred: deferred,
	            dataClass: this.dataClass
	        });
	        var business = new collection_business_1.default({
	            wakJSC: this.wakJSC,
	            dataClass: this.dataClass,
	            dataClassBusiness: this,
	            collection: collection,
	            collectionUri: uri,
	            pageSize: pageSize,
	            initialSelect: initialSelect
	        });
	        business._decorateCollection();
	        return collection;
	    };
	    DataClassBusiness.prototype._createMedia = function (_a) {
	        var uri = _a.uri, isImage = _a.isImage, attributeName = _a.attributeName, entity = _a.entity;
	        var media = new media_1.default({ uri: uri });
	        var business = new media_business_1.default({
	            wakJSC: this.wakJSC,
	            media: media,
	            dataClassBusiness: this,
	            isImage: isImage,
	            attributeName: attributeName,
	            entity: entity
	        });
	        business._decorateMedia();
	        return media;
	    };
	    DataClassBusiness.prototype._presentationEntityFromDbo = function (_a) {
	        var dbo = _a.dbo;
	        var entity;
	        if (!dbo) {
	            entity = null;
	        }
	        if (dbo.__deferred) {
	            entity = this._createEntity({
	                key: dbo.__deferred.__KEY,
	                deferred: true
	            });
	        }
	        else {
	            entity = this._createEntity({
	                key: dbo.__KEY
	            });
	            entity._stamp = dbo.__STAMP;
	            for (var _i = 0, _b = this.dataClass.attributes; _i < _b.length; _i++) {
	                var attr = _b[_i];
	                var dboAttribute = dbo[attr.name];
	                if (dboAttribute) {
	                    if (attr instanceof dataclass_1.AttributeRelated) {
	                        //Kind of recursive call with a potententialy different instance of
	                        //DataClassBusiness
	                        var business = _dataClassBusinessMap.get(attr.type);
	                        entity[attr.name] = business._presentationEntityFromDbo({
	                            dbo: dboAttribute
	                        });
	                    }
	                    else if (attr instanceof dataclass_1.AttributeCollection) {
	                        var business = _dataClassBusinessMap.get(attr.entityType);
	                        entity[attr.name] = business._presentationCollectionFromDbo({
	                            dbo: dboAttribute
	                        });
	                    }
	                    else if (attr.type === 'image' || attr.type === 'blob') {
	                        var uri;
	                        if (dboAttribute && dboAttribute.__deferred && dboAttribute.__deferred.uri) {
	                            uri = dboAttribute.__deferred.uri;
	                        }
	                        else {
	                            uri = null;
	                        }
	                        entity[attr.name] = this._createMedia({
	                            uri: uri,
	                            isImage: attr.type === 'image',
	                            attributeName: attr.name,
	                            entity: entity
	                        });
	                    }
	                    else {
	                        entity[attr.name] = dboAttribute || null;
	                    }
	                }
	                else {
	                    //Even if the property is null, we need a media for this kind of attributes
	                    //to handle the upload part
	                    if (attr.type === 'image' || attr.type === 'blob') {
	                        entity[attr.name] = this._createMedia({
	                            uri: null,
	                            isImage: attr.type === 'image',
	                            attributeName: attr.name,
	                            entity: entity
	                        });
	                    }
	                    else {
	                        entity[attr.name] = null;
	                    }
	                }
	            }
	        }
	        return entity;
	    };
	    DataClassBusiness.prototype._presentationCollectionFromDbo = function (_a) {
	        var dbo = _a.dbo, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        var collection;
	        if (!dbo) {
	            collection = null;
	        }
	        else if (dbo.__deferred) {
	            collection = this._createCollection({
	                deferred: true,
	                uri: dbo.__deferred.uri
	            });
	        }
	        else {
	            collection = this._createCollection({
	                uri: dbo.__ENTITYSET,
	                pageSize: pageSize || dbo.__ENTITIES.length,
	                initialSelect: initialSelect
	            });
	            collection._count = dbo.__COUNT;
	            collection._first = dbo.__FIRST;
	            collection._sent = dbo.__SENT;
	            collection._pageSize = pageSize;
	            for (var _i = 0, _b = dbo.__ENTITIES; _i < _b.length; _i++) {
	                var dboEntity = _b[_i];
	                collection.entities.push(this._presentationEntityFromDbo({
	                    dbo: dboEntity
	                }));
	            }
	        }
	        return collection;
	    };
	    return DataClassBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DataClassBusiness;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var entity_service_1 = __webpack_require__(201);
	var dataclass_1 = __webpack_require__(198);
	var entity_1 = __webpack_require__(203);
	var EntityBusiness = (function (_super) {
	    __extends(EntityBusiness, _super);
	    function EntityBusiness(_a) {
	        var wakJSC = _a.wakJSC, entity = _a.entity, dataClass = _a.dataClass, dataClassBusiness = _a.dataClassBusiness;
	        _super.call(this, { wakJSC: wakJSC });
	        this.entity = entity;
	        this.dataClass = dataClass;
	        this.dataClassBusiness = dataClassBusiness;
	        this.service = new entity_service_1.default({
	            wakJSC: wakJSC,
	            entity: entity,
	            dataClass: dataClass
	        });
	    }
	    EntityBusiness.prototype._decorateEntity = function () {
	        this.entity.save = this.save.bind(this);
	        this.entity.delete = this.delete.bind(this);
	        this.entity.fetch = this.fetch.bind(this);
	        this._addUserDefinedMethods();
	    };
	    EntityBusiness.prototype._addUserDefinedMethods = function () {
	        var _this = this;
	        var _this = this;
	        this.dataClassBusiness.methods.entity.forEach(function (method) {
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            _this.entity[method] = function () {
	                var params = Array.from(arguments);
	                return _this.callMethod(method, params);
	            };
	        });
	    };
	    EntityBusiness.prototype.fetch = function (options) {
	        var _this = this;
	        return this.dataClassBusiness.find(this.entity._key, options).then(function (fresherEntity) {
	            _this._refreshEntity({ fresherEntity: fresherEntity });
	            return _this.entity;
	        });
	    };
	    EntityBusiness.prototype.callMethod = function (methodName, parameters) {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Entity.' + methodName + ': can not be called on an unsaved entity');
	        }
	        return this.service.callMethod(methodName, parameters)
	            .then(function (obj) {
	            if (obj && obj.__entityModel) {
	                var business = _this.dataClassBusiness._dataClassBusinessMap.get(obj.__entityModel);
	                if (business) {
	                    //Returned object is a collection
	                    if (typeof obj.__COUNT !== 'undefined' &&
	                        typeof obj.__ENTITIES !== 'undefined' &&
	                        typeof obj.__FIRST !== 'undefined' &&
	                        typeof obj.__SENT !== 'undefined') {
	                        return business._presentationCollectionFromDbo({
	                            dbo: obj
	                        });
	                    }
	                    else if (obj.__KEY && obj.__STAMP) {
	                        return business._presentationEntityFromDbo({
	                            dbo: obj
	                        });
	                    }
	                }
	            }
	            return obj;
	        });
	    };
	    EntityBusiness.prototype.delete = function () {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Entity.delete: can not delete unsaved entity');
	        }
	        return this.service.delete().then(function () {
	            _this.entity = null;
	        });
	    };
	    EntityBusiness.prototype.save = function () {
	        var _this = this;
	        var data = {};
	        if (this.entity._key && this.entity._stamp) {
	            data.__KEY = this.entity._key;
	            data.__STAMP = this.entity._stamp;
	        }
	        for (var _i = 0, _a = this.dataClass.attributes; _i < _a.length; _i++) {
	            var attr = _a[_i];
	            var objAttr = this.entity[attr.name] || null;
	            if (attr instanceof dataclass_1.AttributeRelated) {
	                data[attr.name] = objAttr ? objAttr._key : null;
	            }
	            else if (!(attr instanceof dataclass_1.AttributeCollection) && !attr.readOnly) {
	                data[attr.name] = objAttr;
	            }
	        }
	        //If first-level related entities were already expanded, we will save the
	        //entity and ask the server to expand theses attributes on its response
	        //So, the user keeps its entities expanded
	        var expand = this._getExpandString();
	        return this.service.save(data, expand).then(function (entityDbo) {
	            var fresherEntity = _this.dataClassBusiness._presentationEntityFromDbo({
	                dbo: entityDbo
	            });
	            _this._refreshEntity({ fresherEntity: fresherEntity });
	            return _this.entity;
	        });
	    };
	    EntityBusiness.prototype._refreshEntity = function (_a) {
	        var fresherEntity = _a.fresherEntity;
	        for (var prop in fresherEntity) {
	            if (Object.prototype.hasOwnProperty.call(fresherEntity, prop)) {
	                this.entity[prop] = fresherEntity[prop];
	            }
	        }
	    };
	    EntityBusiness.prototype._getExpandString = function () {
	        var expand = '';
	        for (var _i = 0, _a = this.dataClass.attributes; _i < _a.length; _i++) {
	            var attr = _a[_i];
	            if (attr instanceof dataclass_1.AttributeRelated || attr instanceof dataclass_1.AttributeCollection) {
	                if (this.entity[attr.name] instanceof entity_1.default) {
	                    expand += attr.name + ',';
	                }
	            }
	        }
	        return expand.length > 0 ? expand.slice(0, -1) : null;
	    };
	    return EntityBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntityBusiness;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var util_1 = __webpack_require__(202);
	var EntityService = (function (_super) {
	    __extends(EntityService, _super);
	    function EntityService(_a) {
	        var wakJSC = _a.wakJSC, entity = _a.entity, dataClass = _a.dataClass;
	        _super.call(this, { wakJSC: wakJSC });
	        this.entity = entity;
	        this.dataClass = dataClass;
	    }
	    EntityService.prototype.save = function (data, expand) {
	        var expandStr = '';
	        if (expand) {
	            expandStr = '&$expand=' + expand;
	        }
	        return this.httpClient.post({
	            uri: '/' + this.dataClass.name + '?$method=update' + expandStr,
	            data: data
	        }).then(function (res) {
	            var entity = JSON.parse(res.body);
	            delete entity.__entityModel;
	            util_1.default.removeRestInfoFromEntity(entity);
	            return entity;
	        });
	    };
	    EntityService.prototype.callMethod = function (methodName, parameters) {
	        return this.httpClient.post({
	            uri: '/' + this.dataClass.name + '(' + this.entity._key + ')/' + methodName,
	            data: parameters
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            return obj.result || obj || null;
	        });
	    };
	    EntityService.prototype.delete = function () {
	        return this.httpClient.get({
	            uri: '/' + this.dataClass.name + '(' + this.entity._key + ')?$method=delete'
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (!(obj && obj.ok === true)) {
	                return Promise.reject();
	            }
	            else {
	                return true;
	            }
	        });
	    };
	    return EntityService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EntityService;


/***/ },
/* 202 */
/***/ function(module, exports) {

	var Util = (function () {
	    function Util() {
	    }
	    Util.handleOptions = function (options) {
	        if (!options) {
	            return '';
	        }
	        var select = options.select, filter = options.filter, params = options.params, pageSize = options.pageSize, start = options.start, orderBy = options.orderBy, method = options.method;
	        var ret = '?';
	        if (select) {
	            ret += '&$expand=' + select;
	        }
	        if (filter) {
	            ret += '&$filter=\"' + filter + '\"';
	        }
	        if (orderBy) {
	            ret += '&$orderby=' + orderBy;
	        }
	        if (params) {
	            if (!Array.isArray(params)) {
	                throw new Error('params option must be an array');
	            }
	            if (params.length > 0) {
	                var p = '[';
	                for (var _i = 0; _i < params.length; _i++) {
	                    var elt = params[_i];
	                    if (typeof elt === 'string') {
	                        p += '\"' + elt + '\",';
	                    }
	                    else {
	                        p += elt + ',';
	                    }
	                }
	                p = p.slice(0, -1);
	                p += ']';
	                ret += '&$params=\'' + p + '\'';
	            }
	        }
	        if (pageSize) {
	            if (!this.isInteger(pageSize)) {
	                throw new Error('pageSize option must be an integer');
	            }
	            ret += '&$limit=' + pageSize;
	        }
	        if (start) {
	            if (!this.isInteger(start)) {
	                throw new Error('start option must be an integer');
	            }
	            ret += '&$skip=' + start;
	        }
	        if (method) {
	            ret += '&$method=' + method;
	        }
	        if (ret.length > 1 && ret[1] === '&') {
	            ret = ret.replace('?&', '?');
	        }
	        return ret === '?' ? '' : ret;
	    };
	    Util.isInteger = function (n) {
	        return typeof n === 'number' && !isNaN(n) && (n % 1) === 0;
	    };
	    Util.removeRestInfoFromEntity = function (entity) {
	        for (var prop in entity) {
	            if (Object.prototype.hasOwnProperty.call(entity, prop)) {
	                var p = entity[prop];
	                if (p && p.__deferred && p.__deferred.__KEY) {
	                    delete p.__deferred.uri;
	                }
	            }
	        }
	    };
	    return Util;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Util;


/***/ },
/* 203 */
/***/ function(module, exports) {

	var Entity = (function () {
	    function Entity(_a) {
	        var key = _a.key, deferred = _a.deferred, dataClass = _a.dataClass;
	        this._key = key;
	        this._deferred = deferred === true;
	        Object.defineProperty(this, '_dataClass', {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: dataClass
	        });
	    }
	    return Entity;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Entity;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var util_1 = __webpack_require__(202);
	var DataClassService = (function (_super) {
	    __extends(DataClassService, _super);
	    function DataClassService(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClass = dataClass;
	    }
	    DataClassService.prototype.find = function (id, options) {
	        if (typeof id !== 'string' && typeof id !== 'number') {
	            throw new Error('DataClass.find: Invalid id type');
	        }
	        var optString = util_1.default.handleOptions(options);
	        return this.httpClient.get({
	            uri: '/' + this.dataClass.name + '(' + id + ')' + optString
	        })
	            .then(function (res) {
	            var entity = JSON.parse(res.body);
	            delete entity.__entityModel;
	            util_1.default.removeRestInfoFromEntity(entity);
	            return entity;
	        });
	    };
	    DataClassService.prototype.query = function (options) {
	        if (options.method && options.method.length > 0) {
	            throw new Error('DataClass.query can not have "method" option');
	        }
	        options.method = 'entityset';
	        var optString = util_1.default.handleOptions(options);
	        return this.httpClient.get({
	            uri: '/' + this.dataClass.name + optString
	        }).then(function (res) {
	            var collection = JSON.parse(res.body);
	            delete collection.__entityModel;
	            for (var _i = 0, _a = collection.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                util_1.default.removeRestInfoFromEntity(entity);
	            }
	            return collection;
	        });
	    };
	    DataClassService.prototype.callMethod = function (methodName, parameters) {
	        return this.httpClient.post({
	            uri: '/' + this.dataClass.name + '/' + methodName,
	            data: parameters
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            return obj.result || obj || null;
	        });
	    };
	    return DataClassService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DataClassService;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var collection_service_1 = __webpack_require__(206);
	var const_1 = __webpack_require__(207);
	var CollectionBusiness = (function (_super) {
	    __extends(CollectionBusiness, _super);
	    function CollectionBusiness(_a) {
	        var wakJSC = _a.wakJSC, dataClass = _a.dataClass, collection = _a.collection, dataClassBusiness = _a.dataClassBusiness, collectionUri = _a.collectionUri, pageSize = _a.pageSize, initialSelect = _a.initialSelect;
	        _super.call(this, { wakJSC: wakJSC });
	        this.collection = collection;
	        this.dataClass = dataClass;
	        this.dataClassBusiness = dataClassBusiness;
	        this.service = new collection_service_1.default({
	            wakJSC: wakJSC,
	            collection: collection,
	            dataClass: dataClass,
	            collectionUri: collectionUri
	        });
	        this.pageSize = pageSize;
	        this.initialSelect = initialSelect;
	    }
	    CollectionBusiness.prototype._decorateCollection = function () {
	        this.collection.fetch = this.fetch.bind(this);
	        this.collection.nextPage = this.nextPage.bind(this);
	        this.collection.prevPage = this.prevPage.bind(this);
	        this.collection.more = this.more.bind(this);
	        this._addUserDefinedMethods();
	    };
	    CollectionBusiness.prototype.fetch = function (options) {
	        var _this = this;
	        var opt = options || {};
	        if (!opt.pageSize) {
	            opt.pageSize = const_1.default.DEFAULT_PAGE_SIZE;
	        }
	        if (opt.select) {
	            this.initialSelect = opt.select;
	        }
	        this.pageSize = opt.pageSize;
	        return this.service.fetch(opt).then(function (collectionDbo) {
	            var fresherCollection = _this.dataClassBusiness._presentationCollectionFromDbo({
	                dbo: collectionDbo
	            });
	            _this._refreshCollection({ fresherCollection: fresherCollection });
	            return _this.collection;
	        });
	    };
	    CollectionBusiness.prototype.more = function () {
	        var _this = this;
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.more: can not call more on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first + this.collection._sent,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.service.fetch(options)
	            .then(function (dbo) {
	            _this.collection._sent += dbo.__ENTITIES.length;
	            for (var _i = 0, _a = dbo.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                _this.collection.entities.push(_this.dataClassBusiness._presentationEntityFromDbo({
	                    dbo: entity
	                }));
	            }
	            return _this.collection;
	        });
	    };
	    CollectionBusiness.prototype.nextPage = function () {
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.nextPage: can not call nextPage on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first + this.pageSize,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.fetch(options);
	    };
	    CollectionBusiness.prototype.prevPage = function () {
	        if (this.collection._deferred === true) {
	            throw new Error('Collection.prevPage: can not call prevPage on a deferred collection');
	        }
	        var options = {
	            start: this.collection._first - this.pageSize,
	            pageSize: this.pageSize
	        };
	        if (this.initialSelect) {
	            options.select = this.initialSelect;
	        }
	        return this.fetch(options);
	    };
	    CollectionBusiness.prototype._addUserDefinedMethods = function () {
	        // let _this = this;
	        for (var _i = 0, _a = this.dataClassBusiness.methods.collection; _i < _a.length; _i++) {
	            var method = _a[_i];
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            this.collection[method] = function () {
	                throw new Error('Not yet implemented');
	                // let params = Array.from(arguments);
	                // return _this.callMethod(method, params);
	            };
	        }
	    };
	    // callMethod(methodName, parameters) {
	    //   return this.service.callMethod(methodName, parameters);
	    // }
	    CollectionBusiness.prototype._refreshCollection = function (_a) {
	        var fresherCollection = _a.fresherCollection;
	        for (var prop in fresherCollection) {
	            if (Object.prototype.hasOwnProperty.call(fresherCollection, prop)) {
	                if (typeof fresherCollection[prop] !== 'function') {
	                    this.collection[prop] = fresherCollection[prop];
	                }
	            }
	        }
	    };
	    return CollectionBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CollectionBusiness;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var util_1 = __webpack_require__(202);
	var CollectionService = (function (_super) {
	    __extends(CollectionService, _super);
	    function CollectionService(_a) {
	        var wakJSC = _a.wakJSC, collection = _a.collection, dataClass = _a.dataClass, collectionUri = _a.collectionUri;
	        _super.call(this, { wakJSC: wakJSC });
	        this.collection = collection;
	        this.dataClass = dataClass;
	        this.collectionUri = collectionUri;
	        this.isEntitySet = this._isEntitySetUri({ uri: collectionUri });
	    }
	    CollectionService.prototype.fetch = function (options) {
	        var _this = this;
	        if (!this.isEntitySet) {
	            if (options.select && options.select.length > 0) {
	                throw new Error('Collection.fetch can not have "select" option when deferred');
	            }
	        }
	        if (options.method && options.method.length > 0) {
	            throw new Error('Collection.fetch can not have "method" option');
	        }
	        options.method = 'subentityset';
	        var optString = util_1.default.handleOptions(options);
	        //Remove the first ? on optString if it's not an entitySet (because there is also
	        //?$expand=... on collectionUri), and add a &
	        if (!this.isEntitySet) {
	            optString = '&' + optString.slice(1);
	        }
	        //Remove the /rest/ part of the URI as our service will add it on its own
	        var uri = this.collectionUri.slice(5);
	        return this.httpClient.get({
	            uri: uri + optString
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj.__ENTITYSET) {
	                _this.collectionUri = obj.__ENTITYSET;
	                _this.isEntitySet = _this._isEntitySetUri({ uri: obj.__ENTITYSET });
	            }
	            delete obj.__entityModel;
	            for (var _i = 0, _a = obj.__ENTITIES; _i < _a.length; _i++) {
	                var entity = _a[_i];
	                util_1.default.removeRestInfoFromEntity(entity);
	            }
	            return obj;
	        });
	    };
	    CollectionService.prototype._isEntitySetUri = function (_a) {
	        var uri = _a.uri;
	        return /^\/rest\/\w+\/\$entityset\/[A-Z0-9]+(\?.*)?$/i.test(uri);
	    };
	    return CollectionService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CollectionService;


/***/ },
/* 207 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    DEFAULT_PAGE_SIZE: 40,
	    DEFAULT_SESSION_DURATION: 3600 //seconds
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var media_service_1 = __webpack_require__(209);
	var MediaBusiness = (function (_super) {
	    __extends(MediaBusiness, _super);
	    function MediaBusiness(_a) {
	        var wakJSC = _a.wakJSC, media = _a.media, dataClassBusiness = _a.dataClassBusiness, isImage = _a.isImage, attributeName = _a.attributeName, entity = _a.entity;
	        _super.call(this, { wakJSC: wakJSC });
	        this.media = media;
	        this.entity = entity;
	        this.dataClassBusiness = dataClassBusiness;
	        this.isImage = isImage === true;
	        this.service = new media_service_1.default({
	            wakJSC: wakJSC,
	            mediaBusiness: this,
	            media: media,
	            attributeName: attributeName,
	            dataClassBusiness: dataClassBusiness
	        });
	    }
	    MediaBusiness.prototype._decorateMedia = function () {
	        this.media.upload = this.upload.bind(this);
	        this.media.delete = this.delete.bind(this);
	    };
	    MediaBusiness.prototype.upload = function (file, mimeType) {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Media.upload: entity must be saved before uploading a media');
	        }
	        return this.service.upload(file, mimeType).then(function (dbo) {
	            return dbo; //FIXME
	        }).then(function () {
	            //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
	            return _this.entity.fetch();
	        });
	    };
	    MediaBusiness.prototype.delete = function () {
	        var _this = this;
	        if (!this.entity._key) {
	            throw new Error('Media.upload: entity must be saved before deleting a media');
	        }
	        return this.service.delete().then(function () {
	            //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
	            return _this.entity.fetch();
	        });
	    };
	    return MediaBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MediaBusiness;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var MediaService = (function (_super) {
	    __extends(MediaService, _super);
	    function MediaService(_a) {
	        var wakJSC = _a.wakJSC, mediaBusiness = _a.mediaBusiness, media = _a.media, attributeName = _a.attributeName, dataClassBusiness = _a.dataClassBusiness;
	        _super.call(this, { wakJSC: wakJSC });
	        this.dataClassName = dataClassBusiness.dataClass.name;
	        this.entity = mediaBusiness.entity;
	        this.isImage = mediaBusiness.isImage;
	        this.media = media;
	        this.attributeName = attributeName;
	    }
	    MediaService.prototype.upload = function (file, mimeType) {
	        var uri = this._buildUri();
	        if (this.isImage) {
	            uri += '?$rawPict=' + mimeType;
	        }
	        //FIXME - real crappy not to return some piece of information to refresh entity
	        return this.httpClient.post({
	            uri: uri,
	            data: file,
	            binary: true
	        });
	    };
	    MediaService.prototype.delete = function () {
	        var uri = '/' + this.dataClassName + '(' + this.entity._key + ')';
	        var data = {
	            __KEY: this.entity._key,
	            __STAMP: this.entity._stamp
	        };
	        data[this.attributeName] = null;
	        //FIXME - crappy
	        return this.httpClient.post({
	            uri: uri,
	            data: data
	        });
	    };
	    MediaService.prototype._buildUri = function () {
	        return '/' + this.dataClassName + '(' + this.entity._key + ')'
	            + '/' + this.attributeName;
	    };
	    return MediaService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MediaService;


/***/ },
/* 210 */
/***/ function(module, exports) {

	var Collection = (function () {
	    function Collection(_a) {
	        var deferred = _a.deferred, dataClass = _a.dataClass;
	        this.entities = [];
	        this._deferred = deferred === true;
	        Object.defineProperty(this, '_dataClass', {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: dataClass
	        });
	    }
	    return Collection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Collection;


/***/ },
/* 211 */
/***/ function(module, exports) {

	var Media = (function () {
	    function Media(_a) {
	        var uri = _a.uri;
	        this.uri = uri;
	    }
	    return Media;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Media;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(194);
	var directory_service_1 = __webpack_require__(213);
	var const_1 = __webpack_require__(207);
	var DirectoryBusiness = (function (_super) {
	    __extends(DirectoryBusiness, _super);
	    function DirectoryBusiness(_a) {
	        var wakJSC = _a.wakJSC;
	        _super.call(this, { wakJSC: wakJSC });
	        this.service = new directory_service_1.default({ wakJSC: wakJSC });
	    }
	    DirectoryBusiness.prototype.login = function (username, password, duration) {
	        var durationTime = duration || const_1.default.DEFAULT_SESSION_DURATION;
	        if (!(typeof durationTime === 'number') || durationTime <= 0) {
	            throw new Error('Directory.login: invalid duration parameter');
	        }
	        return this.service.login(username, password, durationTime)
	            .catch(function () {
	            throw new Error('Directory.login: Unauthorized');
	        });
	    };
	    DirectoryBusiness.prototype.logout = function () {
	        return this.service.logout()
	            .catch(function () {
	            throw new Error('Directory.logout: logout failed');
	        });
	    };
	    DirectoryBusiness.prototype.currentUser = function () {
	        return this.service.currentUser()
	            .then(function (dbo) {
	            return dbo;
	        })
	            .catch(function () {
	            throw new Error('Directory.currentUser: user is not logged in');
	        });
	    };
	    DirectoryBusiness.prototype.currentUserBelongsTo = function (group) {
	        if (!(typeof group === 'string')) {
	            throw new Error('Directory.currentUserBelongsTo: group must be a string');
	        }
	        return this.service.currentUserBelongsTo(group)
	            .then(function () {
	            return true;
	        })
	            .catch(function () {
	            return false;
	        });
	    };
	    return DirectoryBusiness;
	})(abstract_business_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DirectoryBusiness;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(196);
	var DirectoryService = (function (_super) {
	    __extends(DirectoryService, _super);
	    function DirectoryService() {
	        _super.apply(this, arguments);
	    }
	    DirectoryService.prototype.login = function (username, password, duration) {
	        return this.httpClient.post({
	            uri: '/$directory/login',
	            data: [username, password, duration]
	        }).then(function () {
	            return true;
	        });
	    };
	    DirectoryService.prototype.logout = function () {
	        return this.httpClient.get({
	            uri: '/$directory/logout'
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj.result && obj.result === true) {
	                return true;
	            }
	            else {
	                return Promise.reject();
	            }
	        });
	    };
	    DirectoryService.prototype.currentUser = function () {
	        return this.httpClient.get({
	            uri: '/$directory/currentUser'
	        })
	            .then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj.result && obj.result.ID) {
	                return obj.result;
	            }
	            else {
	                return Promise.reject();
	            }
	        });
	    };
	    DirectoryService.prototype.currentUserBelongsTo = function (group) {
	        return this.httpClient.post({
	            uri: '/$directory/currentUserBelongsTo',
	            data: [group]
	        }).then(function (res) {
	            var obj = JSON.parse(res.body);
	            if (obj && obj.result && obj.result === true) {
	                return true;
	            }
	            else {
	                return Promise.reject();
	            }
	        });
	    };
	    return DirectoryService;
	})(abstract_service_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DirectoryService;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var http_client_1 = __webpack_require__(215);
	var aurelia_http_client_1 = __webpack_require__(216);
	var http_response_1 = __webpack_require__(226);
	var BrowserHttpClient = (function (_super) {
	    __extends(BrowserHttpClient, _super);
	    function BrowserHttpClient(_a) {
	        var apiPrefix = _a.apiPrefix;
	        _super.call(this, { apiPrefix: apiPrefix });
	        this.client = new aurelia_http_client_1.HttpClient();
	    }
	    BrowserHttpClient.prototype.get = function (_a) {
	        var uri = _a.uri, params = _a.params;
	        try {
	            var res = _super.prototype.get.call(this, { uri: uri, params: params });
	            if (res !== null) {
	                return Promise.resolve(res);
	            }
	        }
	        catch (e) {
	            return Promise.reject(e);
	        }
	        return this._getWithoutInterceptor({ uri: uri, params: params });
	    };
	    BrowserHttpClient.prototype._getWithoutInterceptor = function (_a) {
	        var uri = _a.uri;
	        var request = this.client.createRequest(this.prefix + uri)
	            .asGet()
	            .send();
	        return this._httpResponseAdaptor({ request: request });
	    };
	    BrowserHttpClient.prototype.post = function (_a) {
	        var uri = _a.uri, data = _a.data, binary = _a.binary;
	        try {
	            var res = _super.prototype.post.call(this, { uri: uri, data: data, binary: binary });
	            if (res !== null) {
	                return Promise.resolve(res);
	            }
	        }
	        catch (e) {
	            return Promise.reject(e);
	        }
	        var request = this.client.createRequest(this.prefix + uri)
	            .asPost()
	            .withContent(data)
	            .send();
	        return this._httpResponseAdaptor({ request: request });
	    };
	    BrowserHttpClient.prototype._httpResponseAdaptor = function (_a) {
	        var request = _a.request;
	        return request.then(function (res) {
	            return new http_response_1.default({
	                statusCode: res.statusCode,
	                headers: [],
	                body: res.response
	            });
	        });
	    };
	    return BrowserHttpClient;
	})(http_client_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BrowserHttpClient;


/***/ },
/* 215 */
/***/ function(module, exports) {

	var HttpClient = (function () {
	    function HttpClient(_a) {
	        var apiPrefix = _a.apiPrefix;
	        this.prefix = apiPrefix;
	        this._getRequestInterceptors = [];
	        this._postRequestInterceptors = [];
	    }
	    HttpClient.prototype.get = function (options) {
	        for (var i = 0; i < this._getRequestInterceptors.length; i++) {
	            var interceptor = this._getRequestInterceptors[i];
	            var res = interceptor(options);
	            if (res !== null && (typeof res !== 'undefined')) {
	                return res;
	            }
	        }
	        return null;
	    };
	    HttpClient.prototype.post = function (options) {
	        for (var i = 0; i < this._postRequestInterceptors.length; i++) {
	            var interceptor = this._postRequestInterceptors[i];
	            var res = interceptor(options);
	            if (res !== null && (typeof res !== 'undefined')) {
	                return res;
	            }
	        }
	        return null;
	    };
	    /**
	     * @param {array|string} type - HTTP verb of the request to intercept
	     * @param {function} callback - The interceptor function to execute before HTTP request. If it returns something different than null, the underlying HTTP request won't be executed
	     * @returns {null|object} Returns null or an object, if an object is returned, the underlying HTTP request won't be executed
	     */
	    HttpClient.prototype.registerRequestInterceptor = function (type, callback) {
	        var _this = this;
	        var interceptorType = this._interceptorTypeToArray(type);
	        interceptorType.forEach(function (t) {
	            if (t === 'get') {
	                _this._getRequestInterceptors.push(callback);
	            }
	            else if (t === 'post') {
	                _this._postRequestInterceptors.push(callback);
	            }
	        });
	    };
	    HttpClient.prototype._interceptorTypeToArray = function (type) {
	        var _this = this;
	        var interceptorType = [];
	        if (typeof type === 'string') {
	            if (!this._isValidInterceptorType(type.toLowerCase())) {
	                throw new Error('HttpClient.registerInterceptor: invalid interceptor type');
	            }
	            else {
	                interceptorType.push(type.toLowerCase());
	            }
	        }
	        else if (Array.isArray(type)) {
	            type.forEach(function (t) {
	                if (!_this._isValidInterceptorType(t.toLowerCase())) {
	                    throw new Error('HttpClient.registerInterceptor: invalid interceptor type');
	                }
	                else {
	                    interceptorType.push(t.toLowerCase());
	                }
	            });
	        }
	        else {
	            throw new Error('HttpClient.registerInterceptor: type must be a string or an array');
	        }
	        return interceptorType;
	    };
	    HttpClient.prototype._isValidInterceptorType = function (type) {
	        var validTypes = ['get', 'post'];
	        return validTypes.indexOf(type) !== -1;
	    };
	    return HttpClient;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpClient;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _httpClient = __webpack_require__(217);
	
	Object.defineProperty(exports, 'HttpClient', {
	  enumerable: true,
	  get: function get() {
	    return _httpClient.HttpClient;
	  }
	});
	
	var _httpRequestMessage = __webpack_require__(221);
	
	Object.defineProperty(exports, 'HttpRequestMessage', {
	  enumerable: true,
	  get: function get() {
	    return _httpRequestMessage.HttpRequestMessage;
	  }
	});
	
	var _httpResponseMessage = __webpack_require__(223);
	
	Object.defineProperty(exports, 'HttpResponseMessage', {
	  enumerable: true,
	  get: function get() {
	    return _httpResponseMessage.HttpResponseMessage;
	  }
	});
	
	var _jsonpRequestMessage = __webpack_require__(225);
	
	Object.defineProperty(exports, 'JSONPRequestMessage', {
	  enumerable: true,
	  get: function get() {
	    return _jsonpRequestMessage.JSONPRequestMessage;
	  }
	});
	
	var _headers = __webpack_require__(218);
	
	Object.defineProperty(exports, 'Headers', {
	  enumerable: true,
	  get: function get() {
	    return _headers.Headers;
	  }
	});
	
	var _requestBuilder = __webpack_require__(219);
	
	Object.defineProperty(exports, 'RequestBuilder', {
	  enumerable: true,
	  get: function get() {
	    return _requestBuilder.RequestBuilder;
	  }
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpClient = undefined;
	
	var _headers = __webpack_require__(218);
	
	var _requestBuilder = __webpack_require__(219);
	
	var _httpRequestMessage = __webpack_require__(221);
	
	var _jsonpRequestMessage = __webpack_require__(225);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function trackRequestStart(client, processor) {
	  client.pendingRequests.push(processor);
	  client.isRequesting = true;
	}
	
	function trackRequestEnd(client, processor) {
	  var index = client.pendingRequests.indexOf(processor);
	
	  client.pendingRequests.splice(index, 1);
	  client.isRequesting = client.pendingRequests.length > 0;
	
	  if (!client.isRequesting) {
	    var evt = new window.CustomEvent('aurelia-http-client-requests-drained', { bubbles: true, cancelable: true });
	    setTimeout(function () {
	      return document.dispatchEvent(evt);
	    }, 1);
	  }
	}
	
	/**
	* The main HTTP client object.
	*
	* @class HttpClient
	* @constructor
	*/
	
	var HttpClient = exports.HttpClient = (function () {
	  function HttpClient() {
	    _classCallCheck(this, HttpClient);
	
	    this.requestTransformers = [];
	    this.requestProcessorFactories = new Map();
	    this.requestProcessorFactories.set(_httpRequestMessage.HttpRequestMessage, _httpRequestMessage.createHttpRequestMessageProcessor);
	    this.requestProcessorFactories.set(_jsonpRequestMessage.JSONPRequestMessage, _jsonpRequestMessage.createJSONPRequestMessageProcessor);
	    this.pendingRequests = [];
	    this.isRequesting = false;
	  }
	
	  /**
	   * Configure this HttpClient with default settings to be used by all requests.
	   *
	   * @method configure
	   * @param {Function} fn A function that takes a RequestBuilder as an argument.
	   * @chainable
	   */
	
	  _createClass(HttpClient, [{
	    key: 'configure',
	    value: function configure(fn) {
	      var builder = new _requestBuilder.RequestBuilder(this);
	      fn(builder);
	      this.requestTransformers = builder.transformers;
	      return this;
	    }
	
	    /**
	     * Returns a new RequestBuilder for this HttpClient instance that can be used to build and send HTTP requests.
	     *
	     * @method createRequest
	     * @param uri The target URI.
	     * @type RequestBuilder
	     */
	
	  }, {
	    key: 'createRequest',
	    value: function createRequest(uri) {
	      var builder = new _requestBuilder.RequestBuilder(this);
	
	      if (uri) {
	        builder.withUri(uri);
	      }
	
	      return builder;
	    }
	
	    /**
	     * Sends a message using the underlying networking stack.
	     *
	     * @method send
	     * @param message A configured HttpRequestMessage or JSONPRequestMessage.
	     * @param {Array} transformers A collection of transformers to apply to the HTTP request.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'send',
	    value: function send(message, transformers) {
	      var _this = this;
	
	      var createProcessor = this.requestProcessorFactories.get(message.constructor),
	          processor,
	          promise,
	          i,
	          ii;
	
	      if (!createProcessor) {
	        throw new Error('No request message processor factory for ' + message.constructor + '.');
	      }
	
	      processor = createProcessor();
	      trackRequestStart(this, processor);
	
	      transformers = transformers || this.requestTransformers;
	
	      for (i = 0, ii = transformers.length; i < ii; ++i) {
	        transformers[i](this, processor, message);
	      }
	
	      promise = processor.process(this, message);
	
	      promise.abort = promise.cancel = function () {
	        processor.abort();
	      };
	
	      return promise.then(function (response) {
	        trackRequestEnd(_this, processor);
	        return response;
	      }).catch(function (response) {
	        trackRequestEnd(_this, processor);
	        throw response;
	      });
	    }
	
	    /**
	     * Sends an HTTP DELETE request.
	     *
	     * @method delete
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'delete',
	    value: function _delete(uri) {
	      return this.createRequest(uri).asDelete().send();
	    }
	
	    /**
	     * Sends an HTTP GET request.
	     *
	     * @method get
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'get',
	    value: function get(uri) {
	      return this.createRequest(uri).asGet().send();
	    }
	
	    /**
	     * Sends an HTTP HEAD request.
	     *
	     * @method head
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'head',
	    value: function head(uri) {
	      return this.createRequest(uri).asHead().send();
	    }
	
	    /**
	     * Sends a JSONP request.
	     *
	     * @method jsonp
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'jsonp',
	    value: function jsonp(uri) {
	      var callbackParameterName = arguments.length <= 1 || arguments[1] === undefined ? 'jsoncallback' : arguments[1];
	
	      return this.createRequest(uri).asJsonp(callbackParameterName).send();
	    }
	
	    /**
	     * Sends an HTTP OPTIONS request.
	     *
	     * @method options
	     * @param {String} uri The target URI.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'options',
	    value: function options(uri) {
	      return this.createRequest(uri).asOptions().send();
	    }
	
	    /**
	     * Sends an HTTP PUT request.
	     *
	     * @method put
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'put',
	    value: function put(uri, content) {
	      return this.createRequest(uri).asPut().withContent(content).send();
	    }
	
	    /**
	     * Sends an HTTP PATCH request.
	     *
	     * @method patch
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'patch',
	    value: function patch(uri, content) {
	      return this.createRequest(uri).asPatch().withContent(content).send();
	    }
	
	    /**
	     * Sends an HTTP POST request.
	     *
	     * @method post
	     * @param {String} uri The target URI.
	     * @param {Object} uri The request payload.
	     * @return {Promise} A cancellable promise object.
	     */
	
	  }, {
	    key: 'post',
	    value: function post(uri, content) {
	      return this.createRequest(uri).asPost().withContent(content).send();
	    }
	  }]);
	
	  return HttpClient;
	})();

/***/ },
/* 218 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Headers = exports.Headers = (function () {
	  function Headers() {
	    var headers = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Headers);
	
	    this.headers = headers;
	  }
	
	  _createClass(Headers, [{
	    key: 'add',
	    value: function add(key, value) {
	      this.headers[key] = value;
	    }
	  }, {
	    key: 'get',
	    value: function get(key) {
	      return this.headers[key];
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.headers = {};
	    }
	  }, {
	    key: 'configureXHR',
	    value: function configureXHR(xhr) {
	      var headers = this.headers,
	          key;
	
	      for (key in headers) {
	        xhr.setRequestHeader(key, headers[key]);
	      }
	    }
	
	    /**
	     * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
	     * headers according to the format described here:
	     * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
	     * This method parses that string into a user-friendly key/value pair object.
	     */
	
	  }], [{
	    key: 'parse',
	    value: function parse(headerStr) {
	      var headers = new Headers();
	      if (!headerStr) {
	        return headers;
	      }
	
	      var headerPairs = headerStr.split('\r\n');
	      for (var i = 0; i < headerPairs.length; i++) {
	        var headerPair = headerPairs[i];
	        // Can't use split() here because it does the wrong thing
	        // if the header value has the string ": " in it.
	        var index = headerPair.indexOf(': ');
	        if (index > 0) {
	          var key = headerPair.substring(0, index);
	          var val = headerPair.substring(index + 2);
	          headers.add(key, val);
	        }
	      }
	
	      return headers;
	    }
	  }]);
	
	  return Headers;
	})();

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RequestBuilder = undefined;
	
	var _aureliaPath = __webpack_require__(220);
	
	var _httpRequestMessage = __webpack_require__(221);
	
	var _jsonpRequestMessage = __webpack_require__(225);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	* A builder class allowing fluent composition of HTTP requests.
	*
	* @class RequestBuilder
	* @constructor
	*/
	
	var RequestBuilder = exports.RequestBuilder = (function () {
		function RequestBuilder(client) {
			_classCallCheck(this, RequestBuilder);
	
			this.client = client;
			this.transformers = client.requestTransformers.slice(0);
			this.useJsonp = false;
		}
	
		/**
	 * Adds a user-defined request transformer to the RequestBuilder.
	 *
	 * @method addHelper
	 * @param {String} name The name of the helper to add.
	 * @param {Function} fn The helper function.
	 * @chainable
	 */
	
		_createClass(RequestBuilder, [{
			key: 'send',
	
			/**
	  * Sends the request.
	  *
	  * @method send
	  * @return {Promise} A cancellable promise object.
	  */
			value: function send() {
				var message = this.useJsonp ? new _jsonpRequestMessage.JSONPRequestMessage() : new _httpRequestMessage.HttpRequestMessage();
				return this.client.send(message, this.transformers);
			}
		}], [{
			key: 'addHelper',
			value: function addHelper(name, fn) {
				RequestBuilder.prototype[name] = function () {
					this.transformers.push(fn.apply(this, arguments));
					return this;
				};
			}
		}]);
	
		return RequestBuilder;
	})();
	
	RequestBuilder.addHelper('asDelete', function () {
		return function (client, processor, message) {
			message.method = 'DELETE';
		};
	});
	
	RequestBuilder.addHelper('asGet', function () {
		return function (client, processor, message) {
			message.method = 'GET';
		};
	});
	
	RequestBuilder.addHelper('asHead', function () {
		return function (client, processor, message) {
			message.method = 'HEAD';
		};
	});
	
	RequestBuilder.addHelper('asOptions', function () {
		return function (client, processor, message) {
			message.method = 'OPTIONS';
		};
	});
	
	RequestBuilder.addHelper('asPatch', function () {
		return function (client, processor, message) {
			message.method = 'PATCH';
		};
	});
	
	RequestBuilder.addHelper('asPost', function () {
		return function (client, processor, message) {
			message.method = 'POST';
		};
	});
	
	RequestBuilder.addHelper('asPut', function () {
		return function (client, processor, message) {
			message.method = 'PUT';
		};
	});
	
	RequestBuilder.addHelper('asJsonp', function (callbackParameterName) {
		this.useJsonp = true;
		return function (client, processor, message) {
			message.callbackParameterName = callbackParameterName;
		};
	});
	
	RequestBuilder.addHelper('withUri', function (uri) {
		return function (client, processor, message) {
			message.uri = uri;
		};
	});
	
	RequestBuilder.addHelper('withContent', function (content) {
		return function (client, processor, message) {
			message.content = content;
		};
	});
	
	RequestBuilder.addHelper('withBaseUri', function (baseUri) {
		return function (client, processor, message) {
			message.baseUri = baseUri;
		};
	});
	
	RequestBuilder.addHelper('withParams', function (params) {
		return function (client, processor, message) {
			message.params = params;
		};
	});
	
	RequestBuilder.addHelper('withResponseType', function (responseType) {
		return function (client, processor, message) {
			message.responseType = responseType;
		};
	});
	
	RequestBuilder.addHelper('withTimeout', function (timeout) {
		return function (client, processor, message) {
			message.timeout = timeout;
		};
	});
	
	RequestBuilder.addHelper('withHeader', function (key, value) {
		return function (client, processor, message) {
			message.headers.add(key, value);
		};
	});
	
	RequestBuilder.addHelper('withCredentials', function (value) {
		return function (client, processor, message) {
			message.withCredentials = value;
		};
	});
	
	RequestBuilder.addHelper('withReviver', function (reviver) {
		return function (client, processor, message) {
			message.reviver = reviver;
		};
	});
	
	RequestBuilder.addHelper('withReplacer', function (replacer) {
		return function (client, processor, message) {
			message.replacer = replacer;
		};
	});
	
	RequestBuilder.addHelper('withProgressCallback', function (progressCallback) {
		return function (client, processor, message) {
			message.progressCallback = progressCallback;
		};
	});
	
	RequestBuilder.addHelper('withCallbackParameterName', function (callbackParameterName) {
		return function (client, processor, message) {
			message.callbackParameterName = callbackParameterName;
		};
	});

/***/ },
/* 220 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.relativeToFile = relativeToFile;
	exports.join = join;
	exports.buildQueryString = buildQueryString;
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function trimDots(ary) {
	  var i, part;
	  for (i = 0; i < ary.length; ++i) {
	    part = ary[i];
	    if (part === '.') {
	      ary.splice(i, 1);
	      i -= 1;
	    } else if (part === '..') {
	      // If at the start, or previous value is still ..,
	      // keep them so that when converted to a path it may
	      // still work when converted to a path, even though
	      // as an ID it is less than ideal. In larger point
	      // releases, may be better to just kick out an error.
	      if (i === 0 || i == 1 && ary[2] === '..' || ary[i - 1] === '..') {
	        continue;
	      } else if (i > 0) {
	        ary.splice(i - 1, 2);
	        i -= 2;
	      }
	    }
	  }
	}
	
	function relativeToFile(name, file) {
	  var lastIndex,
	      normalizedBaseParts,
	      fileParts = file && file.split('/');
	
	  name = name.trim();
	  name = name.split('/');
	
	  if (name[0].charAt(0) === '.' && fileParts) {
	    //Convert file to array, and lop off the last part,
	    //so that . matches that 'directory' and not name of the file's
	    //module. For instance, file of 'one/two/three', maps to
	    //'one/two/three.js', but we want the directory, 'one/two' for
	    //this normalization.
	    normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
	    name = normalizedBaseParts.concat(name);
	  }
	
	  trimDots(name);
	
	  return name.join('/');
	}
	
	function join(path1, path2) {
	  var url1, url2, url3, i, ii, urlPrefix;
	
	  if (!path1) {
	    return path2;
	  }
	
	  if (!path2) {
	    return path1;
	  }
	
	  urlPrefix = path1.indexOf('//') === 0 ? '//' : path1.indexOf('/') === 0 ? '/' : '';
	
	  url1 = path1.split('/');
	  url2 = path2.split('/');
	  url3 = [];
	
	  for (i = 0, ii = url1.length; i < ii; ++i) {
	    if (url1[i] == '..') {
	      url3.pop();
	    } else if (url1[i] == '.' || url1[i] == '') {
	      continue;
	    } else {
	      url3.push(url1[i]);
	    }
	  }
	
	  for (i = 0, ii = url2.length; i < ii; ++i) {
	    if (url2[i] == '..') {
	      url3.pop();
	    } else if (url2[i] == '.' || url2[i] == '') {
	      continue;
	    } else {
	      url3.push(url2[i]);
	    }
	  }
	
	  return urlPrefix + url3.join('/').replace(/\:\//g, '://');;
	}
	
	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    class2type = {};
	
	'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (name, i) {
	  class2type['[object ' + name + ']'] = name.toLowerCase();
	});
	
	function type(obj) {
	  if (obj == null) {
	    return obj + "";
	  }
	
	  // Support: Android<4.0 (functionish RegExp)
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	}
	
	function buildQueryString(a, traditional) {
	  var prefix,
	      s = [],
	      add = function add(key, value) {
	    // If value is a function, invoke it and return its value
	    value = typeof value === 'function' ? value() : value == null ? '' : value;
	    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	  };
	
	  for (prefix in a) {
	    _buildQueryString(prefix, a[prefix], traditional, add);
	  }
	
	  // Return the resulting serialization
	  return s.join('&').replace(r20, '+');
	}
	
	function _buildQueryString(prefix, obj, traditional, add) {
	  var name;
	
	  if (Array.isArray(obj)) {
	    // Serialize array item.
	    obj.forEach(function (v, i) {
	      if (traditional || rbracket.test(prefix)) {
	        // Treat each array item as a scalar.
	        add(prefix, v);
	      } else {
	        // Item is non-scalar (array or object), encode its numeric index.
	        _buildQueryString(prefix + '[' + ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? i : '') + ']', v, traditional, add);
	      }
	    });
	  } else if (!traditional && type(obj) === 'object') {
	    // Serialize object item.
	    for (name in obj) {
	      _buildQueryString(prefix + '[' + name + ']', obj[name], traditional, add);
	    }
	  } else {
	    // Serialize scalar item.
	    add(prefix, obj);
	  }
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpRequestMessage = undefined;
	exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;
	
	var _headers = __webpack_require__(218);
	
	var _requestMessageProcessor = __webpack_require__(222);
	
	var _transformers = __webpack_require__(224);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HttpRequestMessage = exports.HttpRequestMessage = function HttpRequestMessage(method, uri, content, headers) {
	  _classCallCheck(this, HttpRequestMessage);
	
	  this.method = method;
	  this.uri = uri;
	  this.content = content;
	  this.headers = headers || new _headers.Headers();
	  this.responseType = 'json'; //text, arraybuffer, blob, document
	};
	
	function createHttpRequestMessageProcessor() {
	  return new _requestMessageProcessor.RequestMessageProcessor(XMLHttpRequest, [_transformers.timeoutTransformer, _transformers.credentialsTransformer, _transformers.progressTransformer, _transformers.responseTypeTransformer, _transformers.headerTransformer, _transformers.contentTransformer]);
	}

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RequestMessageProcessor = undefined;
	
	var _httpResponseMessage = __webpack_require__(223);
	
	var _aureliaPath = __webpack_require__(220);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function buildFullUri(message) {
	  var uri = (0, _aureliaPath.join)(message.baseUri, message.uri),
	      qs;
	
	  if (message.params) {
	    qs = (0, _aureliaPath.buildQueryString)(message.params);
	    uri = qs ? uri + '?' + qs : uri;
	  }
	
	  message.fullUri = uri;
	}
	
	var RequestMessageProcessor = exports.RequestMessageProcessor = (function () {
	  function RequestMessageProcessor(xhrType, transformers) {
	    _classCallCheck(this, RequestMessageProcessor);
	
	    this.XHRType = xhrType;
	    this.transformers = transformers;
	  }
	
	  _createClass(RequestMessageProcessor, [{
	    key: 'abort',
	    value: function abort() {
	      //The logic here is if the xhr object is not set then there is nothing to abort so the intent was carried out
	      if (this.xhr) {
	        this.xhr.abort();
	      }
	    }
	  }, {
	    key: 'process',
	    value: function process(client, message) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        var xhr = _this.xhr = new _this.XHRType(),
	            transformers = _this.transformers,
	            i,
	            ii;
	
	        buildFullUri(message);
	        xhr.open(message.method, message.fullUri, true);
	
	        for (i = 0, ii = transformers.length; i < ii; ++i) {
	          transformers[i](client, _this, message, xhr);
	        }
	
	        xhr.onload = function (e) {
	          var response = new _httpResponseMessage.HttpResponseMessage(message, xhr, message.responseType, message.reviver);
	          if (response.isSuccess) {
	            resolve(response);
	          } else {
	            reject(response);
	          }
	        };
	
	        xhr.ontimeout = function (e) {
	          reject(new _httpResponseMessage.HttpResponseMessage(message, {
	            response: e,
	            status: xhr.status,
	            statusText: xhr.statusText
	          }, 'timeout'));
	        };
	
	        xhr.onerror = function (e) {
	          reject(new _httpResponseMessage.HttpResponseMessage(message, {
	            response: e,
	            status: xhr.status,
	            statusText: xhr.statusText
	          }, 'error'));
	        };
	
	        xhr.onabort = function (e) {
	          reject(new _httpResponseMessage.HttpResponseMessage(message, {
	            response: e,
	            status: xhr.status,
	            statusText: xhr.statusText
	          }, 'abort'));
	        };
	
	        xhr.send(message.content);
	      });
	    }
	  }]);
	
	  return RequestMessageProcessor;
	})();

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpResponseMessage = undefined;
	
	var _headers = __webpack_require__(218);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HttpResponseMessage = exports.HttpResponseMessage = (function () {
	  function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
	    _classCallCheck(this, HttpResponseMessage);
	
	    this.requestMessage = requestMessage;
	    this.statusCode = xhr.status;
	    this.response = xhr.response;
	    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
	    this.statusText = xhr.statusText;
	    this.responseType = responseType;
	    this.reviver = reviver;
	
	    if (xhr.getAllResponseHeaders) {
	      this.headers = _headers.Headers.parse(xhr.getAllResponseHeaders());
	    } else {
	      this.headers = new _headers.Headers();
	    }
	  }
	
	  _createClass(HttpResponseMessage, [{
	    key: 'content',
	    get: function get() {
	      try {
	        if (this._content !== undefined) {
	          return this._content;
	        }
	
	        if (this.response === undefined || this.response === null) {
	          return this._content = this.response;
	        }
	
	        if (this.responseType === 'json') {
	          return this._content = JSON.parse(this.response, this.reviver);
	        }
	
	        if (this.reviver) {
	          return this._content = this.reviver(this.response);
	        }
	
	        return this._content = this.response;
	      } catch (e) {
	        if (this.isSuccess) {
	          throw e;
	        }
	
	        return this._content = null;
	      }
	    }
	  }]);
	
	  return HttpResponseMessage;
	})();

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.timeoutTransformer = timeoutTransformer;
	exports.callbackParameterNameTransformer = callbackParameterNameTransformer;
	exports.credentialsTransformer = credentialsTransformer;
	exports.progressTransformer = progressTransformer;
	exports.responseTypeTransformer = responseTypeTransformer;
	exports.headerTransformer = headerTransformer;
	exports.contentTransformer = contentTransformer;
	function timeoutTransformer(client, processor, message, xhr) {
	  if (message.timeout !== undefined) {
	    xhr.timeout = message.timeout;
	  }
	}
	
	function callbackParameterNameTransformer(client, processor, message, xhr) {
	  if (message.callbackParameterName !== undefined) {
	    xhr.callbackParameterName = message.callbackParameterName;
	  }
	}
	
	function credentialsTransformer(client, processor, message, xhr) {
	  if (message.withCredentials !== undefined) {
	    xhr.withCredentials = message.withCredentials;
	  }
	}
	
	function progressTransformer(client, processor, message, xhr) {
	  if (message.progressCallback) {
	    xhr.upload.onprogress = message.progressCallback;
	  }
	}
	
	function responseTypeTransformer(client, processor, message, xhr) {
	  var responseType = message.responseType;
	
	  if (responseType === 'json') {
	    responseType = 'text'; //IE does not support json
	  }
	
	  xhr.responseType = responseType;
	}
	
	function headerTransformer(client, processor, message, xhr) {
	  message.headers.configureXHR(xhr);
	}
	
	function contentTransformer(client, processor, message, xhr) {
	  if (window.FormData && message.content instanceof FormData) {
	    return;
	  }
	
	  if (window.Blob && message.content instanceof Blob) {
	    return;
	  }
	
	  if (window.ArrayBufferView && message.content instanceof ArrayBufferView) {
	    return;
	  }
	
	  if (message.content instanceof Document) {
	    return;
	  }
	
	  if (typeof message.content === 'string') {
	    return;
	  }
	
	  if (message.content === null || message.content === undefined) {
	    return;
	  }
	
	  message.content = JSON.stringify(message.content, message.replacer);
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.JSONPRequestMessage = undefined;
	exports.createJSONPRequestMessageProcessor = createJSONPRequestMessageProcessor;
	
	var _headers = __webpack_require__(218);
	
	var _requestMessageProcessor = __webpack_require__(222);
	
	var _transformers = __webpack_require__(224);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JSONPRequestMessage = exports.JSONPRequestMessage = function JSONPRequestMessage(uri, callbackParameterName) {
	  _classCallCheck(this, JSONPRequestMessage);
	
	  this.method = 'JSONP';
	  this.uri = uri;
	  this.content = undefined;
	  this.headers = new _headers.Headers();
	  this.responseType = 'jsonp';
	  this.callbackParameterName = callbackParameterName;
	};
	
	var JSONPXHR = (function () {
	  function JSONPXHR() {
	    _classCallCheck(this, JSONPXHR);
	  }
	
	  _createClass(JSONPXHR, [{
	    key: 'open',
	    value: function open(method, uri) {
	      this.method = method;
	      this.uri = uri;
	      this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
	    }
	  }, {
	    key: 'send',
	    value: function send() {
	      var _this = this;
	
	      var uri = this.uri + (this.uri.indexOf('?') >= 0 ? '&' : '?') + this.callbackParameterName + '=' + this.callbackName;
	
	      window[this.callbackName] = function (data) {
	        delete window[_this.callbackName];
	        document.body.removeChild(script);
	
	        if (_this.status === undefined) {
	          _this.status = 200;
	          _this.statusText = 'OK';
	          _this.response = data;
	          _this.onload(_this);
	        }
	      };
	
	      var script = document.createElement('script');
	      script.src = uri;
	      document.body.appendChild(script);
	
	      if (this.timeout !== undefined) {
	        setTimeout(function () {
	          if (_this.status === undefined) {
	            _this.status = 0;
	            _this.ontimeout(new Error('timeout'));
	          }
	        }, this.timeout);
	      }
	    }
	  }, {
	    key: 'abort',
	    value: function abort() {
	      if (this.status === undefined) {
	        this.status = 0;
	        this.onabort(new Error('abort'));
	      }
	    }
	  }, {
	    key: 'setRequestHeader',
	    value: function setRequestHeader() {}
	  }]);
	
	  return JSONPXHR;
	})();
	
	function createJSONPRequestMessageProcessor() {
	  return new _requestMessageProcessor.RequestMessageProcessor(JSONPXHR, [_transformers.timeoutTransformer, _transformers.callbackParameterNameTransformer]);
	}

/***/ },
/* 226 */
/***/ function(module, exports) {

	var HttpResponse = (function () {
	    function HttpResponse(_a) {
	        var statusCode = _a.statusCode, headers = _a.headers, body = _a.body;
	        this.statusCode = statusCode;
	        this.headers = headers || [];
	        this.body = body;
	    }
	    return HttpResponse;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HttpResponse;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=wakjsc.js.map