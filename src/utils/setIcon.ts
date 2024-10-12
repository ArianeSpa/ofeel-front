const setIcon = (tag: string) => {
  if (tag === "sport") {
    return "football ball";
  }
  if (tag === "recuperation") {
    return "bed";
  }
  if (tag === "alimentation") {
    return "food";
  }
  if (tag === "sante") {
    return "heartbeat";
  }
  if (tag === "divers") {
    return "boxes";
  }
};

export default setIcon;
