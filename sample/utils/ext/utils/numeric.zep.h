
extern zend_class_entry *utils_numeric_ce;

ZEPHIR_INIT_CLASS(Utils_Numeric);

PHP_METHOD(Utils_Numeric, convert);

ZEND_BEGIN_ARG_INFO_EX(arginfo_utils_numeric_convert, 0, 0, 1)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_ARRAY_INFO(0, list, 1)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(utils_numeric_method_entry) {
	PHP_ME(Utils_Numeric, convert, arginfo_utils_numeric_convert, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
