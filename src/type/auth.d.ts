// REGISTER
declare interface IRespRegister extends IResponse<IRegister> {}

declare interface IRegister {
  token: string;
}

declare interface IRegisterPayload {
  username: string;
  password: string;
  confirm_password: string;
}

// LOGIN
declare interface IRespLogin extends IResponse<ILogin> {}

declare interface ILogin {
  token: string;
}

declare interface ILoginPayload {
  username: string;
  password: string;
}
