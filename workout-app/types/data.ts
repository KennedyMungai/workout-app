export type Difficulty = "easy" | "normal" | "hard";

export interface SequenceItem {
    slug: string,
    name: string,
    type: "exercise" | "break" | "stretch",
    duration: number,
}

export interface WorkOut {
    slug: string,
    name: string,
    duration: number, 
    difficulty: Difficulty,
    sequence: Array<>
}