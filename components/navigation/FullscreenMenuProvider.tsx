"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { FullscreenMenu } from "./FullscreenMenu";

interface MenuCtx {
  open: boolean;
  toggle: () => void;
}

const MenuContext = createContext<MenuCtx>({ open: false, toggle: () => {} });

export function useMenu() {
  return useContext(MenuContext);
}

export function FullscreenMenuProvider() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </MenuContext.Provider>
  );
}
