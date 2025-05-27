// Q1.-------------
// 작업 상태를 나타내는 enum을 작성하세요.
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "\uB300\uAE30 \uC911";
    TaskStatus["InProgress"] = "\uC9C4\uD589 \uC911";
    TaskStatus["Completed"] = "\uC644\uB8CC\uB428";
})(TaskStatus || (TaskStatus = {}));
function getStatusMessage(status) {
    switch (status) {
        case TaskStatus.Pending:
            return "작업이 대기 중입니다.";
        case TaskStatus.InProgress:
            return "작업이 진행 중입니다.";
        case TaskStatus.Completed:
            return "작업이 완료되었습니다.";
        default:
            return "알 수 없는 상태";
    }
}
// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending));
console.log(getStatusMessage(TaskStatus.InProgress));
console.log(getStatusMessage(TaskStatus.Completed));
// Q2.-------------
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["Pending"] = "\uC791\uC5C5 \uB300\uAE30 \uC911";
    WorkStatus["InProgress"] = "\uC791\uC5C5 \uC9C4\uD589 \uC911";
    WorkStatus["Completed"] = "\uC791\uC5C5 \uC644\uB8CC";
    WorkStatus["Failed"] = "\uC791\uC5C5 \uC2E4\uD328";
})(WorkStatus || (WorkStatus = {}));
function processTask(status, input) {
    if (typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.");
    }
    else if (status === WorkStatus.Failed) {
        throw new Error("작업이 실패했습니다.");
    }
    switch (status) {
        case WorkStatus.Pending:
            return input.toUpperCase();
        case WorkStatus.InProgress:
            return input.toLocaleLowerCase();
        case WorkStatus.Completed:
            return "\uC644\uB8CC: ".concat(input);
        default:
            return "올바른 작업 상태를 입력해야 합니다.";
    }
}
// 테스트 코드
console.log(processTask(WorkStatus.Pending, "task1"));
// 기대 출력: "TASK1"
console.log(processTask(WorkStatus.InProgress, "TaskA"));
// 기대 출력: "taska"
console.log(processTask(WorkStatus.Completed, "Report1"));
// 기대 출력: "완료: Report1"
try {
    console.log(processTask(WorkStatus.Failed, "TaskX"));
}
catch (error) {
    console.error(error.message);
    // 기대 출력: "작업이 실패했습니다."
}
try {
    console.log(processTask(WorkStatus.Pending, 42)); // 에러 발생
}
catch (error) {
    console.error(error.message);
    // 기대 출력: "입력값은 문자열이어야 합니다."
}
// Q3.-------------
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "info";
    LogLevel["Error"] = "error";
    LogLevel["Debug"] = "debug";
})(LogLevel || (LogLevel = {}));
// 로그 함수 구현
var logMessage = function (message, level) {
    switch (level) {
        case LogLevel.Info:
            console.log("INFO: ".concat(message));
            break;
        case LogLevel.Error:
            console.error("ERROR: ".concat(message));
            break;
        case LogLevel.Debug:
            console.log("DEBUG: ".concat(message));
            break;
        default:
            throw new Error("올바른 로그 레벨을 입력해야 합니다.");
    }
};
// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);
// Q4.-------------
function processAny(input) {
    return String(input);
}
function processUnknown(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        throw new Error("문자나 숫자를 입력해야 합니다.");
    }
}
// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"
console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
try {
    console.log(processUnknown(true)); // 에러 발생
}
catch (error) {
    console.error(error.message); // 기대 출력: "문자나 숫자를 입력해야 합니다."
}
