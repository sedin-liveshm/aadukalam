const { PrismaClient } = require("../../dbSchema/generated");
const { sessionChecker } = require("../../sessionChecker/sessionChecker");
const prisma = new PrismaClient();
async function codingPage(req, res) {
    try {
        const qname = req.body.qname;
        const studentId = await sessionChecker(req.body.session)
        if (studentId.err == -1) {
            res.status(200).json({
                err: "invalid login"
            })
            return
        }
        if (studentId.uname !== req.body.uname) {
            res.status(200).json({
                err: "U cant access others coding page"
            })
            return
        }
        const qid = await prisma.questions.findFirst({
            where: {
                title: qname
            },
            include: {
                contest: {
                    select: {
                        title: true
                    }
                }
            }
        })

        // Fetch all submissions for this question by this student
        const details = await prisma.submission.findMany({
            where: {
                AND: [
                    { questionId: qid.id },
                    { studentId: studentId.id }
                ]
            }
        })

        let data = {}
        // Sort by startTime descending to get latest
        details.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));

        if (details.length > 0) {
            data = details[0];
        } else {
            res.status(200).json({
                err: "No active submission found. Please start solving first."
            })
            return
        }

        // Reset isFinal to NO if we are re-accessing? 
        // The original code did this, but maybe we shouldn't if it's completed?
        // Original code:
        // await prisma.submission.updateMany({ where: { id: data.id }, data: { isFinal: "NO" } })
        // If the user is coming back to a COMPLETED submission, maybe we shouldn't reset it to NO?
        // But if they want to retry, they need a new submission.
        // For now, let's just return the data so they can view it.

        const tc = await prisma.testCase.findMany({
            where: {
                AND: [
                    { questionId: qid.id },
                ]
            },
            select: {
                type: true,
                inputString: true,
                outputString: true
            }
        })


        const utc = new Date();
        const now = new Date(utc.getTime() + 5.5 * 60 * 60 * 1000)
        const st = new Date(data.startTime)
        const end = new Date(data.maxTimeToSolve)

        const diffSeconds = Math.floor((end - now) / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const remainingSeconds = diffSeconds % 60

        // If contest/time is over, we still might want to show the code?
        // Original code returned "Contest over bruh".
        if (now > end) {
            // If time is over, maybe just return data with 0 time left?
            // But original logic returned error. Let's keep it but maybe allow viewing?
            // For now, stick to original behavior but fix the crash.
            // Actually, if it's practice, time might not matter as much?
            // Let's just return the error if time is up, as per original design.
            res.status(200).json({
                err: "Contest over bruh"
            })
            return
        }

        let ip1 = {};
        let ip2 = {};
        let totaltc = tc.length;
        tc.map((t) => {
            if (t.type === "OPEN1") {
                ip1["Input"] = t.inputString
                ip1["Output"] = t.outputString
            }
            else if (t.type === "OPEN2") {
                ip2["Input"] = t.inputString
                ip2["Output"] = t.outputString
            }
        })

        res.status(200).json({
            msg: "Successful",
            data: data,
            minutes: diffMinutes,
            seconds: remainingSeconds,
            ques: qid,
            ip1: ip1,
            ip2: ip2,
            totaltc: totaltc
        })
        return
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            err: "internal error"
        })
    }
}
module.exports = {
    codingPage
}