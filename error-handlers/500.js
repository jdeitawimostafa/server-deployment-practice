'use strict';

module.exports = (err,req,res,nex) => {
  res.status(500).json({
    status:500,
    message:err.message,
    route:req.path,
  });
};