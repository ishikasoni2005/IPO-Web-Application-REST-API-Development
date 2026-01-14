import express from "express";
import pool from "../db.js";

const router = express.Router();

// POST /api/ipos - Create a new IPO
router.post("/", async (req, res) => {
  try {
    const { company_name, issue_date, price_band, lot_size, description } = req.body;
    const result = await pool.query(
      "INSERT INTO ipos (company_name, issue_date, price_band, lot_size, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [company_name, issue_date, price_band, lot_size, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/ipos - Get all IPOs
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ipos ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/ipos/:id - Get single IPO by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM ipos WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "IPO not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
