import { useEffect, useState } from "react";

export const useMenu = (url) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, [url]);
  return [menu];
};
