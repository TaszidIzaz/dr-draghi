import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with actual EmailJS public key

      const result = await emailjs.sendForm('YOUR_SERVICE_ID',
      // Replace with actual service ID
      'YOUR_TEMPLATE_ID',
      // Replace with actual template ID
      formRef.current, 'YOUR_PUBLIC_KEY' // Replace with actual public key
      );
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours."
      });
      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at drsantiagodraghi@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl text-medical-navy font-medical mb-4 tracking-tight font-medium">
            Book A Consultation Today
          </h2>
          <p className="text-medical-steel max-w-2xl mx-auto font-normal text-xl">
            Appointments to see Dr Santiago Draghi can be made by contacting his practice using the details below:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-medical-navy/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-medical-navy mb-6 font-medical">
                  Contact Number
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-6 w-6 text-medical-gold" />
                  <div>
                    <p className="text-lg font-medium text-medical-navy">PH: 02 8382 6080</p>
                    <p className="text-medical-steel">FAX: 02 4044 0129</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-navy/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-medical-navy mb-6 font-medical">
                  Email Address
                </h3>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-medical-gold" />
                  <p className="text-medical-navy  text-lg">drsantiagodraghi@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-navy/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-medical-navy mb-6 font-medical">
                  Primary Consultation Locations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-medical-gold mt-1" />
                    <div>
                      <p className="font-medium text-medical-navy">St Vincent's Private Hospital</p>
                      <p className="text-medical-steel">Suite 1005, Level 10, 438 Victoria Street, Darlinghurst NSW 2010</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-medical-gold mt-1" />
                    <div>
                      <p className="font-medium text-medical-navy">Norwest Private Hospital</p>
                      <p className="text-medical-steel">Suite 105, Level 1, 9 Norbrik Drive, Bella Vista NSW 2153</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-navy/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-medical-navy mb-6 font-medical">
                  Consultation Hours
                </h3>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-medical-gold" />
                  <p className="text-lg text-medical-navy">
                    Monday – Friday: 09:00 – 17:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-medical-navy/20">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-medical-navy">Full Name</Label>
                      <Input id="fullName" name="fullName" placeholder="Full Name" required className="border-medical-navy/20" />
                    </div>
                    <div>
                      <Label htmlFor="age" className="text-medical-navy">Age</Label>
                      <Input id="age" name="age" type="number" placeholder="Age" className="border-medical-navy/20" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-medical-navy">Mobile Number</Label>
                    <Input id="mobile" name="mobile" type="tel" placeholder="Mobile Number" required className="border-medical-navy/20" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-medical-navy">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="Email Address" required className="border-medical-navy/20" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-medical-navy">City</Label>
                      <Input id="city" name="city" placeholder="City" className="border-medical-navy/20" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-medical-navy">State</Label>
                      <Input id="state" name="state" placeholder="State" className="border-medical-navy/20" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactMethod" className="text-medical-navy">Preferred Contact Method</Label>
                    <Select name="contactMethod">
                      <SelectTrigger className="border-medical-navy/20">
                        <SelectValue placeholder="Preferred Contact Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="either">Either</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="procedure" className="text-medical-navy">Type of Procedure</Label>
                    <Input id="procedure" name="procedure" placeholder="Type of Procedure" className="border-medical-navy/20" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-medical-navy">Message</Label>
                    <Textarea id="message" name="message" placeholder="Please provide details about your inquiry..." rows={6} className="border-medical-navy/20" />
                  </div>

                  <div>
                    <Label htmlFor="file" className="text-medical-navy">Attach Files (Optional)</Label>
                    <div className="mt-2">
                      <Input id="file" name="file" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="border-medical-navy/20" />
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-medical-navy text-white hover:bg-medical-navy/90 py-3 text-lg font-medium">
                    {isSubmitting ? "Submitting..." : "Submit Form"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;