const authentication=require("./auth")
const errorHandlerMiddleware=require("./errorHandler")
const notFound=require("./notFound")

module.exports={
    authentication,
    errorHandlerMiddleware,
    notFound
}