import { Image } from './image';

export interface Photo {
    created_time: Date;
    name?: string;
    id: number;
    images: Image[];
}
