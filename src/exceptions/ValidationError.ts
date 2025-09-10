class ValidationError extends Error {
  statusCode: number;
  data: any[];

  constructor(message: string, status?: number, data?: any[]) {
    super(message);
    this.statusCode = status || 400;
    this.data = data || [];
  }
}
export default ValidationError;
