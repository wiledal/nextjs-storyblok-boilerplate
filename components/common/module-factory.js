import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";

const TeaserModule = dynamic(() => import("../modules/teaser-module"));

export function createModule(module, key) {
  if (module.component == "teaser") {
    return <TeaserModule {...module} key={key} />;
  }
}

export default function ModuleFactory({ modules }) {
  return <>{modules.map((module, i) => createModule(module, i))}</>;
}
