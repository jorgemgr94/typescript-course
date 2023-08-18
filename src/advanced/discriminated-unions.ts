class APIErrorResponse {
  public status: number = 400;
  public error: Error = new Error();
}

class APISuccessResponse {
  public status: number = 200;
  public data: any = {};
}

// NOTE: the APIResponse could be either APISuccessResponse, APIErrorResponse or { status: 301; to: string }
type APIResponse =
  | APISuccessResponse
  | { status: 301; to: string }
  | APIErrorResponse;

const response: APIResponse = {
  status: 400,
  error: new Error(),
};

const enum SEVERITY {
  "ERROR",
  "WARNING",
}

const mapSeverity: Record<SEVERITY, number> = {
  [SEVERITY.ERROR]: 100,
  [SEVERITY.WARNING]: 200,
};

const successResponse = new APISuccessResponse();
const errorResponse = new APIErrorResponse();

function isErrorResponse(obj: APIResponse): obj is APIErrorResponse {
  return obj instanceof APIErrorResponse;
}

console.log(isErrorResponse(successResponse));
console.log(isErrorResponse(errorResponse));

export {};
