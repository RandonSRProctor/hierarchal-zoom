export function throwNullOrUndefined(...args) {
  args.forEach((arg) => {
    if (arg === null || undefined) {
      throw new Error("Null or Undefined Value Argued!\n\n");
    }
  });
}
