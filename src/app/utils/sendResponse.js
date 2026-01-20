const sendResponse = (res, data) => {
  res.status(data?.statusCode || 200).json({
    statusCode: data?.statusCode,
    success: data?.success,
    message: data?.message,
    data: data.data || null,
  });
};
export default sendResponse;
