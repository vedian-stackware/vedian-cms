import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
