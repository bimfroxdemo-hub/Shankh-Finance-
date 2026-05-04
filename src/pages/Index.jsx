import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EMICalculator from "@/components/EMICalculator";
import { loanTypes, trustBadges } from "@/data/loanData";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-sm">
                <Shield className="w-4 h-4" />
                <span>Trusted by 10,000+ customers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Loan Journey{" "}
                <span className="text-finance-gold">Made Simple</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
                Get expert guidance for Home, Business, Personal Loans and more.
                Quick approvals. Best rates. Zero hassle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button
                    size="lg"
                    className="gradient-gold text-foreground font-semibold gap-2 w-full sm:w-auto"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <a
                  href="https://wa.me/917801801157?text=Hello%2C%20I%20want%20to%20inquire%20about%20loan%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 text-sm">
                {[
                  "No hidden charges",
                  "Free consultation",
                  "50+ bank partners",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-primary-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-finance-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
              <EMICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {badge.number}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loans for Every Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Home, Business, Personal, Education and more — we’ve got you
              covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              return (
                <Card
                  key={loan.id}
                  className="group hover:shadow-lg transition-all hover:border-primary/30"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-lg gradient-primary text-primary-foreground group-hover:scale-110 transition">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{loan.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {loan.shortDesc}
                        </p>
                        <p className="text-sm font-medium text-primary mt-2">
                          {loan.amountRange}
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/loans"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/loans">
              <Button size="lg" variant="outline" className="gap-2">
                View All Loan Details
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Expert Guidance",
                desc: "Step-by-step loan support",
              },
              {
                icon: Clock,
                title: "Quick Processing",
                desc: "Faster approvals",
              },
              {
                icon: TrendingUp,
                title: "Best Rates",
                desc: "50+ bank comparison",
              },
              {
                icon: Shield,
                title: "100% Transparent",
                desc: "No hidden fees",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
