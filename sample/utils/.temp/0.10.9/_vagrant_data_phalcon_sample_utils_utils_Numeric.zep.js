[
    {
        "type": "namespace",
        "name": "Utils",
        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Numeric",
        "abstract": 0,
        "final": 0,
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "convert",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "data",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 5,
                            "char": 44
                        },
                        {
                            "type": "parameter",
                            "name": "list",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 5,
                                "char": 62
                            },
                            "reference": 0,
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 5,
                            "char": 62
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "json",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 17
                                },
                                {
                                    "variable": "column",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 24
                                },
                                {
                                    "variable": "x_max",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 30
                                },
                                {
                                    "variable": "y_max",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 36
                                },
                                {
                                    "variable": "x",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 38
                                },
                                {
                                    "variable": "y",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 40
                                },
                                {
                                    "variable": "key",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 44
                                },
                                {
                                    "variable": "val",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 48
                                },
                                {
                                    "variable": "ar",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 6,
                                    "char": 51
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 7,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "fcall",
                                "name": "is_object",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 7,
                                            "char": 26
                                        },
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 7,
                                        "char": 26
                                    }
                                ],
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 7,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "json",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "json_encode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "data",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 8,
                                                            "char": 40
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 8,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 8,
                                                "char": 41
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 8,
                                            "char": 41
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 9,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "data",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "json_decode",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "json",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 9,
                                                            "char": 40
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 9,
                                                        "char": 40
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "bool",
                                                            "value": "true",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 9,
                                                            "char": 45
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 9,
                                                        "char": 45
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 9,
                                                "char": 46
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 9,
                                            "char": 46
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 10,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 11,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "not",
                                "left": {
                                    "type": "fcall",
                                    "name": "is_array",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 11,
                                                "char": 26
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 11,
                                            "char": 26
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 11,
                                    "char": 28
                                },
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 11,
                                "char": 28
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 12,
                                        "char": 24
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 13,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 14,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "ar",
                                    "expr": {
                                        "type": "bool",
                                        "value": "false",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 14,
                                        "char": 23
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 14,
                                    "char": 23
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 15,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 15,
                                "char": 25
                            },
                            "value": "val",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "is_array",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "val",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 16,
                                                    "char": 28
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 16,
                                                "char": 28
                                            }
                                        ],
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 16,
                                        "char": 30
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "ar",
                                                    "expr": {
                                                        "type": "bool",
                                                        "value": "true",
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 17,
                                                        "char": 30
                                                    },
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 17,
                                                    "char": 30
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 18,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 19,
                                    "char": 17
                                },
                                {
                                    "type": "break",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 20,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 21,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "variable",
                                    "value": "list",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 21,
                                    "char": 18
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 21,
                                    "char": 25
                                },
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 21,
                                "char": 25
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "variable",
                                        "value": "ar",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 22,
                                        "char": 19
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "y_max",
                                                    "expr": {
                                                        "type": "sub",
                                                        "left": {
                                                            "type": "fcall",
                                                            "name": "sizeof",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "variable",
                                                                        "value": "data",
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 23,
                                                                        "char": 40
                                                                    },
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 23,
                                                                    "char": 40
                                                                }
                                                            ],
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 23,
                                                            "char": 42
                                                        },
                                                        "right": {
                                                            "type": "int",
                                                            "value": "1",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 23,
                                                            "char": 45
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 23,
                                                        "char": 45
                                                    },
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 23,
                                                    "char": 45
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 24,
                                            "char": 19
                                        },
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "range",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 24,
                                                            "char": 33
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 24,
                                                        "char": 33
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "y_max",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 24,
                                                            "char": 39
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 24,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 24,
                                                "char": 41
                                            },
                                            "value": "y",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "for",
                                                    "expr": {
                                                        "type": "array-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "data",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 25,
                                                            "char": 40
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "y",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 25,
                                                            "char": 42
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 25,
                                                        "char": 44
                                                    },
                                                    "key": "key",
                                                    "value": "val",
                                                    "reverse": 0,
                                                    "statements": [
                                                        {
                                                            "type": "if",
                                                            "expr": {
                                                                "type": "fcall",
                                                                "name": "is_numeric",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "variable",
                                                                            "value": "val",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 26,
                                                                            "char": 42
                                                                        },
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 26,
                                                                        "char": 42
                                                                    }
                                                                ],
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 26,
                                                                "char": 44
                                                            },
                                                            "statements": [
                                                                {
                                                                    "type": "let",
                                                                    "assignments": [
                                                                        {
                                                                            "assign-type": "array-index",
                                                                            "operator": "assign",
                                                                            "variable": "data",
                                                                            "index-expr": [
                                                                                {
                                                                                    "type": "variable",
                                                                                    "value": "y",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 27,
                                                                                    "char": 39
                                                                                },
                                                                                {
                                                                                    "type": "variable",
                                                                                    "value": "key",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 27,
                                                                                    "char": 44
                                                                                }
                                                                            ],
                                                                            "expr": {
                                                                                "type": "cast",
                                                                                "left": "double",
                                                                                "right": {
                                                                                    "type": "variable",
                                                                                    "value": "val",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 27,
                                                                                    "char": 59
                                                                                },
                                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                "line": 27,
                                                                                "char": 59
                                                                            },
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 27,
                                                                            "char": 59
                                                                        }
                                                                    ],
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 28,
                                                                    "char": 25
                                                                }
                                                            ],
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 29,
                                                            "char": 21
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 30,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 31,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 32,
                                                "char": 37
                                            },
                                            "key": "key",
                                            "value": "val",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "if",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "is_numeric",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "val",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 33,
                                                                    "char": 38
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 33,
                                                                "char": 38
                                                            }
                                                        ],
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 33,
                                                        "char": 40
                                                    },
                                                    "statements": [
                                                        {
                                                            "type": "let",
                                                            "assignments": [
                                                                {
                                                                    "assign-type": "array-index",
                                                                    "operator": "assign",
                                                                    "variable": "data",
                                                                    "index-expr": [
                                                                        {
                                                                            "type": "variable",
                                                                            "value": "key",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 34,
                                                                            "char": 37
                                                                        }
                                                                    ],
                                                                    "expr": {
                                                                        "type": "cast",
                                                                        "left": "double",
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "val",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 34,
                                                                            "char": 52
                                                                        },
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 34,
                                                                        "char": 52
                                                                    },
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 34,
                                                                    "char": 52
                                                                }
                                                            ],
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 35,
                                                            "char": 21
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 36,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 37,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 38,
                                    "char": 18
                                },
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 38,
                                        "char": 24
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 39,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 40,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "ar",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 40,
                                "char": 15
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "column",
                                            "expr": {
                                                "type": "empty-array",
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 41,
                                                "char": 28
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 41,
                                            "char": 28
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 42,
                                    "char": 15
                                },
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "array-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "data",
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 42,
                                            "char": 30
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "0",
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 42,
                                            "char": 32
                                        },
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 42,
                                        "char": 34
                                    },
                                    "key": "key",
                                    "value": "_",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable-append",
                                                    "operator": "assign",
                                                    "variable": "column",
                                                    "expr": {
                                                        "type": "variable",
                                                        "value": "key",
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 43,
                                                        "char": 35
                                                    },
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 43,
                                                    "char": 35
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 44,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 45,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "y_max",
                                            "expr": {
                                                "type": "sub",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "sizeof",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 45,
                                                                "char": 36
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 45,
                                                            "char": 36
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 45,
                                                    "char": 38
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "1",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 45,
                                                    "char": 41
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 45,
                                                "char": 41
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 45,
                                            "char": 41
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 46,
                                    "char": 15
                                },
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "x_max",
                                            "expr": {
                                                "type": "sub",
                                                "left": {
                                                    "type": "fcall",
                                                    "name": "sizeof",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "data",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 46,
                                                                    "char": 36
                                                                },
                                                                "right": {
                                                                    "type": "int",
                                                                    "value": "0",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 46,
                                                                    "char": 38
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 46,
                                                                "char": 39
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 46,
                                                            "char": 39
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 46,
                                                    "char": 41
                                                },
                                                "right": {
                                                    "type": "int",
                                                    "value": "1",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 46,
                                                    "char": 44
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 46,
                                                "char": 44
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 46,
                                            "char": 44
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 47,
                                    "char": 15
                                },
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "fcall",
                                        "name": "range",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "int",
                                                    "value": "0",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 47,
                                                    "char": 29
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 47,
                                                "char": 29
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "x_max",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 47,
                                                    "char": 35
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 47,
                                                "char": 35
                                            }
                                        ],
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 47,
                                        "char": 37
                                    },
                                    "value": "x",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "in_array",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "column",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 48,
                                                                "char": 35
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "x",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 48,
                                                                "char": 37
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 48,
                                                            "char": 38
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 48,
                                                        "char": 38
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "list",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 48,
                                                            "char": 43
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 48,
                                                        "char": 43
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 48,
                                                "char": 45
                                            },
                                            "statements": [
                                                {
                                                    "type": "continue",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 50,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 51,
                                            "char": 19
                                        },
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "range",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "int",
                                                            "value": "0",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 51,
                                                            "char": 33
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 51,
                                                        "char": 33
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "y_max",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 51,
                                                            "char": 39
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 51,
                                                        "char": 39
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 51,
                                                "char": 41
                                            },
                                            "value": "y",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "if",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "is_numeric",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "array-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "data",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 52,
                                                                            "char": 39
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "y",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 52,
                                                                            "char": 41
                                                                        },
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 52,
                                                                        "char": 42
                                                                    },
                                                                    "right": {
                                                                        "type": "array-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "column",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 52,
                                                                            "char": 49
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "x",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 52,
                                                                            "char": 51
                                                                        },
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 52,
                                                                        "char": 52
                                                                    },
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 52,
                                                                    "char": 53
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 52,
                                                                "char": 53
                                                            }
                                                        ],
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 52,
                                                        "char": 55
                                                    },
                                                    "statements": [
                                                        {
                                                            "type": "let",
                                                            "assignments": [
                                                                {
                                                                    "assign-type": "array-index",
                                                                    "operator": "assign",
                                                                    "variable": "data",
                                                                    "index-expr": [
                                                                        {
                                                                            "type": "variable",
                                                                            "value": "y",
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 53,
                                                                            "char": 35
                                                                        },
                                                                        {
                                                                            "type": "array-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "column",
                                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                "line": 53,
                                                                                "char": 43
                                                                            },
                                                                            "right": {
                                                                                "type": "variable",
                                                                                "value": "x",
                                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                "line": 53,
                                                                                "char": 45
                                                                            },
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 53,
                                                                            "char": 46
                                                                        }
                                                                    ],
                                                                    "expr": {
                                                                        "type": "cast",
                                                                        "left": "double",
                                                                        "right": {
                                                                            "type": "array-access",
                                                                            "left": {
                                                                                "type": "array-access",
                                                                                "left": {
                                                                                    "type": "variable",
                                                                                    "value": "data",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 53,
                                                                                    "char": 62
                                                                                },
                                                                                "right": {
                                                                                    "type": "variable",
                                                                                    "value": "y",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 53,
                                                                                    "char": 64
                                                                                },
                                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                "line": 53,
                                                                                "char": 65
                                                                            },
                                                                            "right": {
                                                                                "type": "array-access",
                                                                                "left": {
                                                                                    "type": "variable",
                                                                                    "value": "column",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 53,
                                                                                    "char": 72
                                                                                },
                                                                                "right": {
                                                                                    "type": "variable",
                                                                                    "value": "x",
                                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                    "line": 53,
                                                                                    "char": 74
                                                                                },
                                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                                "line": 53,
                                                                                "char": 75
                                                                            },
                                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                            "line": 53,
                                                                            "char": 76
                                                                        },
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                        "line": 53,
                                                                        "char": 76
                                                                    },
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 53,
                                                                    "char": 76
                                                                }
                                                            ],
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 54,
                                                            "char": 21
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 55,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 56,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 57,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "for",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                        "line": 58,
                                        "char": 33
                                    },
                                    "key": "key",
                                    "value": "val",
                                    "reverse": 0,
                                    "statements": [
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "in_array",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "key",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 59,
                                                            "char": 32
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 59,
                                                        "char": 32
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "list",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 59,
                                                            "char": 37
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 59,
                                                        "char": 37
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 59,
                                                "char": 39
                                            },
                                            "statements": [
                                                {
                                                    "type": "continue",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 61,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 62,
                                            "char": 18
                                        },
                                        {
                                            "type": "if",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "is_numeric",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 62,
                                                                "char": 35
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "key",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 62,
                                                                "char": 39
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 62,
                                                            "char": 40
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                        "line": 62,
                                                        "char": 40
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                "line": 62,
                                                "char": 42
                                            },
                                            "statements": [
                                                {
                                                    "type": "let",
                                                    "assignments": [
                                                        {
                                                            "assign-type": "array-index",
                                                            "operator": "assign",
                                                            "variable": "data",
                                                            "index-expr": [
                                                                {
                                                                    "type": "variable",
                                                                    "value": "key",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 63,
                                                                    "char": 33
                                                                }
                                                            ],
                                                            "expr": {
                                                                "type": "cast",
                                                                "left": "double",
                                                                "right": {
                                                                    "type": "variable",
                                                                    "value": "val",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                    "line": 63,
                                                                    "char": 48
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                                "line": 63,
                                                                "char": 48
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                            "line": 63,
                                                            "char": 48
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                                    "line": 64,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                            "line": 65,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                    "line": 66,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 67,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                                "line": 67,
                                "char": 20
                            },
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                            "line": 68,
                            "char": 5
                        }
                    ],
                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
                    "line": 5,
                    "last-line": 70,
                    "char": 26
                }
            ],
            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/Numeric.zep",
        "line": 3,
        "char": 5
    }
]