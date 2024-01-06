import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = async (plainTextPassword) => {
  const hashedPassword = await bcrypt.hash(
    plainTextPassword.toString(),
    saltRounds
  );
  return hashedPassword;
};

export default hashPassword;
