Package.describe({
  name: 'giordanocardillo:zeerat',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor Zeerat monitoring package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/giordanocardillo/meteor-zeerat.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('client/zeerat.js', 'client');
});