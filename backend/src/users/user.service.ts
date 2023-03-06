import {User} from './user.interface';
import UserModel from './user.schema';

import {UserResponseDto} from './dtos/user-response.dto';

const createUser = async (user:User):Promise<UserResponseDto> => {
    return await UserModel.create(user);
}

export{
    createUser
}