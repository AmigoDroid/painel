import crypto from "crypto";

const tempUsers = new Map(); // pode trocar por Redis depois

export function fingerprint(req, res, next) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"] || "unknown";
  const acceptLang = req.headers["accept-language"] || "unknown";

  const rawFingerprint = `${ip}|${userAgent}|${acceptLang}`;

  const fingerprintHash = crypto
    .createHash("sha256")
    .update(rawFingerprint)
    .digest("hex");

  const now = Date.now();

  const userData = tempUsers.get(fingerprintHash) || {
    ip,
    userAgent,
    acceptLang,
    firstAccess: now,
    lastAccess: now,
    hits: 0,
    intervals: []
  };

  if (userData.lastAccess) {
    userData.intervals.push(now - userData.lastAccess);
  }

  userData.lastAccess = now;
  userData.hits += 1;

  tempUsers.set(fingerprintHash, userData);

  req.visitor = {
    fingerprintHash,
    data: userData
  };

  next();
}
