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

	var wakjsc_1 = __webpack_require__(2);
	var browser_http_client_1 = __webpack_require__(24);
	wakjsc_1.default.HttpClient = browser_http_client_1.default;
	var wakjsc = new wakjsc_1.default();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = wakjsc;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var catalog_business_1 = __webpack_require__(3);
	var directory_business_1 = __webpack_require__(22);
	var entity_1 = __webpack_require__(13);
	var collection_1 = __webpack_require__(20);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var catalog_service_1 = __webpack_require__(5);
	var catalog_1 = __webpack_require__(7);
	var dataclass_1 = __webpack_require__(8);
	var dataclass_business_1 = __webpack_require__(9);
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var entity_business_1 = __webpack_require__(10);
	var dataclass_service_1 = __webpack_require__(14);
	var collection_business_1 = __webpack_require__(15);
	var media_business_1 = __webpack_require__(18);
	var entity_1 = __webpack_require__(13);
	var collection_1 = __webpack_require__(20);
	var dataclass_1 = __webpack_require__(8);
	var media_1 = __webpack_require__(21);
	var const_1 = __webpack_require__(17);
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
	        for (var _i = 0, _a = this.methods.dataClass; _i < _a.length; _i++) {
	            var method = _a[_i];
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            this.dataClass[method] = function () {
	                var params = Array.from(arguments);
	                return _this.callMethod(method, params);
	            };
	        }
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var entity_service_1 = __webpack_require__(11);
	var dataclass_1 = __webpack_require__(8);
	var entity_1 = __webpack_require__(13);
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
	        for (var _i = 0, _a = this.dataClassBusiness.methods.entity; _i < _a.length; _i++) {
	            var method = _a[_i];
	            //Voluntary don't use fat arrow notation to use arguments object without a bug
	            this.entity[method] = function () {
	                var params = Array.from(arguments);
	                return _this.callMethod(method, params);
	            };
	        }
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var util_1 = __webpack_require__(12);
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var util_1 = __webpack_require__(12);
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var collection_service_1 = __webpack_require__(16);
	var const_1 = __webpack_require__(17);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
	var util_1 = __webpack_require__(12);
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
/* 17 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    DEFAULT_PAGE_SIZE: 40,
	    DEFAULT_SESSION_DURATION: 3600 //seconds
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var media_service_1 = __webpack_require__(19);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_business_1 = __webpack_require__(4);
	var directory_service_1 = __webpack_require__(23);
	var const_1 = __webpack_require__(17);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_service_1 = __webpack_require__(6);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var http_client_1 = __webpack_require__(25);
	var aurelia_http_client_1 = __webpack_require__(26);
	var http_response_1 = __webpack_require__(36);
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _httpClient = __webpack_require__(27);
	
	Object.defineProperty(exports, 'HttpClient', {
	  enumerable: true,
	  get: function get() {
	    return _httpClient.HttpClient;
	  }
	});
	
	var _httpRequestMessage = __webpack_require__(31);
	
	Object.defineProperty(exports, 'HttpRequestMessage', {
	  enumerable: true,
	  get: function get() {
	    return _httpRequestMessage.HttpRequestMessage;
	  }
	});
	
	var _httpResponseMessage = __webpack_require__(33);
	
	Object.defineProperty(exports, 'HttpResponseMessage', {
	  enumerable: true,
	  get: function get() {
	    return _httpResponseMessage.HttpResponseMessage;
	  }
	});
	
	var _jsonpRequestMessage = __webpack_require__(35);
	
	Object.defineProperty(exports, 'JSONPRequestMessage', {
	  enumerable: true,
	  get: function get() {
	    return _jsonpRequestMessage.JSONPRequestMessage;
	  }
	});
	
	var _headers = __webpack_require__(28);
	
	Object.defineProperty(exports, 'Headers', {
	  enumerable: true,
	  get: function get() {
	    return _headers.Headers;
	  }
	});
	
	var _requestBuilder = __webpack_require__(29);
	
	Object.defineProperty(exports, 'RequestBuilder', {
	  enumerable: true,
	  get: function get() {
	    return _requestBuilder.RequestBuilder;
	  }
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpClient = undefined;
	
	var _headers = __webpack_require__(28);
	
	var _requestBuilder = __webpack_require__(29);
	
	var _httpRequestMessage = __webpack_require__(31);
	
	var _jsonpRequestMessage = __webpack_require__(35);
	
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RequestBuilder = undefined;
	
	var _aureliaPath = __webpack_require__(30);
	
	var _httpRequestMessage = __webpack_require__(31);
	
	var _jsonpRequestMessage = __webpack_require__(35);
	
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpRequestMessage = undefined;
	exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;
	
	var _headers = __webpack_require__(28);
	
	var _requestMessageProcessor = __webpack_require__(32);
	
	var _transformers = __webpack_require__(34);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RequestMessageProcessor = undefined;
	
	var _httpResponseMessage = __webpack_require__(33);
	
	var _aureliaPath = __webpack_require__(30);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpResponseMessage = undefined;
	
	var _headers = __webpack_require__(28);
	
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.JSONPRequestMessage = undefined;
	exports.createJSONPRequestMessageProcessor = createJSONPRequestMessageProcessor;
	
	var _headers = __webpack_require__(28);
	
	var _requestMessageProcessor = __webpack_require__(32);
	
	var _transformers = __webpack_require__(34);
	
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
/* 36 */
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