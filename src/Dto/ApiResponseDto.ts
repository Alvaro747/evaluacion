export class ApiResponseDto {
  private status: boolean;
  private data: any;
  private message: string;

  constructor(message: string, data: any, status: boolean) {
    this.message = message;
    this.data = data;
    this.status = status;
  }
}
