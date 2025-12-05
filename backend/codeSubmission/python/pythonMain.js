const file = require('fs');
const { PrismaClient } = require('../../dbSchema/generated');
const prisma = new PrismaClient();

// Python execution service URL
const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'https://aadukalam-python.onrender.com';

async function executePythonCode(code, input) {
    try {
        const response = await fetch(`${PYTHON_SERVICE_URL}/execute`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, input }),
            timeout: 15000
        });
        
        if (!response.ok) {
            throw new Error(`Service responded with ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Python service error:', error);
        throw error;
    }
}

async function PythonMain(allData) {
    console.log("inside py main -")
    try {
        const testCases = await prisma.testCase.findMany({
            where: { questionId: allData.qId }
        });

        const question = await prisma.questions.findFirst({
            where: { id: allData.qId },
        });

        console.log("running test cases via Python service")
        let count = 0;
        let op1 = "", op2 = "";
        
        const resArr = await Promise.all(
            testCases.map(async (testcase) => {
                try {
                    const result = await executePythonCode(allData.code, testcase.inputString);
                    
                    let runOP = {
                        msg: "Successful",
                        count: 0,
                        op: result.stdout || "",
                        type: testcase.type,
                        input: testcase.inputString
                    };
                    
                    if (result.stderr) {
                        runOP.err = "Runtime error";
                        runOP.op = result.stderr;
                    } else if (result.returncode !== 0) {
                        runOP.err = "Runtime error";
                        runOP.op = result.stderr || "Non-zero exit code";
                    } else {
                        // Check if output matches
                        const expectedOutput = `${testcase.outputString}\n`;
                        if (expectedOutput === result.stdout || testcase.outputString === result.stdout.trim()) {
                            runOP.count = 1;
                        }
                    }
                    
                    if (testcase.type === "OPEN1") op1 = runOP.op;
                    if (testcase.type === "OPEN2") op2 = runOP.op;
                    
                    count += parseInt(runOP.count);
                    return runOP;
                } catch (error) {
                    return {
                        err: "Execution error",
                        op: error.message,
                        count: 0,
                        type: testcase.type,
                        input: testcase.inputString
                    };
                }
            })
        );
        console.log("test cases completed")

        return {
            status: 0,
            msg: "Completed running all test cases",
            count,
            op1,
            op2,
            results: resArr
        };

    } catch (error) {
        console.log(error);
        return { status: -1, err: "Syntax error bhava" };
    }
}


async function caller() {
    const ans = await PythonMain({qId:23,submissionId:201 ,lang:"py" , 
        code:`
a = int(input())
b = int(input())
s= a+b
print(s)
` });
    console.log(ans);
}

// caller();

module.exports = {
    PythonMain
}