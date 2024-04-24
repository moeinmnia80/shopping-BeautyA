type locationInputType = {
  id: string;
  label: string;
  name: "region" | "language" | "currency";
};

export const locationInput: locationInputType[] = [
  { id: "region", label: "Country / Region", name: "region" },
  { id: "language", label: "Language", name: "language" },
  { id: "currency", label: "Currency", name: "currency" },
];
