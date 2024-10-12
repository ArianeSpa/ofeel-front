export type PostThemeModel =
  | "alimentation"
  | "sante"
  | "sport"
  | "recuperation"
  | "divers";

export type PostModel = {
  tags: PostThemeModel;
};
