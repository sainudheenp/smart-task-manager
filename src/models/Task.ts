import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema: Schema = new Schema<ITask>(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        completed: { type: Boolean, default: false },
        dueDate: { type: Date },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ITask>('Task', TaskSchema);