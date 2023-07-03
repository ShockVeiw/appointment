import { Schema, model } from 'mongoose';

type DayHours = {
    from: string;
    to: string;
}

interface IDoctor {
  name: string;
  phone: string;
  speciality: string;
  workingHours: {
    'Monday': DayHours,
    'Tuesday': DayHours,
    'Wednesday': DayHours,
    'Thursday': DayHours,
    'Friday': DayHours,
    'Saturday': DayHours,
    'Sunday': DayHours
  };
}

const doctorSchema = new Schema<IDoctor>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  speciality: { type: String, required: true },
  workingHours: {
    'Monday': {
        from: String,
        to: String
    },
    'Tuesday': {
        from: String,
        to: String
    },
    'Wednesday': {
        from: String,
        to: String
    },
    'Thursday': {
        from: String,
        to: String
    },
    'Friday': {
        from: String,
        to: String
    },
    'Saturday': {
        from: String,
        to: String
    },
    'Sunday': {
        from: String,
        to: String
    }
  }
});

export const Doctor = model<IDoctor>('Doctor', doctorSchema);
