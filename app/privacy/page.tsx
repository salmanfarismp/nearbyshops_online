import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Nearbyshops Privacy Policy to understand how we collect, use, and protect your personal information when you use our mobile application and services.",
  openGraph: {
    title: "Privacy Policy - Nearbyshops",
    description: "Read Nearbyshops Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "https://nearbyshops.online/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Nearbyshops",
    description: "Read Nearbyshops Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://nearbyshops.online/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Nearbyshops. We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using Nearbyshops, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2 text-muted-foreground">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Location data when you use location-based features</li>
                <li>Communications with us, including customer support interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">2.2 Usage Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information about your device and how you interact with our services, including:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2 text-muted-foreground">
                <li>Device information (model, operating system, unique device identifiers)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Usage patterns and preferences</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>4. Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>With local businesses when you make purchases or interact with their listings</li>
              <li>With service providers who perform services on our behalf</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your consent or at your direction</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>5. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>6. Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can exercise these rights by contacting us through the app settings or by emailing us at the contact information provided below.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>7. Children&apos;s Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>8. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>9. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Email: help@nearbyshops.online
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through the app: Settings → Help & Support
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="text-primary hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

