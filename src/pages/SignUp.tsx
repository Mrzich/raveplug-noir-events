
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Account created!",
        description: "You have successfully signed up.",
      });
      navigate("/");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/d4104dcc-7899-4b43-bc04-26d48fd53b29.png"
            alt="The Rave Plug Logo" 
            className="h-16"
          />
        </div>
        
        <Card className="border border-white/10 bg-black text-white">
          <CardHeader>
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your details to get started with The Rave Plug
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" required className="bg-rave-gray/10 border-white/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" required className="bg-rave-gray/10 border-white/20 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="bg-rave-gray/10 border-white/20 text-white" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required className="bg-rave-gray/10 border-white/20 text-white" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required className="bg-rave-gray/10 border-white/20 text-white" />
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="#" className="text-white underline hover:text-gray-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-white underline hover:text-gray-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Create Account"}
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-white underline hover:text-gray-300">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-white">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
