import React from "react";

export const startAxe = async (
  config: Record<string, unknown> = {
    disableDuplicate: true,
  }
) => {
  const runAxe = async () => {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const axe = await import("@axe-core/react");
    const ReactDOM = await import("react-dom");

    await axe.default(React, ReactDOM, 1000, config);
  };
  if (process.env.NODE_ENV !== "production") {
    await runAxe();
  }
};
