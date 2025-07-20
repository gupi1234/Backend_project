import { asyncHandlers } from "../utils/asyncHandlers.js";
import {} from "module";

const registerUser = asyncHandlers(async (req, res) => {
  res.status(200).json({ message: "ok" });
});

export { registerUser };
