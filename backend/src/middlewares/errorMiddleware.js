const errorMiddleware = (err, _req, res, _next) => {
  const { status, message } = err;
  console.log('error');
  res.status(status || 500).json({ message });
};

module.exports = errorMiddleware;
