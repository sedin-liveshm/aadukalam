const { PrismaClient } = require('./generated');
const prisma = new PrismaClient();

const main = async () => {
    // ===== CLEAR EXISTING DATA =====
    console.log('🧹 Clearing existing data...');
    await prisma.testCase.deleteMany({});
    await prisma.submission.deleteMany({});
    await prisma.questions.deleteMany({});
    await prisma.contest.deleteMany({});
    await prisma.topics.deleteMany({});
    await prisma.discussions.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.oTPStudent.deleteMany({});
    await prisma.studentAchievements.deleteMany({});
    await prisma.achievements.deleteMany({});
    // Note: Not deleting students to preserve registration data
    console.log('✅ Data cleared\n');

    // ===== ACHIEVEMENTS =====
    console.log('🏆 Creating achievements...');
    const achievementData = [
        { title: 'First Submission', description: 'Submit your first solution' },
        { title: 'Problem Solver', description: 'Solve 10 problems' },
        { title: 'Code Master', description: 'Solve 50 problems' },
        { title: 'Contest Participant', description: 'Participate in a contest' },
        { title: 'Contest Winner', description: 'Win a contest' },
        { title: 'Speed Demon', description: 'Solve a problem in under 5 minutes' },
        { title: 'All Languages', description: 'Solve problems in all 4 languages' },
        { title: 'Streak Master', description: 'Maintain a 7-day solving streak' },
        { title: 'Perfect Score', description: 'Get 100% on a problem' },
        { title: 'Community Helper', description: 'Help 10 students in discussions' }
    ];
    const allAchievements = await prisma.achievements.createManyAndReturn({ data: achievementData, skipDuplicates: true });
    console.log(`✅ Created ${allAchievements.length} achievements\n`);

    // ===== STUDENTS =====
    console.log('👥 Creating students...');
    const studentData = [
        { name: 'Alice Coder', rno: 'STU001', uname: 'alice_coder', salt: 'salt1', hash: 'hash1' },
        { name: 'Bob Dev', rno: 'STU002', uname: 'bob_dev', salt: 'salt2', hash: 'hash2' },
        { name: 'Charlie Prog', rno: 'STU003', uname: 'charlie_prog', salt: 'salt3', hash: 'hash3' },
        { name: 'Diana Code', rno: 'STU004', uname: 'diana_code', salt: 'salt4', hash: 'hash4' },
        { name: 'Eve Hacker', rno: 'STU005', uname: 'eve_hacker', salt: 'salt5', hash: 'hash5' },
        { name: 'Frank Debug', rno: 'STU006', uname: 'frank_debug', salt: 'salt6', hash: 'hash6' },
        { name: 'Grace Test', rno: 'STU007', uname: 'grace_test', salt: 'salt7', hash: 'hash7' },
        { name: 'Henry Algo', rno: 'STU008', uname: 'henry_algo', salt: 'salt8', hash: 'hash8' },
        { name: 'Ivy Logic', rno: 'STU009', uname: 'ivy_logic', salt: 'salt9', hash: 'hash9' },
        { name: 'Jack Script', rno: 'STU010', uname: 'jack_script', salt: 'salt10', hash: 'hash10' }
    ];
    const allStudents = await prisma.student.createManyAndReturn({ data: studentData, skipDuplicates: true });
    console.log(`✅ Created ${allStudents.length} students\n`);

    // ===== STUDENT ACHIEVEMENTS =====
    console.log('🎖️ Linking student achievements...');
    const studentAchievements = allStudents.flatMap(student => 
        allAchievements.map(achievement => ({
            studentId: student.id,
            achievementId: achievement.id,
            count: Math.floor(Math.random() * 20) // Random count 0-19 for variety
        }))
    );
    await prisma.studentAchievements.createMany({ data: studentAchievements, skipDuplicates: true });
    console.log(`✅ Created ${studentAchievements.length} student-achievement links\n`);

    // ===== TOPICS =====
    console.log('📚 Creating topics...');
    const topics = await prisma.topics.createManyAndReturn({
        data: [
            { name: 'Practice_Arena', description: 'Basic programming practice problems' },
            { name: 'Beginner_Challenge', description: 'Easy problems for beginners' },
            { name: 'Intermediate_Quest', description: 'Medium difficulty problems' },
            { name: 'Advanced_Master', description: 'Hard algorithmic challenges' },
            { name: 'sample_test', description: 'Contest and sample problems' }
        ]
    });
    const topicMap = Object.fromEntries(topics.map(t => [t.name, t.id]));
    console.log(`✅ Created ${topics.length} topics\n`);

    // ===== CONTESTS =====
    console.log('🎯 Creating contests...');
    await prisma.contest.createMany({
        data: [
            {
                title: 'Weekly Challenge 1',
                miniDescription: 'Weekly coding challenge for all levels',
                opensOn: new Date('2024-01-15T10:00:00Z'),
                closesOn: new Date('2024-01-15T12:00:00Z'),
                timeToSolveInMinutes: 120,
                totalPoints: 200,
                totalNoOfQuestions: 5
            },
            {
                title: 'Monthly Championship',
                miniDescription: 'Monthly competitive programming championship',
                opensOn: new Date('2024-02-01T09:00:00Z'),
                closesOn: new Date('2024-02-01T13:00:00Z'),
                timeToSolveInMinutes: 240,
                totalPoints: 500,
                totalNoOfQuestions: 10
            },
            {
                title: 'Beginner Sprint',
                miniDescription: 'Special contest for beginners',
                opensOn: new Date('2024-01-20T14:00:00Z'),
                closesOn: new Date('2024-01-20T16:00:00Z'),
                timeToSolveInMinutes: 120,
                totalPoints: 150,
                totalNoOfQuestions: 3
            }
        ]
    });
    console.log('✅ Contests created\n');

    // ===== QUESTIONS WITH BOILERPLATE =====
    console.log('❓ Creating questions with boilerplate code...');
    
    const add2No = await prisma.questions.create({
        data: {
            title: 'Add2No',
            description: 'Add two numbers.\n\nInput: Two space-separated integers a and b\nOutput: Sum of a and b\n\nExample:\nInput: 3 10\nOutput: 13',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 5,
            timeToSolveInMinutes: 10,
            CBoilerCode: "#include <stdio.h>\nint add(int, int);\nint main() { int a, b; scanf(\"%d %d\", &a, &b); printf(\"%d\", add(a, b)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int a = sc.nextInt(), b = sc.nextInt(); System.out.println(add(a, b)); } static int add(int n1, int n2) { return n1 + n2; } }",
            PythonBoilerCode: "a = int(input())\nb = int(input())\nprint(a + b)",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint add(int, int);\nint main() { int a, b; cin >> a >> b; cout << add(a, b); return 0; }"
        }
    });

    const sub2No = await prisma.questions.create({
        data: {
            title: 'Sub2No',
            description: 'Subtract two numbers.\n\nInput: Two space-separated integers a and b\nOutput: Difference a - b\n\nExample:\nInput: 10 3\nOutput: 7',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 5,
            timeToSolveInMinutes: 10,
            CBoilerCode: "#include <stdio.h>\nint sub(int, int);\nint main() { int a, b; scanf(\"%d %d\", &a, &b); printf(\"%d\", sub(a, b)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int a = sc.nextInt(), b = sc.nextInt(); System.out.println(sub(a, b)); } static int sub(int n1, int n2) { return n1 - n2; } }",
            PythonBoilerCode: "a = int(input())\nb = int(input())\nprint(a - b)",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint sub(int, int);\nint main() { int a, b; cin >> a >> b; cout << sub(a, b); return 0; }"
        }
    });

    const mul2No = await prisma.questions.create({
        data: {
            title: 'Mul2No',
            description: 'Multiply two numbers.\n\nInput: Two space-separated integers a and b\nOutput: Product a * b\n\nExample:\nInput: 3 10\nOutput: 30',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 5,
            timeToSolveInMinutes: 10,
            CBoilerCode: "#include <stdio.h>\nint mul(int, int);\nint main() { int a, b; scanf(\"%d %d\", &a, &b); printf(\"%d\", mul(a, b)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int a = sc.nextInt(), b = sc.nextInt(); System.out.println(mul(a, b)); } static int mul(int n1, int n2) { return n1 * n2; } }",
            PythonBoilerCode: "a = int(input())\nb = int(input())\nprint(a * b)",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint mul(int, int);\nint main() { int a, b; cin >> a >> b; cout << mul(a, b); return 0; }"
        }
    });

    const div2No = await prisma.questions.create({
        data: {
            title: 'Div2No',
            description: 'Divide two numbers (integer division).\n\nInput: Two space-separated integers a and b\nOutput: Quotient a / b\n\nExample:\nInput: 10 2\nOutput: 5',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 5,
            timeToSolveInMinutes: 10,
            CBoilerCode: "#include <stdio.h>\nint divide(int, int);\nint main() { int a, b; scanf(\"%d %d\", &a, &b); printf(\"%d\", divide(a, b)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int a = sc.nextInt(), b = sc.nextInt(); System.out.println(divide(a, b)); } static int divide(int n1, int n2) { return n1 / n2; } }",
            PythonBoilerCode: "a = int(input())\nb = int(input())\nprint(a // b)",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint divide(int, int);\nint main() { int a, b; cin >> a >> b; cout << divide(a, b); return 0; }"
        }
    });

    const sumOfArr = await prisma.questions.create({
        data: {
            title: 'SumOfArr',
            description: 'Find the sum of all elements in an array.\n\nInput: First line contains n, second line contains n integers\nOutput: Sum of all elements\n\nExample:\nInput:\n3\n1 2 3\nOutput: 6',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 10,
            timeToSolveInMinutes: 15,
            CBoilerCode: "#include <stdio.h>\nint sum(int[], int);\nint main() { int n, arr[100]; scanf(\"%d\", &n); for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]); printf(\"%d\", sum(arr, n)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(), arr[] = new int[n]; for (int i = 0; i < n; i++) arr[i] = sc.nextInt(); System.out.println(sum(arr)); } static int sum(int[] arr) { int total = 0; for(int x : arr) total += x; return total; } }",
            PythonBoilerCode: "n = int(input())\narr = list(map(int, input().split()))\nprint(sum(arr))",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint sum(int[], int);\nint main() { int n, arr[100]; cin >> n; for (int i = 0; i < n; i++) cin >> arr[i]; cout << sum(arr, n); return 0; }"
        }
    });

    const maxOfArr = await prisma.questions.create({
        data: {
            title: 'MaxOfArr',
            description: 'Find the maximum element in an array.\n\nInput: First line contains n, second line contains n integers\nOutput: Maximum element\n\nExample:\nInput:\n3\n1 2 3\nOutput: 3',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 10,
            timeToSolveInMinutes: 15,
            CBoilerCode: "#include <stdio.h>\nint findMax(int[], int);\nint main() { int n, arr[100]; scanf(\"%d\", &n); for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]); printf(\"%d\", findMax(arr, n)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(), arr[] = new int[n]; for (int i = 0; i < n; i++) arr[i] = sc.nextInt(); System.out.println(findMax(arr)); } static int findMax(int[] arr) { int max = arr[0]; for(int x : arr) if(x > max) max = x; return max; } }",
            PythonBoilerCode: "n = int(input())\narr = list(map(int, input().split()))\nprint(max(arr))",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint findMax(int[], int);\nint main() { int n, arr[100]; cin >> n; for (int i = 0; i < n; i++) cin >> arr[i]; cout << findMax(arr, n); return 0; }"
        }
    });

    const minOfArr = await prisma.questions.create({
        data: {
            title: 'MinOfArr',
            description: 'Find the minimum element in an array.\n\nInput: First line contains n, second line contains n integers\nOutput: Minimum element\n\nExample:\nInput:\n3\n1 2 3\nOutput: 1',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 10,
            timeToSolveInMinutes: 15,
            CBoilerCode: "#include <stdio.h>\nint findMin(int[], int);\nint main() { int n, arr[100]; scanf(\"%d\", &n); for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]); printf(\"%d\", findMin(arr, n)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(), arr[] = new int[n]; for (int i = 0; i < n; i++) arr[i] = sc.nextInt(); System.out.println(findMin(arr)); } static int findMin(int[] arr) { int min = arr[0]; for(int x : arr) if(x < min) min = x; return min; } }",
            PythonBoilerCode: "n = int(input())\narr = list(map(int, input().split()))\nprint(min(arr))",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint findMin(int[], int);\nint main() { int n, arr[100]; cin >> n; for (int i = 0; i < n; i++) cin >> arr[i]; cout << findMin(arr, n); return 0; }"
        }
    });

    const avgOfArr = await prisma.questions.create({
        data: {
            title: 'AvgOfArr',
            description: 'Find the average of all elements in an array.\n\nInput: First line contains n, second line contains n integers\nOutput: Average (integer division)\n\nExample:\nInput:\n4\n2 4 6 8\nOutput: 5',
            topic: topicMap["Practice_Arena"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 10,
            timeToSolveInMinutes: 20,
            CBoilerCode: "#include <stdio.h>\nint avg(int[], int);\nint main() { int n, arr[100]; scanf(\"%d\", &n); for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]); printf(\"%d\", avg(arr, n)); return 0; }",
            JavaBoilerCode: "import java.util.*;\nclass Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(), arr[] = new int[n]; for (int i = 0; i < n; i++) arr[i] = sc.nextInt(); System.out.println(avg(arr)); } static int avg(int[] arr) { int sum = 0; for(int x : arr) sum += x; return sum / arr.length; } }",
            PythonBoilerCode: "n = int(input())\narr = list(map(int, input().split()))\nprint(sum(arr) // len(arr))",
            CppBoilerCode: "#include <iostream>\nusing namespace std;\nint avg(int[], int);\nint main() { int n, arr[100]; cin >> n; for (int i = 0; i < n; i++) cin >> arr[i]; cout << avg(arr, n); return 0; }"
        }
    });

    const game1 = await prisma.questions.create({
        data: {
            title: 'Game-1',
            description: `Alice and Bob are playing a game. There are n (n is even) integers written on a blackboard, represented by x1,x2,…,xn. There is also a given integer k and an integer score that is initially 0. The game lasts for n/2 turns, in which the following events happen sequentially:

1. Alice selects an integer from the blackboard and erases it. Let's call Alice's chosen integer a.
2. Bob selects an integer from the blackboard and erases it. Let's call Bob's chosen integer b.
3. If a+b=k, add 1 to score.

Alice is playing to minimize the score while Bob is playing to maximize the score. Assuming both players use optimal strategies, what is the score after the game ends?

Input:
First line: Two integers n and k (2≤n≤2⋅10^5, 1≤k≤2⋅n, n is even)
Second line: n integers x1,x2,…,xn (1≤xi≤n)

Output: The final score

Example:
Input:
4 4
1 2 3 2
Output: 2`,
            topic: topicMap["sample_test"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 20,
            timeToSolveInMinutes: 45,
            CBoilerCode: "Hi",
            JavaBoilerCode: "Hi",
            PythonBoilerCode: "Hi",
            CppBoilerCode: "Hi"
        }
    });

    const balance = await prisma.questions.create({
        data: {
            title: 'Balance',
            description: `You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', 'R'.

A string is said to be balanced if each of its characters appears n/4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.

Example 1:
Input: s = "QWER"
Output: 0
Explanation: Already balanced

Example 2:
Input: s = "QQWE"
Output: 1
Explanation: Replace one Q with R

Example 3:
Input: s = "QQQQ"
Output: 3
Explanation: Replace three Qs`,
            topic: topicMap["sample_test"],
            type: "PRACTICE",
            pointsPerTestCaseSolved: 25,
            timeToSolveInMinutes: 60,
            CBoilerCode: "Hi",
            JavaBoilerCode: "Hi",
            PythonBoilerCode: "Hi",
            CppBoilerCode: "Hi"
        }
    });

    console.log('✅ Questions created\n');

    // ===== TEST CASES =====
    console.log('🧪 Creating test cases...');
    const questionMap = {
        'Add2No': add2No.id,
        'Sub2No': sub2No.id,
        'Mul2No': mul2No.id,
        'Div2No': div2No.id,
        'SumOfArr': sumOfArr.id,
        'MaxOfArr': maxOfArr.id,
        'MinOfArr': minOfArr.id,
        'AvgOfArr': avgOfArr.id
    };

    const testCases = [
        { title: 'Add2No', cases: ['3 10 13', '2 5 7', '4 8 12', '6 9 15', '10 20 30', '100 200 300'] },
        { title: 'Sub2No', cases: ['10 3 7', '8 2 6', '15 4 11', '20 5 15', '25 10 15', '100 50 50'] },
        { title: 'Mul2No', cases: ['3 10 30', '2 5 10', '4 8 32', '6 9 54', '10 20 200', '7 8 56'] },
        { title: 'Div2No', cases: ['10 2 5', '8 2 4', '15 3 5', '20 4 5', '25 5 5', '100 10 10'] },
        { title: 'SumOfArr', cases: ['3 1 2 3 6', '5 10 10 20 30 20 90', '4 5 5 5 5 20', '6 1 2 3 4 5 6 21', '2 100 200 300', '1 50 50'] },
        { title: 'MaxOfArr', cases: ['3 1 2 3 3', '5 10 10 20 30 20 30', '4 5 5 5 5 5', '6 1 2 3 4 5 6 6', '2 100 200 200', '7 1 5 3 9 2 7 4 9'] },
        { title: 'MinOfArr', cases: ['3 1 2 3 1', '5 10 10 20 30 20 10', '4 5 5 5 5 5', '6 1 2 3 4 5 6 1', '2 100 200 100', '7 9 5 3 1 2 7 4 1'] },
        { title: 'AvgOfArr', cases: ['3 1 2 3 2', '5 10 10 20 30 20 18', '4 5 5 5 5 5', '6 1 2 3 4 5 6 3', '2 100 200 150', '4 10 20 30 40 25'] }
    ];

    const testCaseData = testCases.flatMap(({ title, cases }) =>
        cases.map((testCase, index) => {
            const parts = testCase.split(' ');
            const output = parts[parts.length - 1];
            const input = parts.slice(0, -1).join(' ');
            
            return {
                questionId: questionMap[title],
                inputString: input,
                outputString: output,
                type: index === 0 ? "OPEN1" : index === 1 ? "OPEN2" : "HIDDEN"
            };
        })
    );

    await prisma.testCase.createMany({ data: testCaseData });
    console.log(`✅ Created ${testCaseData.length} test cases\n`);

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - ${allStudents.length} students`);
    console.log(`   - ${allAchievements.length} achievement types`);
    console.log(`   - ${topics.length} topics`);
    console.log(`   - 10 questions (8 basic + 2 advanced)`);
    console.log(`   - ${testCaseData.length} test cases`);
};

main()
    .catch(e => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
