export type PostThemeModel =
  | "alimentation"
  | "sante"
  | "sport"
  | "recuperation"
  | "divers";

export type PostModel = {
  id: number;
  content: string;
  name: string;
  tags: PostThemeModel;
};
