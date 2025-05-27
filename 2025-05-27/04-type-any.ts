// Q1.-------------

// 작업 상태를 나타내는 enum을 작성하세요.
enum TaskStatus {
	Pending = "대기 중",
	InProgress = "진행 중",
	Completed = "완료됨",
}

function getStatusMessage(status: TaskStatus): string {
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
enum WorkStatus {
	Pending = "작업 대기 중",
	InProgress = "작업 진행 중",
	Completed = "작업 완료",
	Failed = "작업 실패",
}
function processTask(status: WorkStatus, input: unknown): string {
	if (typeof input !== "string") {
		throw new Error("입력값은 문자열이어야 합니다.");
	} else if (status === WorkStatus.Failed) {
		throw new Error("작업이 실패했습니다.");
	}
	switch (status) {
		case WorkStatus.Pending:
			return input.toUpperCase();
		case WorkStatus.InProgress:
			return input.toLocaleLowerCase();
		case WorkStatus.Completed:
			return `완료: ${input}`;
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
} catch (error) {
	console.error(error.message);
}
try {
	console.log(processTask(WorkStatus.Pending, 42));
} catch (error) {
	console.error(error.message);
}

// Q3.-------------

enum LogLevel {
	Info = "info",
	Error = "error",
	Debug = "debug",
}

// 로그 함수 타입을 정의하세요.
type LogFunction = (message: string, level: LogLevel) => void;

// 로그 함수 구현
const logMessage: LogFunction = (message, level) => {
	switch (level) {
		case LogLevel.Info:
			console.log(`INFO: ${message}`);
			break;
		case LogLevel.Error:
			console.error(`ERROR: ${message}`);
			break;
		case LogLevel.Debug:
			console.log(`DEBUG: ${message}`);
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
function processAny(input: any): string {
	return String(input);
}

function processUnknown(input: unknown): string | number {
	if (typeof input === "string") {
		return input.toUpperCase();
	} else if (typeof input === "number") {
		return input * 10;
	} else {
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
} catch (error) {
	console.error(error.message); // 기대 출력: "문자나 숫자를 입력해야 합니다."
}
