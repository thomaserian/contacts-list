module.exports.customError=(errorCode,status)=>
{
  let tempError=new Error();
  tempError.customCode=errorCode;
  tempError.status=status;
  return tempError;
}