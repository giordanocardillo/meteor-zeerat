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