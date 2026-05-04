import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { loanTypes } from "@/data/loanData";

/* ---------------- VALIDATION ---------------- */
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  loanType: z.string().min(1, "Please select a loan type"),
  city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must be less than 100 characters"),
  income: z.string().min(1, "Please select your income range"),
  employment: z.string().min(1, "Please select your employment type"),
});

/* ---------------- COMPONENT ---------------- */
const Apply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      loanType: "",
      city: "",
      income: "",
      employment: "",
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    const loanName =
      loanTypes.find((l) => l.id === data.loanType)?.title || data.loanType;

    const message = `Hello! I want to apply for ${loanName}.

My Details:
• Name: ${data.name}
• Mobile: ${data.mobile}
• City: ${data.city}
• Monthly Income: ${data.income}
• Employment: ${data.employment}

Please guide me with the next steps.`;

    const whatsappUrl = `https://wa.me/917801801157?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="gradient-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Apply for a Loan
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fill in your details below and our loan expert will connect with you
            on WhatsApp to guide you through the entire process.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Loan Application Form
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* NAME */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* MOBILE */}
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number *</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-gray-100 text-sm">
                                +91
                              </span>
                              <Input
                                placeholder="9876543210"
                                className="rounded-l-none"
                                maxLength={10}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LOAN TYPE */}
                    <FormField
                      control={form.control}
                      name="loanType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Type *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select loan type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {loanTypes.map((loan) => (
                                <SelectItem key={loan.id} value={loan.id}>
                                  {loan.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CITY */}
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* INCOME */}
                    <FormField
                      control={form.control}
                      name="income"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Income *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select income range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Below ₹25,000">
                                Below ₹25,000
                              </SelectItem>
                              <SelectItem value="₹25,000 - ₹50,000">
                                ₹25,000 - ₹50,000
                              </SelectItem>
                              <SelectItem value="₹50,000 - ₹1,00,000">
                                ₹50,000 - ₹1,00,000
                              </SelectItem>
                              <SelectItem value="Above ₹1,00,000">
                                Above ₹1,00,000
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* EMPLOYMENT */}
                    <FormField
                      control={form.control}
                      name="employment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employment Type *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select employment type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Salaried">Salaried</SelectItem>
                              <SelectItem value="Self-Employed">
                                Self-Employed
                              </SelectItem>
                              <SelectItem value="Business Owner">
                                Business Owner
                              </SelectItem>
                              <SelectItem value="Professional">
                                Professional (Doctor / CA / Lawyer)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* SUBMIT */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Submit & Connect on WhatsApp
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* NEXT STEPS */}
            <Card className="mt-8 border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">What Happens Next?</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {/* Step 1 */}
                  <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        WhatsApp Connection
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You'll be redirected to WhatsApp with your details
                        pre-filled.
                      </p>
                    </div>
                  </li>

                  {/* Step 2 */}
                  <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Expert Consultation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Our loan expert will review your profile and suggest
                        best options.
                      </p>
                    </div>
                  </li>

                  {/* Step 3 */}
                  <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Document Collection
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We'll guide you on required documents based on your loan
                        type.
                      </p>
                    </div>
                  </li>

                  {/* Final Step */}
                  <li className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Loan Processing
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We submit your application to banks and track until
                        disbursal.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* DISCLAIMER */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-sm text-gray-600 leading-relaxed">
            <p>
              By submitting this form, you agree to be contacted by our team for
              loan-related assistance via call or WhatsApp. Your information is
              secure and will only be used for loan processing purposes. We do
              not share your personal data with any third parties without your
              explicit consent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
