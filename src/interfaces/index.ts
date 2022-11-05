export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface IUser {
  username: string,
  classe: string,
  level: number,
  password?: string
}

export interface IToken {
  token: string,
}