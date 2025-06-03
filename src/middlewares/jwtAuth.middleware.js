import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
    const token = req.get("authorization");
    if (!token) {
        return res.status(401).send("Unauthorized token");
    }
    try {
        const payload = jwt.verify(token, "Eet3xj2v7co5jH6nBooRxoYIxV9HZaZp");
        req.user = { id: payload.id, email: payload.email };
        next();
    } catch (err) {
        return res.status(401).send("Unauthorized token");
    }
};

export default jwtAuth;
