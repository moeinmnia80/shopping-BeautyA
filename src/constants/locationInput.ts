type locationInputType = {
  region: { id: string; label: string; name: string };
  language: { id: string; label: string; name: string };
  currency: { id: string; label: string; name: string };
};
export const locationInput: locationInputType = {
  region: { id: "region", label: "Country / Region", name: "region" },
  language: { id: "language", label: "Language", name: "language" },
  currency: { id: "currency", label: "Currency", name: "currency" },
};
