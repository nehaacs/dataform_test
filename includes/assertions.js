/* Functions to perform Data Sanity Checks */

function notNullandBlank(table, columns) {
    return `
        SELECT * FROM
        ${table} WHERE
        ${columns.map(column=>`${column} is NULL or TRIM(${column})=""`).join((" AND \n"))}`
}

module.exports={notNullandBlank};