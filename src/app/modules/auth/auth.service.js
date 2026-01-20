import bcryptjs from "bcryptjs";
const login = async (payload) => {
  const { email, password } = payload;
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email does not exist");
  }
  const isPasswordMatched = await bcryptjs.compare(
    password,
    isUserExist.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid password");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const AuthService = {
  login,
};
