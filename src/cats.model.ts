import * as mongoose from 'mongoose'

export const CatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: Number, required: true }
})

export interface Cat {
    name: string;
    age: number;
    level: number;
}