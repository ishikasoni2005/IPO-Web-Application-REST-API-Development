import pool from "../db.js";
// In ipoController.js
export const getIPOById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ipos WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Not found" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// In ipoController.js
export const createIPO = async (req, res) => {
  const { company_name, issue_date, price_band, lot_size, description } = req.body;
  try {
    await pool.query(
      "INSERT INTO ipos (company_name, issue_date, price_band, lot_size, description) VALUES ($1, $2, $3, $4, $5)",
      [company_name, issue_date, price_band, lot_size, description]
    );
    res.status(201).json({ message: "IPO created" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

