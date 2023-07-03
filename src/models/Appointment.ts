import { Schema, model } from 'mongoose';
import { IUser } from './User';

interface IAppointment {
  _id: string | Schema.Types.ObjectId;
  user: string | Schema.Types.ObjectId | IUser;
  doctor: string | Schema.Types.ObjectId | IUser;
  startDate: string | Date;
  endDate: string | Date;
}

const appointmentSchema = new Schema<IAppointment>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  startDate: Date,
  endDate: Date
});

export const Appointment = model<IAppointment>('Appointment', appointmentSchema);
