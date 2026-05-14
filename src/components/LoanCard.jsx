import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
const LoanCard = ({
  id,
  title,
  icon: Icon,
  description,
  amountRange,
  benefits,
  eligibility,
}) => {
  return (
    <Card
      id={id}
      className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
    >
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <CardTitle className="text-xl text-foreground">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Loan Amount */}
        <div className="bg-muted rounded-lg p-3">
          <span className="text-xs text-muted-foreground">
            Loan Amount
          </span>
          <p className="text-lg font-bold text-primary">
            {amountRange}
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold mb-2">
            Key Benefits
          </h4>
          <ul className="space-y-1.5">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility */}
        <div>
          <h4 className="text-sm font-semibold mb-2">
            Quick Eligibility
          </h4>
          <ul className="space-y-1">
            {eligibility.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link to="/documents" className="flex-1">
            <Button variant="outline" className="w-full text-sm">
              Check Documents
            </Button>
          </Link>

          <Link to="/apply" className="flex-1">
            <Button className="w-full gradient-accent text-accent-foreground gap-1 text-sm">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCard;
