import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, FileText, Lock, AlertTriangle, Scale, Ban, UserX } from "lucide-react";

const GeneralTerms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Terms & Conditions</span>
          </div>
          <h1 className="heading-xl mb-6">General Terms</h1>
          <p className="text-muted-foreground text-lg">
            Please read these terms carefully before using our platform
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 pb-24">
        {/* Confidential Information */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="w-5 h-5 text-primary" />
              Confidential Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">Important Notice:</p>
              <p>
                Confidential or professional or business Information on this website or any material, knowledge, information and data (verbal, electronic, written or any other form) concerning to this Firm or its businesses not generally known to the public consisting of, but not limited to, inventions, discoveries, plans, concepts, designs, blueprints, drawings, models, devices, equipment, apparatus, products, prototypes, formulae, algorithms, techniques, research projects, computer programs, software, firmware, hardware, business development and marketing plans, merchandising systems, financial and pricing data, information concerning investors, customers, suppliers, consultants and employees, and any other concepts, ideas or information involving or related to the business which, if misused or disclosed, could adversely affect the firms business thus may attract strict legal action against the violator and be booked under law.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Content Access and Registration */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="w-5 h-5 text-primary" />
              Content Access and Registration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              As the original purchaser of content sold on Digiculum, you are entitled to access and use the content which is identified in the course and which is on the Digiculum website, at <a href="https://www.digiculum.com" className="text-primary underline hover:text-primary/80">www.digiculum.com</a> ("Website"). In order to access and use this content, you must register with Digiculum and create a password to use in accessing the content on the Website.
            </p>
          </CardContent>
        </Card>

        {/* Password Security */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Lock className="w-5 h-5 text-primary" />
              Password Security and Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Your password is unique and exclusive to you, and you may not transfer your password to any other person or allow any other person to use your password to access or use content on the Website. You agree to notify Digiculum immediately if any other person makes unauthorized use of your password.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
              <p className="font-semibold text-foreground mb-2">Important:</p>
              <p>
                Digiculum reserves the right to suspend or revoke your password in the event of any misuse of your password or any use of your password in violation of these Terms and Conditions. In the event of any such suspension or revocation, you will not be entitled to any refund or payment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terms of Use Agreement */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Scale className="w-5 h-5 text-primary" />
              Terms of Use Agreement
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              These General Terms govern your access to and use of the Website and the content on the Website. By accessing and using the Website, you agree to these Terms of Use. If you do not agree to any of these Terms of Use, you may not access or use the site.
            </p>
            <p>
              Digiculum reserves the right to modify these Terms of Use at any time and in its sole discretion. Your use of the site following any modification will constitute your assent to and acceptance of the modifications.
            </p>
          </CardContent>
        </Card>

        {/* License Grant */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <FileText className="w-5 h-5 text-primary" />
              License Grant
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Upon registration, Digiculum grants you a <strong className="text-foreground">non-exclusive, non-transferable, non-assignable, personal license</strong> to access and use the Digiculum content identified in the content you purchased via an online/offline reader.
            </p>
          </CardContent>
        </Card>

        {/* Service Limitations and Prohibited Uses */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Ban className="w-5 h-5 text-primary" />
              Service Limitations and Prohibited Uses
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Digiculum will not be liable for any delay or interruption in your access to the site or any content located on the site, or for any transmission errors, equipment or software incompatibilities, force majeure or other failure of performance.
            </p>
            <p>
              Digiculum will use reasonable efforts to correct any failure of performance, but Digiculum will not be required to make any changes to any equipment or software used by Digiculum or its contractors or agents to ensure compatibility with any equipment or software used by you.
            </p>
            
            <Separator className="my-4" />
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Prohibited Activities:</h4>
              <div className="bg-card border border-border rounded-lg p-4">
                <p>
                  You may not use the site or the content on the site for any commercial purpose, including but not limited to the use of any of the content to market or sell goods or services to any person.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p>
                  You agree not to launch any automated system, including without limitation, "robots," "spiders," or "offline readers," to access the site.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Changes and Termination */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Content Changes and Termination
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Digiculum reserves the right to change, suspend access to, or remove any or all of the content on the Website at any time, for any reason, in its sole discretion. Digiculum also reserves the right to discontinue the Website at any time, either temporarily or permanently.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground">
                In the event of the removal of any content from the Website or the termination of the Website, you will not be entitled to any refund or payment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers and Limitations of Liability */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="w-5 h-5 text-primary" />
              Disclaimers and Limitations of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground mb-3">IMPORTANT LEGAL NOTICE:</p>
              <div className="space-y-3 text-sm">
                <p>
                  YOU AGREE THAT YOUR USE OF THE SITE SHALL BE AT YOUR SOLE RISK, AND Digiculum WILL NOT BE HELD LIABLE IN ANY WAY FOR YOUR USE OF THE SITE OR FOR ANY INFORMATION CONTAINED ON THE SITE.
                </p>
                <p>
                  ALL CONTENT CONTAINED IN OR REFERRED TO ON THE SITE IS PROVIDED "AS IS," WITHOUT ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, Digiculum DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
                <p>
                  Digiculum MAKES NO WARRANTIES THAT THE SITE WILL BE ERROR-FREE, OR THAT ANY ERRORS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER FROM WHICH THE SITE IS OPERATED WILL BE FREE OF VIRUSES OR OTHER POTENTIALLY HARMFUL CODES.
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-3">Limitation of Liability:</p>
              <p className="text-sm">
                UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL Digiculum BE HELD LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES AND EXPENSES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, PERSONAL INJURY OR PROPERTY DAMAGE, LOST PROFITS, AND DAMAGES ARISING FROM COMPUTER VIRUSES, BUSINESS INTERRUPTION, LOST DATA, UNAUTHORIZED ACCESS TO OR USE OF SITE SERVERS OR ANY PERSONAL INFORMATION STORED THEREIN, OR ANY INTERRUPTION OR CESSATION OF OPERATION OF THE SITE) ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SITE OR ANY INFORMATION CONTAINED ON THE SITE, WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Indemnification */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <UserX className="w-5 h-5 text-primary" />
              Indemnification
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <p>
              You agree to indemnify, hold harmless and defend Digiculum from and against any and all claims, damages, losses, liabilities, judgments, awards, settlements, costs and expenses (including attorney's fees and court costs) arising out of or resulting from your use of this Website or the violation by you of any of these Terms of Use.
            </p>
          </CardContent>
        </Card>

        {/* Statute of Limitations */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Statute of Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="font-semibold text-foreground">
                YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THIS SITE OR YOUR USE OF THIS SITE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, AND WILL THEREAFTER BE PERMANENTLY BARRED.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Entire Agreement */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Scale className="w-5 h-5 text-primary" />
              Entire Agreement
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              These Terms of Use constitute the entire agreement between you and Digiculum concerning your use of the Website and the contents of the Website.
            </p>
            <p>
              If any provision is deemed invalid by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.
            </p>
            <p>
              No waiver of any the Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition, and any failure by Digiculum to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
            </p>
          </CardContent>
        </Card>

      </div>

      <Footer />
    </div>
  );
};

export default GeneralTerms;