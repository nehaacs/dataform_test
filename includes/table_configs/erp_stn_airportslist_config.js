const schema=[
  {
    "column_name": "Facility_ID",
    "data_type": "INTEGER",
    "description": "ID of the Facility"
  },
  {
    "column_name": "Facility_Name",
    "data_type": "STRING",
    "description": "Name of the Facility"
  },
  {
    "column_name": "Facility_Type",
    "data_type": "STRING",
    "description": "Type of Facility- DC or Store"
  },
  {
    "column_name": "Address",
    "data_type": "STRING",
    "description": "Address of the Facility"
  },
  {
    "column_name": "City",
    "data_type": "STRING",
    "description": "Facility Location- City"
  },
  {
    "column_name": "State",
    "data_type": "STRING",
    "description": "Facility Location- State"
  },
  {
    "column_name": "Zip",
    "data_type": "INTEGER",
    "description": "Facility Location- Zip Code"
  },
  {
    "column_name": "Phone_",
    "data_type": "STRING",
    "description": "Phone Number"
  },
  {
    "column_name": "Advertising_Market",
    "data_type": "STRING",
    "description": "Advertising Market"
  },
  {
    "column_name": "Scheduled_Soft_Open_Date",
    "data_type": "DATE",
    "description": "Planned Soft Open Date"
  },
  {
    "column_name": "Warehouse_Assignment",
    "data_type": "STRING",
    "description": "Warehouse Assignment to the DC"
  }
]

const table_description="List of Airports";
const table_name="list_airports";
const table_full_name=`cdf-data-extraction.neha_dataform.list_airports_stnd`;

const clustering_columns=[];

module.exports={schema,table_description,table_name,table_full_name,clustering_columns};

















