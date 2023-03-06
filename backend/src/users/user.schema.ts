import { model, Schema } from "mongoose"
import { User } from "./user.interface"
import {v4 as uuid} from 'uuid';

const UserSchema = new Schema<User>({
    id:{
        type:String,
        default: uuid()
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cdate:{
        type: Date,
        default: new Date(),
    },
    active:{
        type: Boolean,
        default: true
    }
});

const UserModel = model("users", UserSchema);

export default UserModel;