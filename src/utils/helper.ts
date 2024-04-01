const changeDate = (date: string) => {
  const NEW_DATE = new Date(date);
  const YEAR = NEW_DATE.toLocaleDateString("en-us", { year: "numeric" });

  return `${NEW_DATE.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  }).concat(", ", YEAR)}`;
};

export { changeDate };
