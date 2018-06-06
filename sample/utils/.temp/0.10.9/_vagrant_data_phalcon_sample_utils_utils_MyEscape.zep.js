[
    {
        "type": "namespace",
        "name": "Utils",
        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "MyEscape",
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
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 5,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "list",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                "line": 5,
                                "char": 64
                            },
                            "reference": 0,
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 5,
                            "char": 64
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "and",
                                "left": {
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
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 6,
                                                    "char": 26
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 6,
                                                "char": 26
                                            }
                                        ],
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 6,
                                        "char": 29
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 6,
                                    "char": 29
                                },
                                "right": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_object",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "data",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 6,
                                                    "char": 46
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 6,
                                                "char": 46
                                            }
                                        ],
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 6,
                                        "char": 48
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 6,
                                    "char": 48
                                },
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                "line": 6,
                                "char": 48
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 7,
                                        "char": 24
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 8,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 9,
                            "char": 11
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
                                                    "type": "fcall",
                                                    "name": "json_encode",
                                                    "call-type": 1,
                                                    "parameters": [
                                                        {
                                                            "parameter": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 9,
                                                                "char": 48
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                            "line": 9,
                                                            "char": 48
                                                        },
                                                        {
                                                            "parameter": {
                                                                "type": "constant",
                                                                "value": "JSON_NUMERIC_CHECK",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 9,
                                                                "char": 67
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                            "line": 9,
                                                            "char": 67
                                                        }
                                                    ],
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 9,
                                                    "char": 68
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 9,
                                                "char": 68
                                            },
                                            {
                                                "parameter": {
                                                    "type": "bool",
                                                    "value": "true",
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 9,
                                                    "char": 73
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 9,
                                                "char": 73
                                            }
                                        ],
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 9,
                                        "char": 74
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 9,
                                    "char": 74
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 10,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "equals",
                                "left": {
                                    "type": "variable",
                                    "value": "list",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 10,
                                    "char": 18
                                },
                                "right": {
                                    "type": "null",
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 10,
                                    "char": 25
                                },
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                "line": 10,
                                "char": 25
                            },
                            "statements": [
                                {
                                    "type": "return",
                                    "expr": {
                                        "type": "variable",
                                        "value": "data",
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 11,
                                        "char": 24
                                    },
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 12,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 13,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "list",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                "line": 13,
                                "char": 28
                            },
                            "value": "column",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "not",
                                        "left": {
                                            "type": "isset",
                                            "left": {
                                                "type": "list",
                                                "left": {
                                                    "type": "array-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "data",
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                        "line": 14,
                                                        "char": 27
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "column",
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                        "line": 14,
                                                        "char": 34
                                                    },
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 14,
                                                    "char": 35
                                                },
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 14,
                                                "char": 37
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                            "line": 14,
                                            "char": 37
                                        },
                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                        "line": 14,
                                        "char": 37
                                    },
                                    "statements": [
                                        {
                                            "type": "for",
                                            "expr": {
                                                "type": "variable",
                                                "value": "data",
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 15,
                                                "char": 33
                                            },
                                            "value": "row",
                                            "reverse": 0,
                                            "statements": [
                                                {
                                                    "type": "fcall",
                                                    "expr": {
                                                        "type": "fcall",
                                                        "name": "settype",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "row",
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                        "line": 16,
                                                                        "char": 32
                                                                    },
                                                                    "right": {
                                                                        "type": "variable",
                                                                        "value": "column",
                                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                        "line": 16,
                                                                        "char": 39
                                                                    },
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                    "line": 16,
                                                                    "char": 40
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 16,
                                                                "char": 40
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "char",
                                                                    "value": "string",
                                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                    "line": 16,
                                                                    "char": 48
                                                                },
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 16,
                                                                "char": 48
                                                            }
                                                        ],
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                        "line": 16,
                                                        "char": 49
                                                    },
                                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                    "line": 17,
                                                    "char": 17
                                                }
                                            ],
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                            "line": 18,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "fcall",
                                            "expr": {
                                                "type": "fcall",
                                                "name": "settype",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "array-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "data",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 19,
                                                                "char": 29
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "column",
                                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                                "line": 19,
                                                                "char": 36
                                                            },
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                            "line": 19,
                                                            "char": 37
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                        "line": 19,
                                                        "char": 37
                                                    },
                                                    {
                                                        "parameter": {
                                                            "type": "char",
                                                            "value": "string",
                                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                            "line": 19,
                                                            "char": 45
                                                        },
                                                        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                        "line": 19,
                                                        "char": 45
                                                    }
                                                ],
                                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                                "line": 19,
                                                "char": 46
                                            },
                                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                            "line": 20,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                    "line": 21,
                                    "char": 9
                                }
                            ],
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 22,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "data",
                                "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                                "line": 22,
                                "char": 20
                            },
                            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                            "line": 23,
                            "char": 5
                        }
                    ],
                    "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
                    "line": 5,
                    "last-line": 24,
                    "char": 26
                }
            ],
            "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/vagrant_data\/phalcon\/sample\/utils\/utils\/MyEscape.zep",
        "line": 3,
        "char": 5
    }
]