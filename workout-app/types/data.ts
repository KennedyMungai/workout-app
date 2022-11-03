export type Difficulty = "easy" | "normal" | "hard";

export interface WorkOut {
    slug: string,
    name: string,
    duration: number, 
    difficulty: Difficulty
}