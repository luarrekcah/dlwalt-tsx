"use client";

import { useEffect } from "react";

interface ScriptRendererProps {
  id: string | number;
  code: string;
  position?: string;
}

/**
 * ScriptRenderer handles both raw HTML snippets (containing <script>, <noscript>, etc.)
 * and pure JavaScript snippets, properly executing script tags injected into the DOM.
 */
export function ScriptRenderer({ id, code, position = "head" }: ScriptRendererProps) {
  useEffect(() => {
    if (!code || typeof window === "undefined") return;

    const containerId = `custom-site-script-${id}`;
    // Remove previous instance if it already exists
    const existing = document.getElementById(containerId);
    if (existing) {
      existing.remove();
    }

    const container = document.createElement("div");
    container.id = containerId;
    container.style.display = "none";
    container.innerHTML = code;

    // Standard innerHTML does not execute <script> tags, so we clone and execute them
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      // Copy all attributes (src, async, defer, type, etc.)
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      // Copy inline text content
      newScript.text = oldScript.innerHTML;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });

    // If there were no <script> tags but pure JS was provided
    if (scripts.length === 0 && code.trim().length > 0) {
      const isHtml = /<[a-z][\s\S]*>/i.test(code);
      if (!isHtml) {
        const directScript = document.createElement("script");
        directScript.text = code;
        container.appendChild(directScript);
      }
    }

    if (position === "body_start" && document.body) {
      document.body.insertBefore(container, document.body.firstChild);
    } else if (position === "body_end" && document.body) {
      document.body.appendChild(container);
    } else if (document.head) {
      document.head.appendChild(container);
    } else if (document.body) {
      document.body.appendChild(container);
    }

    return () => {
      const el = document.getElementById(containerId);
      if (el) {
        el.remove();
      }
    };
  }, [id, code, position]);

  return null;
}
