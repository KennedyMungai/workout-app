export type Difficulty = "easy" | "normal" | "hard";
export type SequenceType = "exercise" | "break" | "stretch";

export interface SequenceItem {
    slug: string,
    name: string,
    type: SequenceType
    duration: number,
}

export interface WorkOut {
    slug: string,
    name: string,
    duration: number, 
    difficulty: Difficulty,
    sequence: Array<>
}