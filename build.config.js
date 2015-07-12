/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',
  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
    jsunit: ['src/**/*.spec.js'],
    tpl: ['src/**/*.tpl.html'],
    html: ['src/index.html'],
    main_less: 'src/less/main.less',
    less: ['src/**/*.less'],
    extra: ['src/.htaccess']
  },
  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },
  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app. Preferably stylesheets should be imported in
   * `main.less`.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'vendor/angular-native-dragdrop/draganddrop.js',
      'vendor/angular-images-loaded/angular-images-loaded.js',
      'vendor/ng-file-upload/ng-file-upload-shim.js',
      'vendor/ng-file-upload/ng-file-upload.js',
      'vendor/angular-aside/dist/js/angular-aside.js',
      'vendor/intl-tel-input/build/js/intlTelInput.js',
      'vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
      'vendor/international-phone-number/releases/international-phone-number.js',
      'vendor/signature_pad/signature_pad.js',
      'vendor/signature-pad-angular/src/ng-signature-pad.js',
      'vendor/ng-signature-pad/dist/ng-signature-pad.js',
      'vendor/legalthings.*/src/**/*.js',
      '!vendor/legalthings.*/src/**/*.spec.js'
    ],
    css: [
      'vendor/**/*.css',
      '!vendor/intl-tel-input/examples/css/*.css'
    ],
    html: ['vendor/legalthings.*/**/*.tpl.html'],
    less: ['vendor/**/*.less'],
    less_js: 'vendor/less/dist/less.js',
    assets: ['vendor/intl-tel-input/build/img/*.png']
  }
};
