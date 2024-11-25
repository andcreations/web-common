/** */
export class ServerResponseError {
  /** */
  constructor(
    private readonly code: string,
    private readonly message: string,
    private readonly status: number
  ) {}

  /** */
  getCode(): string {
    return this.code;
  }

  /** */
  getMessage(): string {
    return this.message;
  }

  /** */
  getStatus(): number {
    return this.status;
  }
  
  /** */
  static hasStatus(error: any, status: number): boolean {
    return error instanceof ServerResponseError && error.status === status;
  }
}