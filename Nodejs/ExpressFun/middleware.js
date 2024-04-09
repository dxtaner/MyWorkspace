const accessControl = (req, res, next) => {
  const access = true;
  if (!access) {
    res.status(401).json({
      success: false,
      message: "yu are not authriezed",
    });
  }
  next();
};

module.exports = { accessControl };
