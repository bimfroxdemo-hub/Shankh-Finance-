import { FileText, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loanTypes, rejectionReasons } from "@/data/loanData";
import { Helmet } from "react-helmet-async";
const Documents = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-12 md:py-16">
        <Helmet>
          <title>
            Loan Documents Required | SHANKH FINANCE Surat
          </title>

          <meta
            name="description"
            content="Check the required documents for Personal Loan, Home Loan, Business Loan and Mortgage Loan applications."
          />

          <meta
            name="keywords"
            content="Loan Documents Required, Home Loan Documents, Business Loan Documents"
          />

          <link
            rel="canonical"
            href="https://www.shankhfinance.com/documents"
          />
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Documents & Eligibility
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Know exactly what documents you need before applying.
            Being prepared speeds up your loan approval process.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 space-y-8">
          {loanTypes.map((loan) => {
            const Icon = loan.icon;

            const salariedDocs = loan.documents?.salaried || [];
            const selfEmployedDocs = loan.documents?.selfEmployed || [];

            const hasSalariedDocs = salariedDocs.length > 0;
            const hasSelfEmployedDocs = selfEmployedDocs.length > 0;

            return (
              <Card key={loan.id} id={loan.id} className="overflow-hidden">
                <CardHeader className="gradient-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    {loan.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6">
                  {hasSalariedDocs && hasSelfEmployedDocs ? (
                    <Tabs defaultValue="salaried">
                      <TabsList className="grid max-w-md grid-cols-2 mb-6">
                        <TabsTrigger value="salaried">Salaried</TabsTrigger>
                        <TabsTrigger value="self-employed">Self-Employed</TabsTrigger>
                      </TabsList>

                      {/* Salaried */}
                      <TabsContent value="salaried">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <FileText className="w-4 h-4 text-primary" />
                              Required Documents
                            </h4>
                            <ul className="space-y-2">
                              {salariedDocs.map((doc, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                  <span className="text-primary font-medium">{i + 1}.</span>{" "}
                                  {doc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Eligibility Criteria</h4>
                            <ul className="space-y-2">
                              {loan.eligibility.map((e, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                  • {e}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Self Employed */}
                      <TabsContent value="self-employed">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <FileText className="w-4 h-4 text-primary" />
                              Required Documents
                            </h4>
                            <ul className="space-y-2">
                              {selfEmployedDocs.map((doc, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                  <span className="text-primary font-medium">{i + 1}.</span>{" "}
                                  {doc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Eligibility Criteria</h4>
                            <ul className="space-y-2">
                              {loan.eligibility.map((e, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                  • {e}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          Required Documents
                        </h4>
                        <ul className="space-y-2">
                          {(selfEmployedDocs.length ? selfEmployedDocs : salariedDocs).map(
                            (doc, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                <span className="text-primary font-medium">{i + 1}.</span>{" "}
                                {doc}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Eligibility Criteria</h4>
                        <ul className="space-y-2">
                          {loan.eligibility.map((e, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              • {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Rejection Reasons */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Avoid These Common Rejection Reasons
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rejectionReasons.map((item, index) => (
              <Card key={index} className="border-destructive/20">
                <CardContent className="p-5 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{item.reason}</h4>
                    <p className="text-sm text-muted-foreground">{item.tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
