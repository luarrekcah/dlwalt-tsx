"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type ScriptData = {
  id: number;
  name: string;
  code: string;
  position: string;
  isActive: boolean;
};

export function DynamicScripts() {
  const [scripts, setScripts] = useState<ScriptData[]>([]);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const response = await api.get("/scripts");
        const activeScripts = response.data.filter((s: ScriptData) => s.isActive);
        setScripts(activeScripts);
      } catch (error) {
        console.error("Failed to fetch dynamic scripts", error);
      }
    };

    fetchScripts();
  }, []);

  return (
    <>
      {scripts.map((script) => {
        if (script.position === "head") {
          return (
            <script
              key={`script-${script.id}`}
              dangerouslySetInnerHTML={{ __html: script.code }}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export function DynamicBodyScripts() {
  const [scripts, setScripts] = useState<ScriptData[]>([]);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const response = await api.get("/scripts");
        const activeScripts = response.data.filter((s: ScriptData) => s.isActive);
        setScripts(activeScripts);
      } catch (error) {
        console.error("Failed to fetch dynamic scripts", error);
      }
    };

    fetchScripts();
  }, []);

  return (
    <>
      {scripts.map((script) => {
        if (script.position === "body_start" || script.position === "body_end") {
          return (
            <script
              key={`script-${script.id}`}
              dangerouslySetInnerHTML={{ __html: script.code }}
            />
          );
        }
        return null;
      })}
    </>
  );
}
