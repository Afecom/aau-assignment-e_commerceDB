export default function errorHandler(err, req, res, next){
    const statusCode = err.code || 500
    const message = err.message || "Internal server error"

    res.status(statusCode).json({
        status: "error",
        statusCode: statusCode,
        message: message
    })
}