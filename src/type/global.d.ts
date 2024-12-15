declare interface IResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
