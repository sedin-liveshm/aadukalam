const { PrismaClient } = require("../../dbSchema/generated");

const prisma = new PrismaClient();

async function leaderBoard(req, res) {
    try {
        const details = await prisma.submission.findMany({
            include: {
                questions: {
                    include: {
                        contest: true
                    }
                }
            }
        })

        res.status(200).json({
            msg: "Successful",
            data: details
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            err: "internal error"
        })
    }
}

module.exports = {
    leaderBoard
}