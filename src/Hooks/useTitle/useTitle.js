import { useEffect, useState } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Cafe Rio | ${title}`;
  }, [title]);

  return title;
};
