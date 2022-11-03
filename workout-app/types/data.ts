export type difficulty = "easy" | "normal" | "hard";

export interface WorkOut {
    slug: string,
    name: string,
    duration: number, 
    difficulty: "easy" | "normal" | "hard"
}