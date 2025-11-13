import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Nearbyshops Terms of Service to understand the rules and guidelines for using our mobile application and services.",
  openGraph: {
    title: "Terms of Service - Nearbyshops",
    description: "Read Nearbyshops Terms of Service to understand the rules and guidelines for using our mobile application and services.",
    url: "https://nearbyshops.online/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Nearbyshops",
    description: "Read Nearbyshops Terms of Service to understand the rules and guidelines for using our mobile application and services.",
  },
  alternates: {
    canonical: "https://nearbyshops.online/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>1. Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Nearbyshops, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The materials contained in this application are protected by applicable copyright and trademark law. These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>2. Use License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of Nearbyshops for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained in Nearbyshops</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Nearbyshops at any time.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>3. User Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Use another user&apos;s account without permission</li>
              <li>Create multiple accounts to circumvent restrictions or bans</li>
              <li>Share your account credentials with others</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>4. User Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material (&quot;Content&quot;). You are responsible for the Content that you post on or through the service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By posting Content on or through the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the service. You retain any and all of your rights to any Content you submit, post or display on or through the service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You agree that Content you post will not:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Violate any third party&apos;s rights, including copyright, trademark, privacy, or other personal or proprietary rights</li>
              <li>Contain libelous, defamatory, or otherwise unlawful material</li>
              <li>Contain false or misleading information</li>
              <li>Contain spam, machine-generated content, or unsolicited commercial content</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>5. Prohibited Uses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the service</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>6. Transactions and Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              When you make a purchase through Nearbyshops, you agree to provide current, complete, and accurate purchase and account information. All purchases are made directly with local businesses, and Nearbyshops facilitates the connection between you and these businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for any applicable taxes, and you agree to pay all charges associated with your purchases. Refunds and returns are subject to the policies of the individual local businesses from which you make purchases.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>7. Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The materials on Nearbyshops are provided on an &apos;as is&apos; basis. Nearbyshops makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Further, Nearbyshops does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its application or otherwise relating to such materials or on any sites linked to this service.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>8. Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Nearbyshops or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nearbyshops, even if Nearbyshops or a Nearbyshops authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>9. Revisions and Errata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on Nearbyshops could include technical, typographical, or photographic errors. Nearbyshops does not warrant that any of the materials on its application are accurate, complete, or current. Nearbyshops may make changes to the materials contained on its application at any time without notice.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>10. Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>11. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>12. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>13. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
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

