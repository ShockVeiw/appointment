import { Schema, model } from 'mongoose';

export interface IUser {
  _id: string | Schema.Types.ObjectId;
  name: string;
  phone: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  phone: { type: String, required: true }
});

export const User = model<IUser>('User', userSchema);
