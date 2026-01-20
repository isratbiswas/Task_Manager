import { CatchAsync } from "../../utils/CatchAsync";

const login = CatchAsync(async (req, res) => {
  const loginInfo = await AuthService.login(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: loginInfo,
  });
});

const logout = CatchAsync(async (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  console.log("logout1");
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Your logout successfully",
    data: null,
  });
});

export const AuthController = {
  login,
  logout,
};
