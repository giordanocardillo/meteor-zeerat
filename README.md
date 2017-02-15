[![Build Status](https://travis-ci.org/giordanocardillo/meteor-zeerat.svg?branch=master)](https://travis-ci.org/giordanocardillo/meteor-zeerat)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c8014e353e14572b832db6c4afb81dd)](https://www.codacy.com/app/giordanocardillo/meteor-zeerat?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=giordanocardillo/meteor-zeerat&amp;utm_campaign=Badge_Grade)

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