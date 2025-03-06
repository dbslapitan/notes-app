export const text = {
  "preset-1": "text-2xl/[1.2] -tracking-[0.5px] font-bold",
  "preset-2": "text-xl/[1.2] -tracking-[0.5px] font-bold",
  "preset-3": "text-base/[1.2] -tracking-[0.3px] font-semibold",
  "preset-4": "text-sm/[1.2] -tracking-[0.2px] font-medium",
  "preset-5": "text-sm/[1.2] -tracking-[0.2px] font-normal",
  "preset-6": "text-xs/[1.2] -tracking-[0.2px] font-normal"
}

export const addPrefix = (prefix: string, twClass: string) => {
  const classes = twClass.split(" ");
  return classes.map((cssClass) => {
    return `${prefix}${cssClass}`;
  }).join(" ");
}