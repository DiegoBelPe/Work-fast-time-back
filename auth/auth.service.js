const jsonwebtoken = require('jsonwebtoken');

async function verifyToken(token) {
  try {
    const payload = await jsonwebtoken.Verify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

function signToken() {
  const token = jsonwebtoken.Sign(payload, secret, { expiresIn: '1h' });
  return token;
}

module.exports = {
  signToken,
};
