const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, envVars.JWT_SECRET);
  req.user = decoded;
  next();
};
export default protect;
