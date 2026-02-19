import db from "../config/db.js";

const tableMap = {
  Education: "education_reports",
  Health: "health_reports",
  Revenue: "revenue_reports",
  Police: "police_reports",
  Agriculture: "agriculture_reports",
  Transport: "transport_reports",
  Social_Welfare: "social_welfare_reports",
  Mnrega: "mnrega_reports",
};

export const getDashboardData = async (role) => {

  if (role === "DC_Admin") {

    const results = {};

    for (const key in tableMap) {
      const [rows] = await db.query(`SELECT * FROM ${tableMap[key]}`);
      results[key] = rows;
    }

    return results;

  } else {

    const tableName = tableMap[role];

    if (!tableName) {
      throw new Error("Invalid role");
    }

    const [rows] = await db.query(`SELECT * FROM ${tableName}`);
    return rows;
  }
};
