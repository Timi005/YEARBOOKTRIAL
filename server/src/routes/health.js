import { Router } from "express";

const router = Router();

// GET /api/health: a tiny "are you awake?" check.
// The frontend calls it to prove the two halves of the site can talk.
router.get("/", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

export default router;
