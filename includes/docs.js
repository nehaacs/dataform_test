const nd_list_airports_stndrd = require("includes/table_configs/erp_stn_airportslist_config.js");
const helpers = require("includes/helpers.js");

const nd_list_airports_config = {
    "table_name": nd_list_airports_stndrd.table_name,
    "table_full_name": nd_list_airports_stndrd.table_full_name,
    "schema": [...nd_list_airports_stndrd.schema],
    "description": nd_list_airports_stndrd.table_description,
    "column_description": helpers.tableDescriptiontoObject(nd_list_airports_stndrd.schema),
    "clustering_columns": helpers.convertLabeltoString(nd_list_airports_stndrd.clustering_columns)
}

module.exports = {
    nd_list_airports_config
};
