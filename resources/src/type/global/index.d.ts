export type ExtractArrayElementType<T> = T extends (infer U)[] ? U : never
