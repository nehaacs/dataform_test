const nd_dc_store_stndrd = require("includes/table_configs/raw_standardized/erp_stn_dc_stores_config.js");
const helpers = require("includes/helpers.js");

const nd_dc_stores_config = {
    "table_name": nd_dc_store_stndrd.table_name,
    "table_full_name": nd_dc_store_stndrd.table_full_name,
    "schema": [...nd_dc_store_stndrd.schema],
    "description": nd_dc_store_stndrd.table_description,
    "column_description": helpers.tableDescriptiontoObject(nd_dc_store_stndrd.schema),
    "clustering_columns": helpers.convertLabeltoString(nd_dc_store_stndrd.clustering_columns)
}

module.exports = {
    nd_dc_stores_config
};
