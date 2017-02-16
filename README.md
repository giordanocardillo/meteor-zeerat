[![Travis](https://img.shields.io/travis/giordanocardillo/meteor-zeerat.svg?style=flat-square)](https://travis-ci.org/giordanocardillo/meteor-zeerat) 
[![Codacy grade](https://img.shields.io/codacy/grade/7c8014e353e14572b832db6c4afb81dd.svg?style=flat-square)](https://www.codacy.com/app/giordanocardillo/meteor-zeerat?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=giordanocardillo/meteor-zeerat&amp;utm_campaign=Badge_Grade) 
[![Code Climate](https://img.shields.io/codeclimate/github/giordanocardillo/meteor-zeerat.svg?style=flat-square)](https://codeclimate.com/github/giordanocardillo/meteor-zeerat) 
[![Code Climate Issues](https://img.shields.io/codeclimate/issues/github/giordanocardillo/meteor-zeerat.svg?style=flat-square)](https://codeclimate.com/github/giordanocardillo/meteor-zeerat)

# giordanocardillo:zeerat

This package adds the Zeerat monitoring code to your Meteor application.

## Installation

Run `meteor add giordanocardillo:zeerat` and configure the settings.json file:

```json
{
   "public": {
     "zeerat": {
       "id": "<YOUR ZEERAT ID>"
     }
   }
}
```

Optionally, you can add also a key `disabled` with a true/false value to disable it for the specific environment.