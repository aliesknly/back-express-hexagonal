import { nanoid } from "nanoid";

export const randomStringId = (length: number): string => {
  const id: string = `${nanoid(length)}`;

  return id;
};
