// functionto convert a label object to string

function convertLabeltoString (labels){
    return Object.entries(labels).map(([key,value]) => `("${key}","${value}")`).join(", ")
}

// returns the table column name and its corresponding column descripption in key:value format in a JS Object.
function tableDescriptiontoObject(schema){
    const desc_obj={};
    schema.forEach(elem => {desc_obj[String(elem.name)]=elem.type });
    return desc_obj;
  }

// returns the list of columns to be used in SQL Queries
function to_bq(schema){
    column_list=""
    schema.forEach(elem => {elem==schema[schema.length-1] ? column_list+=elem.column_name : column_list+=elem.column_name+", \n"})
    return column_list
}

function to_schema(table){
    const output = [];
    for (const item of table) {
        const { name, type, description } = item;
        output.push({ column_name:name, data_type:type, description });
    }
    return JSON.stringify(output,null,2);
}

module.exports={convertLabeltoString,tableDescriptiontoObject,to_bq,to_schema};
