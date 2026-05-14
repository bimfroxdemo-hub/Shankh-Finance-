import LoanCard from "@/components/LoanCard";
import { loanTypes } from "@/data/loanData";
import { Helmet } from "react-helmet-async";
const Loans = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-12 md:py-16">
        <Helmet>
          <title>
            Loan Services in Surat | Personal, Home & Business Loans
          </title>

          <meta
            name="description"
            content="Explore Personal Loan, Home Loan, Business Loan, Mortgage Loan and Car Loan consultation services in Surat."
          />

          <meta
            name="keywords"
            content="Personal Loan Surat, Business Loan Surat, Mortgage Loan Consultant"
          />

          <link
            rel="canonical"
            href="https://www.shankhfinance.com/loans"
          />
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Loan Products
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our range of loan products designed to meet your diverse
            financial needs. Compare features and find the perfect loan for you.
          </p>
        </div>
      </section>

      {/* Loan Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan) => (
              <LoanCard
                key={loan.id}
                id={loan.id}
                title={loan.title}
                icon={loan.icon}
                description={loan.description}
                amountRange={loan.amountRange}
                benefits={loan.benefits}
                eligibility={loan.eligibility}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <p>
              <strong>Note:</strong> Interest rates, loan amounts, and eligibility
              criteria mentioned are indicative and may vary based on lender
              policies, applicant profile, and market conditions. Final terms
              will be confirmed by the respective bank or NBFC upon application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
