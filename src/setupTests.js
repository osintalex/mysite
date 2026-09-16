import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, useNavigate: vi.fn() };
});
