import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="text-2xl font-bold tracking-wide">JahanGard</div>
    </Link>
  );
}
