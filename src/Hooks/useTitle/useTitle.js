import { useEffect, useState } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return title;
};
