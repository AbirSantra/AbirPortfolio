"use client";

import { useEffect, useState } from "react";

interface HydrationProviderProps {
  children: React.ReactNode;
}

const HydrationProvider = ({ children }: HydrationProviderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return <>{children}</>;
};

export default HydrationProvider;
