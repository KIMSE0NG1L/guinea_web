import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = { title: "개인정보처리방침" };

export default function PrivacyPolicyPage() {
  return <LegalDocument file="privacy-policy.md" />;
}
