"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("500a217b-8ad2-4e90-baa8-a3feec06fb5f");
  }, []);

  return null;
};