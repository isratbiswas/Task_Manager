const createUser = CatchAsync(async (req, res) => {
  const user = await UserService.createUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User created successfully",
    data: user,
  });
});

export const UserController = {
  createUser,
};
