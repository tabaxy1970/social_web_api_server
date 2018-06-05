
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/string.h"
#include "kernel/memory.h"
#include "kernel/operators.h"
#include "kernel/fcall.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(Utils_Numeric) {

	ZEPHIR_REGISTER_CLASS(Utils, Numeric, utils, numeric, utils_numeric_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(Utils_Numeric, convert) {

	zend_string *_9$$9, *_13$$12, *_19$$15, *_40$$21;
	zend_ulong _8$$9, _12$$12, _18$$15, _39$$21;
	zend_bool ar = 0, _3$$8, _23$$15, _27$$17;
	zend_long ZEPHIR_LAST_CALL_STATUS, _4$$8, _24$$15, _28$$17;
	zephir_fcall_cache_entry *_2 = NULL;
	zval list;
	zval *data = NULL, data_sub, *list_param = NULL, __$true, json, column, x_max, y_max, x, y, key, val, *_0, _1$$8, _5$$8, _6$$9, *_7$$9, _10$$11, *_11$$12, _14$$14, _15$$15, _16$$15, *_17$$15, _20$$15, _21$$15, _22$$15, _25$$15, _26$$17, _29$$17, _30$$19, _31$$19, _32$$19, _33$$20, _34$$20, _35$$20, _36$$20, _37$$20, *_38$$21, _41$$22, _42$$24;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data_sub);
	ZVAL_BOOL(&__$true, 1);
	ZVAL_UNDEF(&json);
	ZVAL_UNDEF(&column);
	ZVAL_UNDEF(&x_max);
	ZVAL_UNDEF(&y_max);
	ZVAL_UNDEF(&x);
	ZVAL_UNDEF(&y);
	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&val);
	ZVAL_UNDEF(&_1$$8);
	ZVAL_UNDEF(&_5$$8);
	ZVAL_UNDEF(&_6$$9);
	ZVAL_UNDEF(&_10$$11);
	ZVAL_UNDEF(&_14$$14);
	ZVAL_UNDEF(&_15$$15);
	ZVAL_UNDEF(&_16$$15);
	ZVAL_UNDEF(&_20$$15);
	ZVAL_UNDEF(&_21$$15);
	ZVAL_UNDEF(&_22$$15);
	ZVAL_UNDEF(&_25$$15);
	ZVAL_UNDEF(&_26$$17);
	ZVAL_UNDEF(&_29$$17);
	ZVAL_UNDEF(&_30$$19);
	ZVAL_UNDEF(&_31$$19);
	ZVAL_UNDEF(&_32$$19);
	ZVAL_UNDEF(&_33$$20);
	ZVAL_UNDEF(&_34$$20);
	ZVAL_UNDEF(&_35$$20);
	ZVAL_UNDEF(&_36$$20);
	ZVAL_UNDEF(&_37$$20);
	ZVAL_UNDEF(&_41$$22);
	ZVAL_UNDEF(&_42$$24);
	ZVAL_UNDEF(&list);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &data, &list_param);

	ZEPHIR_SEPARATE_PARAM(data);
	if (!list_param) {
		ZEPHIR_INIT_VAR(&list);
		array_init(&list);
	} else {
		zephir_get_arrval(&list, list_param);
	}


	if (Z_TYPE_P(data) == IS_OBJECT) {
		ZEPHIR_INIT_VAR(&json);
		zephir_json_encode(&json, data, 0 );
		ZEPHIR_INIT_NVAR(data);
		zephir_json_decode(data, &json, zephir_get_intval(&__$true) );
	}
	if (!(Z_TYPE_P(data) == IS_ARRAY)) {
		RETVAL_ZVAL(data, 1, 0);
		RETURN_MM();
	}
	ar = 0;
	zephir_is_iterable(data, 0, "utils/Numeric.zep", 21);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(data), _0)
	{
		ZEPHIR_INIT_NVAR(&val);
		ZVAL_COPY(&val, _0);
		if (Z_TYPE_P(&val) == IS_ARRAY) {
			ar = 1;
		}
		break;
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&val);
	if (ZEPHIR_IS_STRING(&list, "")) {
		if (ar) {
			ZEPHIR_CALL_FUNCTION(&_1$$8, "sizeof", &_2, 1, data);
			zephir_check_call_status();
			ZEPHIR_INIT_VAR(&y_max);
			ZVAL_LONG(&y_max, (zephir_get_numberval(&_1$$8) - 1));
			ZEPHIR_CPY_WRT(&_5$$8, &y_max);
			_4$$8 = 0;
			_3$$8 = 0;
			if (ZEPHIR_GE_LONG(&_5$$8, _4$$8)) {
				while (1) {
					if (_3$$8) {
						_4$$8++;
						if (!(ZEPHIR_GE_LONG(&_5$$8, _4$$8))) {
							break;
						}
					} else {
						_3$$8 = 1;
					}
					ZEPHIR_INIT_NVAR(&y);
					ZVAL_LONG(&y, _4$$8);
					zephir_array_fetch(&_6$$9, data, &y, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 25 TSRMLS_CC);
					zephir_is_iterable(&_6$$9, 0, "utils/Numeric.zep", 30);
					ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&_6$$9), _8$$9, _9$$9, _7$$9)
					{
						ZEPHIR_INIT_NVAR(&key);
						if (_9$$9 != NULL) { 
							ZVAL_STR_COPY(&key, _9$$9);
						} else {
							ZVAL_LONG(&key, _8$$9);
						}
						ZEPHIR_INIT_NVAR(&val);
						ZVAL_COPY(&val, _7$$9);
						if (zephir_is_numeric(&val)) {
							ZEPHIR_INIT_NVAR(&_10$$11);
							ZVAL_DOUBLE(&_10$$11, zephir_get_doubleval(&val));
							zephir_array_update_multi(data, &_10$$11 TSRMLS_CC, SL("zz"), 2, &y, &key);
						}
					} ZEND_HASH_FOREACH_END();
					ZEPHIR_INIT_NVAR(&val);
					ZEPHIR_INIT_NVAR(&key);
				}
			}
		} else {
			zephir_is_iterable(data, 1, "utils/Numeric.zep", 37);
			ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(data), _12$$12, _13$$12, _11$$12)
			{
				ZEPHIR_INIT_NVAR(&key);
				if (_13$$12 != NULL) { 
					ZVAL_STR_COPY(&key, _13$$12);
				} else {
					ZVAL_LONG(&key, _12$$12);
				}
				ZEPHIR_INIT_NVAR(&val);
				ZVAL_COPY(&val, _11$$12);
				if (zephir_is_numeric(&val)) {
					ZEPHIR_INIT_NVAR(&_14$$14);
					ZVAL_DOUBLE(&_14$$14, zephir_get_doubleval(&val));
					zephir_array_update_zval(data, &key, &_14$$14, PH_COPY | PH_SEPARATE);
				}
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&val);
			ZEPHIR_INIT_NVAR(&key);
		}
		RETVAL_ZVAL(data, 1, 0);
		RETURN_MM();
	}
	if (ar) {
		ZEPHIR_INIT_VAR(&column);
		array_init(&column);
		zephir_array_fetch_long(&_15$$15, data, 0, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 42 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_16$$15);
		zephir_is_iterable(&_15$$15, 0, "utils/Numeric.zep", 45);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(&_15$$15), _18$$15, _19$$15, _17$$15)
		{
			ZEPHIR_INIT_NVAR(&key);
			if (_19$$15 != NULL) { 
				ZVAL_STR_COPY(&key, _19$$15);
			} else {
				ZVAL_LONG(&key, _18$$15);
			}
			ZEPHIR_INIT_NVAR(&_16$$15);
			ZVAL_COPY(&_16$$15, _17$$15);
			zephir_array_append(&column, &key, PH_SEPARATE, "utils/Numeric.zep", 43);
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&_16$$15);
		ZEPHIR_INIT_NVAR(&key);
		ZEPHIR_CALL_FUNCTION(&_20$$15, "sizeof", &_2, 1, data);
		zephir_check_call_status();
		ZEPHIR_INIT_NVAR(&y_max);
		ZVAL_LONG(&y_max, (zephir_get_numberval(&_20$$15) - 1));
		zephir_array_fetch_long(&_21$$15, data, 0, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 46 TSRMLS_CC);
		ZEPHIR_CALL_FUNCTION(&_22$$15, "sizeof", &_2, 1, &_21$$15);
		zephir_check_call_status();
		ZEPHIR_INIT_VAR(&x_max);
		ZVAL_LONG(&x_max, (zephir_get_numberval(&_22$$15) - 1));
		ZEPHIR_CPY_WRT(&_25$$15, &x_max);
		_24$$15 = 0;
		_23$$15 = 0;
		if (ZEPHIR_GE_LONG(&_25$$15, _24$$15)) {
			while (1) {
				if (_23$$15) {
					_24$$15++;
					if (!(ZEPHIR_GE_LONG(&_25$$15, _24$$15))) {
						break;
					}
				} else {
					_23$$15 = 1;
				}
				ZEPHIR_INIT_NVAR(&x);
				ZVAL_LONG(&x, _24$$15);
				zephir_array_fetch(&_26$$17, &column, &x, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 48 TSRMLS_CC);
				if (zephir_fast_in_array(&_26$$17, &list TSRMLS_CC)) {
					continue;
				}
				ZEPHIR_CPY_WRT(&_29$$17, &y_max);
				_28$$17 = 0;
				_27$$17 = 0;
				if (ZEPHIR_GE_LONG(&_29$$17, _28$$17)) {
					while (1) {
						if (_27$$17) {
							_28$$17++;
							if (!(ZEPHIR_GE_LONG(&_29$$17, _28$$17))) {
								break;
							}
						} else {
							_27$$17 = 1;
						}
						ZEPHIR_INIT_NVAR(&y);
						ZVAL_LONG(&y, _28$$17);
						zephir_array_fetch(&_30$$19, data, &y, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 52 TSRMLS_CC);
						ZEPHIR_OBS_NVAR(&_32$$19);
						zephir_array_fetch(&_32$$19, &column, &x, PH_NOISY, "utils/Numeric.zep", 52 TSRMLS_CC);
						zephir_array_fetch(&_31$$19, &_30$$19, &_32$$19, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 52 TSRMLS_CC);
						if (zephir_is_numeric(&_31$$19)) {
							zephir_array_fetch(&_33$$20, data, &y, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 53 TSRMLS_CC);
							ZEPHIR_OBS_NVAR(&_34$$20);
							ZEPHIR_OBS_NVAR(&_35$$20);
							zephir_array_fetch(&_35$$20, &column, &x, PH_NOISY, "utils/Numeric.zep", 53 TSRMLS_CC);
							zephir_array_fetch(&_34$$20, &_33$$20, &_35$$20, PH_NOISY, "utils/Numeric.zep", 53 TSRMLS_CC);
							zephir_array_fetch(&_36$$20, &column, &x, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 53 TSRMLS_CC);
							ZEPHIR_INIT_NVAR(&_37$$20);
							ZVAL_DOUBLE(&_37$$20, zephir_get_doubleval(&_34$$20));
							zephir_array_update_multi(data, &_37$$20 TSRMLS_CC, SL("zz"), 2, &y, &_36$$20);
						}
					}
				}
			}
		}
	} else {
		zephir_is_iterable(data, 1, "utils/Numeric.zep", 66);
		ZEND_HASH_FOREACH_KEY_VAL(Z_ARRVAL_P(data), _39$$21, _40$$21, _38$$21)
		{
			ZEPHIR_INIT_NVAR(&key);
			if (_40$$21 != NULL) { 
				ZVAL_STR_COPY(&key, _40$$21);
			} else {
				ZVAL_LONG(&key, _39$$21);
			}
			ZEPHIR_INIT_NVAR(&val);
			ZVAL_COPY(&val, _38$$21);
			if (zephir_fast_in_array(&key, &list TSRMLS_CC)) {
				continue;
			}
			zephir_array_fetch(&_41$$22, data, &key, PH_NOISY | PH_READONLY, "utils/Numeric.zep", 62 TSRMLS_CC);
			if (zephir_is_numeric(&_41$$22)) {
				ZEPHIR_INIT_NVAR(&_42$$24);
				ZVAL_DOUBLE(&_42$$24, zephir_get_doubleval(&val));
				zephir_array_update_zval(data, &key, &_42$$24, PH_COPY | PH_SEPARATE);
			}
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&val);
		ZEPHIR_INIT_NVAR(&key);
	}
	RETVAL_ZVAL(data, 1, 0);
	RETURN_MM();

}

