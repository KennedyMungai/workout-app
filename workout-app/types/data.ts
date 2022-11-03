export interface WorkOut {
    slug: string,
    name: string,
    duration: number, 
    difficulty: "easy" | "normal" | "hard"
}