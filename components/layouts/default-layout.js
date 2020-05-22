import { useState, useEffect, useRef } from "react";
import AppHead from "../common/app-head";
import AppFoot from "../common/app-foot";
import { globalStyles } from "../../styles/global-styles";
import Navigation from "../common/navigation";

export default function DefaultLayout({ children, title = "Page Title" }) {
  return (
    <>
      <AppHead title={title} />
      <style jsx global>
        {globalStyles}
      </style>

      <Navigation />

      {children}

      <AppFoot />
    </>
  );
}
