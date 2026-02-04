import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Globe, Clock, UserCheck, AlertTriangle, Scale, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Your Privacy Matters</span>
          </div>
          <h1 className="heading-xl mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 pb-24">
        {/* Introduction */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="w-5 h-5 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              This Privacy Policy (the "Policy") governs the manner in which the Platform collects, uses, maintains and discloses information of its users. The Policy also describes the practices that We apply to such user information, user's privacy rights and choices regarding their information.
            </p>
            <p>
              To clarify, this Policy applies to all users of the Platform (referred to as "Learners", "You", "Your"). By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy and Terms of Use and we disclaim all the liabilities arising therefrom.
            </p>
            <p>
              If You do not agree with any provisions of this Policy and/or the Terms of Use, You should not access or use the Platform or engage in communications with us and are required to leave the Platform immediately. If any information You have provided or uploaded on the Platform violates the terms of this Policy or Terms of Use, we may be required to delete such information upon informing You of the same and revoke Your access if required without incurring any liability to You.
            </p>
            <p>
              Capitalized terms used but not defined in this Privacy Policy can be found in our General Terms. Please read this Policy carefully prior to accessing our Platform and using any of the services or products offered therein.
            </p>
            <p className="text-primary">
              If you have any questions, please contact us at <a href="mailto:info@digiculum.com" className="underline hover:text-primary/80">info@digiculum.com</a>
            </p>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <UserCheck className="w-5 h-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              <strong className="text-foreground">"Personal Information"</strong> shall mean the information which identifies a Learner i.e., first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at the time of registration or any time thereafter on the Platform.
            </p>
            <p>
              <strong className="text-foreground">"Sensitive Personal Information"</strong> shall include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Passwords and financial data (except the truncated last four digits of credit/debit card)</li>
              <li>Health data</li>
              <li>Official identifier (such as biometric data, social security number, driver's license, passport, etc.)</li>
              <li>Information about sexual life, sexual identifier, race, ethnicity, political or religious belief or affiliation</li>
              <li>Account details and passwords</li>
              <li>Other data/information categorized as 'sensitive personal data' or 'special categories of data' under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, General Data Protection Regulation (GDPR) and/or the California Consumer Privacy Act (CCPA) ("Data Protection Laws")</li>
            </ul>
            <p>
              Usage of the term 'Personal Information' shall include 'Sensitive Personal Information' as may be applicable to the context of its usage.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="w-5 h-5 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              We may collect both personal and non-personal identifiable information from You in a variety of ways, including, but not limited to, when You visit our Platform, register on the Platform, and in connection with other activities, services, features or resources we make available on our Platform.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-foreground mb-2">Please note:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>We do not ask You for Personal Information unless we truly need it; like when You are registering for any Content on the Platform.</li>
                <li>We do not share Your Personal Information with anyone except to comply with the applicable laws, develop our products and services, or protect our rights.</li>
                <li>We do not store Personal Information on our servers unless required for the on-going operation of our Platform.</li>
              </ul>
            </div>

            <Separator className="my-6" />

            <div>
              <h4 className="font-semibold text-foreground mb-2">Personal Identifiable Information</h4>
              <p>
                We may collect personal-identifiable information such as Your name and email address to enable Your access to the Platform and services/products offered therein. We will collect personal-identifiable information from You only if such information is voluntarily submitted by You to us. You can always refuse to provide such personal identification information; however, it may prevent You from accessing services or products provided on the Platform or from engaging in certain activities on the Platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Non-Personal Identifiable Information</h4>
              <p>
                When You interact with our Platform, we may collect non-personal-identifiable information such as the browser name, language preference, referring site, and the date and time of each user request, operating system and the Internet service providers utilized and other similar information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Globe className="w-5 h-5 text-primary" />
              How We Use and Share the Information Collected
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-6">
            <p>We may collect and use Your Personal Information for the following purposes:</p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-2">a. To provide access to our Platform and/or the services/products offered therein</h4>
                <p>
                  We use Your information as collected by us to allow You to access the Platform and the services/products offered therein, including without limitation to provide customer service, fulfil purchases through the Platform, verify User information and to resolve any glitches with our Platform. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-2">b. To improve our Platform and maintain safety</h4>
                <p>
                  We use Your information to improve and customize the Platform and services/products offered by us. Further, we also use Your information to prevent, detect, investigate, and take measures against criminal activity, fraud, misuse of or damage to our Platform or network, and other threats and violations to a third party's or our rights and property, or the safety of our Users, or others.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-2">c. To communicate with You or market our services/products</h4>
                <p>
                  We may use the email address submitted by You to communicate with You about Your orders on our Platform, our offers, new products, services or even receive Your feedback on the Platform or any services/products offered therein. It may also be used to respond to Your inquiries, questions, and/or other requests.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="font-medium text-foreground">Important:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>We do not use Personal Information for making any automated decisions affecting or creating profiles other than what is described in this Policy.</li>
                <li>We do not sell, trade, or otherwise exploit Your personal-identifiable information to others.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Scale className="w-5 h-5 text-primary" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              In general, all Learners have the rights specified herein this section. However, depending on where you are situated, you may have certain specific rights in respect of your Personal Information accorded by the laws of the country you are situated in.
            </p>

            <div className="grid gap-4 mt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">a. Right to Confirmation and Access</h4>
                <p>You have the right to get confirmation and access to your Personal Information that is with us along with other supporting information.</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">b. Right to Correction</h4>
                <p>You have the right to ask us to rectify your Personal Information that is with us that you think is inaccurate. You also have the right to ask us to update your Personal Information that you think is incomplete or out-of-date.</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">c. Right to be Forgotten</h4>
                <p>You have the right to restrict or prevent the continuing disclosure of your Personal Information under certain circumstances.</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">d. Right to Erasure</h4>
                <p>If you wish to withdraw/remove your Personal Information from our Platform, you have the right to request erasure of your Personal Information from our Platform. However, please note that such erasure will remove all your Personal Information from our Platform and may result in deletion of your account on the Platform permanently, and the same will not be retrievable.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Protection of Information */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="w-5 h-5 text-primary" />
              Protection of Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              We take all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of Personal Information or such other data on the Platform. Our disclosure of any such information is limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Our employees, contractors and affiliated organizations (if any) that need to know that information in order to process it on our behalf or to provide services available on our Platform, and that have agreed not to disclose it to others.</li>
              <li>A response to a court order, or other governmental request. We reserve the right to disclose such information where we believe in good faith that such disclosure is necessary to comply with applicable laws, regulations, court orders, government and law enforcement agencies requests.</li>
            </ul>
            <p>
              To the extent permitted by law, we will attempt to give You prior notice before disclosing Your information in response to such a request.
            </p>
          </CardContent>
        </Card>

        {/* Third Party Websites */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Globe className="w-5 h-5 text-primary" />
              Third Party Websites
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <p>
              You may find links to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. The content or links that appear on these sites are not controlled by us in any manner and we are not responsible for the practices employed by such websites. Further, these websites/links thereto, including their content, may be constantly changing and may have their own terms of use and privacy policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that terms and policies published on such websites.
            </p>
          </CardContent>
        </Card>

        {/* Cross Border Data Transfer */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Globe className="w-5 h-5 text-primary" />
              Cross Border Data Transfer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Your information including any Personal Information is stored, processed, and transferred in and to the Amazon Web Service (AWS) servers and databases located in India. We may also store, process, and transfer information in and to servers in other countries depending on the location of our affiliates and service providers.
            </p>
            <p>
              Please note that these countries may have differing (and potentially less stringent) privacy laws and that Personal Information can become subject to the laws and disclosure requirements of such countries, including disclosure to governmental bodies, regulatory agencies, and private persons, as a result of applicable governmental or regulatory inquiry, court order or other similar process.
            </p>
            <p>
              If you use our Platform from outside India, including in the USA, EU, EEA, and UK, your information may be transferred to, stored, and processed in India. By accessing our Platform or otherwise giving us information, you consent to the transfer of information to India and other countries outside your country of residence.
            </p>
          </CardContent>
        </Card>

        {/* Duration of Storage */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Clock className="w-5 h-5 text-primary" />
              Duration for Which Your Information is Stored
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              We will retain Your information for as long as it is required for us to retain for the purposes stated hereinabove, including for the purpose of complying with legal obligation or business compliances.
            </p>
            <p>
              Further, please note that we may not be able to delete all communications or photos, files, or other documents publicly made available by you on the Platform (for example: comments, feedback, etc.), however, we shall anonymize your Personal Information in such a way that you can no longer be identified as an individual in association with such information made available by you on the Platform.
            </p>
            <p>
              We will never disclose aggregated or de-identified information in a manner that could identify you as an individual.
            </p>
            <p className="text-primary">
              Note: If you wish to exercise any of your rights to access, modify and delete any or all information stored about you, then you may do so by using the options provided within the Platform. You can always write to us at <a href="mailto:info@digiculum.com" className="underline hover:text-primary/80">info@digiculum.com</a>
            </p>
          </CardContent>
        </Card>

        {/* Modification to Privacy Policy */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Modification to Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <p>
              We may modify, revise or change our Policy from time to time; when we do, we will revise the 'updated date' at the beginning of this page. We encourage You to check our Platform frequently to see the recent changes. Unless stated otherwise, our current Policy applies to all information that we have about You.
            </p>
          </CardContent>
        </Card>

        {/* Grievances */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Mail className="w-5 h-5 text-primary" />
              Grievances
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <p>
              If you have any questions about this Policy or concerns about privacy or grievances, please write to us at:{" "}
              <a href="mailto:info@digiculum.com" className="text-primary underline hover:text-primary/80">info@digiculum.com</a>
            </p>
          </CardContent>
        </Card>

        {/* Country Specific Rights */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Globe className="w-5 h-5 text-primary" />
              Country Specific Additional Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-6">
            {/* UK/EU/EEA */}
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-3 border-b border-border pb-2">
                Terms Applicable for UK, EU, or EEA Residents
              </h4>
              <p className="mb-4">
                If you are located in the United Kingdom (UK) or European Union (EU) or European Economic Area (EEA), you have the following rights under the UK and EU General Data Protection Regulation (GDPR):
              </p>
              <div className="space-y-2">
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">1. Right to access</span> Your Personal Information
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">2. Right to Rectification</span> - correct inaccurate or incomplete information
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">3. Right to Erasure</span> - request deletion of your Personal Information
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">4. Right to object to Processing</span> under certain conditions
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">5. Right to Data Portability</span> - receive your data in a structured format
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">6. Right to Restriction of Processing</span> under certain conditions
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">7. Right to make a complaint</span> to a government supervisory authority
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">8. Right to not be subject to automated decision-making</span>, including profiling
                </div>
              </div>
              <p className="mt-4 text-sm">
                A list of Supervisory Authorities is available at:{" "}
                <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  https://edpb.europa.eu/about-edpb/board/members_en
                </a>
              </p>
            </div>

            <Separator />

            {/* India */}
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-3 border-b border-border pb-2">
                Terms Applicable for Indian Residents
              </h4>
              <p className="mb-4">
                If you are located in India, you may have the following rights under the Personal Data Protection Bill (PDPB):
              </p>
              <div className="space-y-2">
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">1. Right to Confirmation and Access</span>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">2. Right to Correction</span>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">3. Right to Data Portability</span>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">4. Right to be Forgotten</span>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">5. Right to Erasure</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* California */}
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-3 border-b border-border pb-2">
                Terms Applicable for California State Residents
              </h4>
              <p className="mb-4">
                If you are a California state resident, you have the following rights under the CCPA:
              </p>
              <div className="space-y-2">
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">1. Right to access</span> the Personal Information that we hold on you
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">2. Right to know</span> what Personal Information we intend on collecting before the point of collection
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">3. Right to opt in or out</span> of marketing, analytics, and other similar activities
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">4. Right to equal services</span> without discrimination
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <span className="font-medium text-primary">5. Right to request deletion</span> of Personal Information
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-foreground mb-3">CCPA Notice at Collection</h5>
                <p className="mb-3">For purposes of the CCPA, we collect the following categories of Personal Information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Identifiers (name, email, IP address, etc.)</li>
                  <li>Characteristics of Personal Information described in the California Customer Records statute</li>
                  <li>Internet or other electronic network activity information</li>
                  <li>Geolocation data</li>
                  <li>Audio, electronic, visual or similar information</li>
                  <li>Inferences</li>
                </ul>
              </div>

              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h5 className="font-semibold text-foreground mb-2">CCPA Non-Discrimination</h5>
                <p>
                  You have the right not to receive discriminatory treatment by us due to your exercise of the rights provided by the CCPA. We do not offer financial incentives and price or service differences, and we do not discriminate against Users/consumers for exercising their rights under the CCPA.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center mt-12 p-8 bg-card/50 border border-border rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
          <a
            href="mailto:info@digiculum.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
