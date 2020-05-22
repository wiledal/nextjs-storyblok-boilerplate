import { useState, useEffect, useRef } from "react";

import Link from "./link";

export default function Navigation(props) {
  return (
    <>
      <div className="nav">
        <Link to="/en">
          <a>Home</a>
        </Link>
        <Link to="/en/resellers/reseller-1">
          <a>Test link</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
