/**
 * @class CSV-Export
 * @constructor
 */
define(['text!/admin/api/form/templates/csv-export.html'], function(form) {

    'use strict';

    return {
        type: 'csv-export',

        getForm: function() {
            return form;
        }
    };
});
