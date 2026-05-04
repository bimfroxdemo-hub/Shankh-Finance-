import { useState, useMemo } from "react";
import { Calculator, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(1);

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <Card className="w-full max-w-md rounded-xl border border-gray-200 shadow-xl bg-white">
      {/* HEADER */}
      <CardHeader className="bg-gradient-to-r from-[#1E3A5F] to-[#2E5C8A] text-white rounded-t-xl py-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Calculator className="w-5 h-5" />
          EMI Calculator
        </CardTitle>
      </CardHeader>

      {/* BODY */}
      <CardContent className="p-6 space-y-6">
        {/* Loan Amount */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Loan Amount</span>
            <span className="text-lg font-bold text-[#1E3A5F]">
              ₹{(loanAmount / 100000).toFixed(2)} L
            </span>
          </div>

          <Slider
            value={[loanAmount]}
            onValueChange={(v) => setLoanAmount(v[0])}
            min={100000}
            max={50000000}
            step={100000}
          />

          <div className="flex justify-between text-xs text-gray-400">
            <span>₹1 L</span>
            <span>₹5 Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Interest Rate (p.a.)
            </span>
            <span className="text-lg font-bold text-[#1E3A5F]">
              {interestRate}%
            </span>
          </div>

          <Slider
            value={[interestRate]}
            onValueChange={(v) => setInterestRate(v[0])}
            min={6}
            max={24}
            step={0.1}
          />

          <div className="flex justify-between text-xs text-gray-400">
            <span>6%</span>
            <span>24%</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Loan Tenure
            </span>
            <span className="text-lg font-bold text-[#1E3A5F]">
              {tenure} Years
            </span>
          </div>

          <Slider
            value={[tenure]}
            onValueChange={(v) => setTenure(v[0])}
            min={1}
            max={30}
            step={1}
          />

          <div className="flex justify-between text-xs text-gray-400">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        {/* RESULT BOX */}
        <div className="bg-[#F3F6F9] rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Monthly EMI</span>
            <span className="text-2xl font-bold text-[#1E9E4A] flex items-center gap-1">
              <IndianRupee className="w-5 h-5" />
              {emi.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Principal</p>
              <p className="font-semibold text-[#1E3A5F]">
                ₹{loanAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Total Interest</p>
              <p className="font-semibold text-[#1E3A5F]">
                ₹{totalInterest.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total Amount</span>
            <span className="font-bold text-[#1E3A5F]">
              ₹{totalAmount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-[#3BA55D] hover:bg-[#32914F] text-white py-3 rounded-lg font-semibold">
          Get Best Rates on WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default EMICalculator;
