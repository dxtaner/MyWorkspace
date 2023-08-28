var shortid = require("shortid");

function attachTrace(req, res, next) {
  // Generate a unique id for the request
  const requestId = shortid.generate();

  // Get the current timestamp in UTC
  const timestamp = new Date();
  // const timestamp = new Date().toISOString();

  // Extract the path from the request
  const path = req.path;

  // Create the trace object
  const trace = {
    id: requestId,
    timestamp: timestamp,
    path: path,
  };

  // Attach the trace object to the request
  req.trace = trace;

  // Set the x-request-id header in the response
  res.setHeader("x-request-id", requestId);

  // Call the next middleware or route handler
  next();
}

module.exports = attachTrace;

// Bu işlev sayesinde her gelen isteğe otomatik olarak bir iz sürme kimliği eklenir ve isteğin takip edilmesi sağlanır.
// Bu tür izleme özellikleri, özellikle büyük ölçekli uygulamalarda isteklerin izini sürmek ve hataları tespit etmek için
// kullanışlıdır.
