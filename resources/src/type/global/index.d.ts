export type ArrayElementType<T> = T extends (infer U)[] ? U : never

export type TypedParamKeys<
  T extends Record<string, any>,
  U,
  Key extends keyof T = keyof T
> = T[Key] extends U ? (Key extends string ? Key : never) : never

export type PickTypedParams<
  T extends Record<string, any>,
  U,
  Key extends keyof T = keyof T
> = Key extends string
  ? T[Key] extends U
    ? {
        [K in Key]: T[Key]
      }
    : never
  : never
