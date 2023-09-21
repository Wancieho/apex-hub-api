export const errorInfo = (e: any): string => {
  console.log("\x1b[31m%s\x1b[0m", e?.message || e);

  if (e?.original?.errno === 1062) {
    return ": 'duplicate data'";
  }

  return "";
};
