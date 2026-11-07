import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = { title: "이용약관" };

export default function TermsOfServicePage() {
  return <LegalDocument file="terms-of-service.md" />;
}
