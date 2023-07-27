"use client";

import { Spinner } from "flowbite-react";

export default function Sizing() {
  return (
    <>
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </>
  );
}
