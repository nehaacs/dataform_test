const schema=[
    {
      "column_name": "ID",
      "data_type": "INTEGER",
      "description": "Unique Identifier",
    },
    {
      "column_name": "Name",
      "data_type": "STRING",
      "description": "Airport Name",
    },
    {
      "column_name": "Iata",
      "data_type": "STRING",
      "description": "Airport Code",
    },
    {
      "column_name": "Icao",
      "data_type": "STRING",
      "description": "Row Code",
    },
    {
      "column_name": "Country",
      "data_type": "STRING",
      "description": "Country Name",
    },
    {
      "column_name": "City",
      "data_type": "STRING",
      "description": "City Name",
    },
    {
      "column_name": "Lat",
      "data_type": "FLOAT",
      "description": "Latitutde",
    },
    {
      "column_name": "Long",
      "data_type": "FLOAT",
      "description": "Longitude",
    },
    {
      "column_name": "Altitude",
      "data_type": "INTEGER",
      "description": "Altitude (in meters)",
    },
    {
      "column_name": "Size",
      "data_type": "INTEGER",
      "description": "Area (in meter square)",
    }
  ]

const table_description="List of Airports";
const table_name="list_airports";
const table_full_name=`cdf-data-extraction.neha_dataform.list_airports_stnd`;

const clustering_columns=[];

module.exports={schema,table_description,table_name,table_full_name,clustering_columns};

















