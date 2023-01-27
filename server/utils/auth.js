const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

if (!secret) throw new Error("JWT_SECRET missing from server .env file!");
const expiration = "24h";

module.exports = {
  //* Middleware to check for the JWT then verify it
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.log(error);
      console.log("Invalid token!");
    }
    return req;
  },

  //* JWT function to sign the token
  signToken: function ({ id }) {
    const payload = { id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
