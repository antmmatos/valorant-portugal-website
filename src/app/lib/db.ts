import mysql from "mysql2/promise";

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

export default async function query({
    query,
    values,
}: {
    query: string;
    values?: any;
}) {
    try {
        const [results] = await db.query(query, values || []);
        return results;
    } catch (error) {
        return { error };
    }
}