interface IUserBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface IUser extends IUserBody {
  id: number;
}
