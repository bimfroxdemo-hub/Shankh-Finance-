import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Shield, Users, Award, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-12 md:py-16">
        <Helmet>
          <title>
            About SHANKH FINANCE | Trusted Financial Consultant in Surat
          </title>

          <meta
            name="description"
            content="Learn about SHANKH FINANCE, a trusted financial consultant helping customers with loans and insurance services in Surat."
          />

          <meta
            name="keywords"
            content="About SHANKH FINANCE, Financial Consultant Surat"
          />

          <link
            rel="canonical"
            href="https://www.shankhfinance.com/about-us"
          />
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About LoanEase
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner in finding the right loan. We simplify the lending journey
            for millions of Indians seeking financial solutions.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  LoanEase is a leading loan advisory and facilitation service dedicated to helping
                  Indians navigate the complex world of finance. With over 10 years of experience,
                  we've helped thousands of customers find the right loan for their needs.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We are not a bank or NBFC. Instead, we work as your financial advisor,
                  connecting you with 50+ leading banks and financial institutions to find
                  the best loan products suited to your profile.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is simple: make loans accessible, transparent, and hassle-free
                  for every Indian.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
                    <p className="text-2xl font-bold text-foreground">10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Target className="w-10 h-10 mx-auto mb-3 text-finance-gold" />
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">Bank Partners</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground">₹500Cr+</p>
                    <p className="text-sm text-muted-foreground">Loans Facilitated</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden charges, no false promises. We believe in complete transparency.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Your needs come first. We find the best loan for YOU, not the highest commission.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
                  <Award className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance and professional service at every step of your loan journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Banking Partners
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with India's leading banks and NBFCs to bring you the best loan options.
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Yes Bank", "PNB", "Bajaj", "Tata Capital", "L&T Finance"].map((bank) => (
              <div
                key={bank}
                className="px-6 py-3 bg-muted rounded-lg text-sm font-medium text-muted-foreground"
              >
                {bank}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">...and 40+ more partner institutions</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions? Our team is here to help you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-3">Fastest way to reach us</p>
                  <a
                    href="https://wa.me/917801801157?text=Hello%2C%20I%20have%20a%20query%20about%20loans."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    +91 78018 01157
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground mb-3">Mon-Sat, 9AM-7PM</p>
                  <a href="tel:+917801801157" className="text-accent hover:underline font-medium">
                    +91 78018 01157
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-3">We reply within 24 hours</p>
                  <a href="mailto:shankhfiances@gmail.com" className="text-accent hover:underline font-medium">
                    shankhfiances@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Office Address */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      123 Finance Street, Andheri West<br />
                      Mumbai, Maharashtra 400053<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimers */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">
              Important Disclaimers
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">We Are Not a Lender</h4>
                <p>
                  LoanEase is a loan advisory and facilitation service. We are not a bank, NBFC,
                  or any form of lending institution. We act as an intermediary between borrowers
                  and financial institutions.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Loan Approval</h4>
                <p>
                  All loan approvals are at the sole discretion of the respective bank or NBFC.
                  We do not guarantee loan approval, specific interest rates, or loan amounts.
                  Final terms are subject to lender policies and applicant eligibility.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Interest Rates</h4>
                <p>
                  Interest rates mentioned on this website are indicative and subject to change
                  without prior notice. Actual rates may vary based on the lender, loan product,
                  applicant profile, and prevailing market conditions.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Data Privacy</h4>
                <p>
                  Your personal information is handled with utmost care and is used solely for
                  loan processing purposes. We do not sell or share your data with unauthorized
                  third parties. By using our services, you consent to our data handling practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Start your loan journey today. Our experts are ready to help you find the best loan for your needs.
          </p>
          <Link to="/apply">
            <Button size="lg" className="gradient-gold text-foreground font-semibold gap-2">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
