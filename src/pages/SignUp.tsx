
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    }, 1500);
  };
  
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
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
        
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signup">
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
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="signin">
            <Card className="border border-white/10 bg-black text-white">
              <CardHeader>
                <CardTitle className="text-xl">Sign in to your account</CardTitle>
                <CardDescription className="text-gray-400">
                  Welcome back to The Rave Plug
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input id="signin-email" type="email" placeholder="john@example.com" required className="bg-rave-gray/10 border-white/20 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="signin-password">Password</Label>
                      <a href="#" className="text-sm text-white hover:text-gray-300 underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input id="signin-password" type="password" required className="bg-rave-gray/10 border-white/20 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
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
