export function pick<Obj extends Record<string, never>, Key extends keyof Obj>(obj: Obj, keys: Key[]) {
    return keys.reduce((acc, key) => {
        if (keys.includes(key)) {
            acc[key] = obj[key]
        }

        return acc
    }, {} as Pick<Obj, Key>)
}
