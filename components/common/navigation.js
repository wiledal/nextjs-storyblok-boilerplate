import { useState, useEffect, useRef } from "react";

import Link from "next/link";

export default function Navigation(props) {
  return (
    <>
      <div className="nav">
        <Link href="/[lang]" as="/en">
          <a>Home</a>
        </Link>
        <Link href="/[lang]/[...slug]" as="/en/resellers/reseller-1">
          <a>Test link</a>
        </Link>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
