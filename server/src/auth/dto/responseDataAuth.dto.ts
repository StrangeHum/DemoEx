import { UserModel } from 'src/users/models/user.entity';

export default class responseDataAuth {
  user: UserModel;
  accessToken: string;
  refreshToken: string;
}
