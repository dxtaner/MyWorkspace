var data = require("../data-store");
var projects = data.getProjects();
var router = require("express").Router();

router.get("/", (req, res) => {
  const projects = data.getProjects();
  if (projects.length === 0) {
    return res.status(200).json([]);
  }
  const sortedProjects = projects.sort((a, b) => a.id - b.id);
  res.status(200).json(sortedProjects);
});

router.get("/active", (req, res) => {
  const projects = data.getProjects().filter((p) => p.isActive);
  const sortedProjects = projects.sort((a, b) => a.id - b.id);
  if (sortedProjects.length === 0) {
    return res.status(200).json([]);
  }
  res.status(200).json(sortedProjects);
});

router.get("/:id", (req, res) => {
  const projectId = parseInt(req.params.id);
  const projects = data.getProjects();
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return res.status(404).json({ message: "No Project Found" });
  }
  res.status(200).json(project);
});

module.exports = router;
