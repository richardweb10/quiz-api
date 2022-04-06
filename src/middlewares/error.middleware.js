module.exports = (err, req, res, next) => {
    const httpStatus = err.status || 400;
  
    return res.status(httpStatus).send({
      status: httpStatus,
      message: err.message || "Se presentó un error en la operación, por favor comunicate con soporte"
    });
  };
  