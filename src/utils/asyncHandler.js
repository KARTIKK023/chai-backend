const asyncHandler = (requestHandler) => {
    (req,res,next) => {
     Promise.resolve(requestHandler(req,res,next)).catch((error)=> next(error))
    }
}

export { asyncHandler };













//const asyncHandler = () => {};
//const asyncHandler = () => { () => {} };
//const asyncHandler = () => () => {};




/* type one
const asyncHandler = (fn) => async (re,res,next) => {
    try {
        await fn(re,res,next);
    } catch (error) {
        res.send(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
    */