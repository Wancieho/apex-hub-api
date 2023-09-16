export const errorInfo = (e: any): string => {
  process.env.CONSOLE_LOGGING === "true" && console.log(e);

  if (e?.original?.errno === 1062) {
    return ": 'duplicate data'";
  }

  if (e?.message) {
    return `: '${e?.message}'`;
  }

  return "";
};
