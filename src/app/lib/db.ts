import mysql, { RowDataPacket } from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1589",
    database: "vlrpt",
    multipleStatements: true,
    typeCast: (field, useDefaultTypeCasting) => {
        if (field.type === "BIT" && field.length === 1) {
            return field.buffer()[0] === 1;
        }
        return useDefaultTypeCasting();
    },
});

export default async function queryData(
    sql: string,
    parameters: Array<string | number | string[]>
) {
    try {
        const [rows] = (await db.query(sql, parameters)) as RowDataPacket[];
        return rows;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
