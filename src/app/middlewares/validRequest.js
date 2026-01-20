export const validateRequest = (ZodSchema) => async (req, res, next) => {
  try {
    req.body = await ZodSchema.parseAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
