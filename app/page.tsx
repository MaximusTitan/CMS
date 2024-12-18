import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Users,
  BookOpen,
  Shield,
  MessageCircle,
  Rocket,
  ChartLine,
  Layout,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "Tailored experiences for Admins, Trainers, CX, and Kids",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description:
        "Create, assign, and track courses with advanced multimedia support",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "GDPR compliant with multi-factor authentication",
    },
    {
      icon: MessageCircle,
      title: "Integrated Support",
      description:
        "In-app chat and ticketing system for seamless communication",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-rose-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-rose-100 text-rose-700"
            >
              New: AI-Powered Learning Recommendations
            </Badge>
            <h1 className="text-4xl font-extrabold text-rose-900 sm:text-5xl md:text-6xl mb-6">
              Transforming Educational Experiences
            </h1>
            <p className="mt-3 text-base text-rose-600 sm:mt-5 sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              A comprehensive Course Management System designed to streamline
              learning, empower educators, and engage students across multiple
              roles.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/sign-up">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Sign Up <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-500 text-rose-500 hover:bg-rose-50"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rose-900 mb-4">
              Powerful Features for Every Role
            </h2>
            <p className="text-xl text-rose-600 max-w-2xl mx-auto">
              Our platform is meticulously designed to provide a comprehensive,
              intuitive learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-rose-100 hover:border-rose-300"
              >
                <CardHeader>
                  <div className="bg-rose-100 p-3 rounded-full inline-block mb-4">
                    <feature.icon className="text-rose-500 w-6 h-6" />
                  </div>
                  <CardTitle className="text-rose-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-rose-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-rose-900 mb-6">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto mb-12">
            Leveraging cutting-edge frameworks and cloud technologies to deliver
            a robust, scalable learning platform
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#00D8FF"
                  d="M23.993 32.548c4.724 0 8.555-3.83 8.555-8.555s-3.83-8.555-8.555-8.555-8.555 3.83-8.555 8.555 3.83 8.555 8.555 8.555z"
                />
                <path
                  fill="none"
                  stroke="#00D8FF"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  d="M23.998 27.798c-2.637 0-4.772-2.135-4.772-4.772s2.135-4.772 4.772-4.772 4.772 2.135 4.772 4.772-2.135 4.772-4.772 4.772z"
                />
                <path
                  fill="#00D8FF"
                  d="M23.907 16.788s-1.512 2.004-3.542 5.223c-2.13 3.394-4.54 7.656-5.58 10.323-1.045 2.718-1.244 4.54-1.244 4.54.198 1.223 1.093 2.223 2.34 2.223h15.25c1.248 0 2.143-1 2.34-2.223 0 0-.198-1.822-1.243-4.54-1.04-2.667-3.45-6.93-5.58-10.323-2.03-3.22-3.54-5.223-3.54-5.223zM40.64 20.343c-1.452 0-2.625-1.173-2.625-2.625s1.173-2.625 2.625-2.625 2.625 1.173 2.625 2.625-1.173 2.625-2.625 2.625zM7.36 20.343c-1.452 0-2.625-1.173-2.625-2.625s1.173-2.625 2.625-2.625 2.625 1.173 2.625 2.625-1.173 2.625-2.625 2.625zM40.64 40.64c-1.452 0-2.625-1.173-2.625-2.625s1.173-2.625 2.625-2.625 2.625 1.173 2.625 2.625-1.173 2.625-2.625 2.625zM7.36 40.64c-1.452 0-2.625-1.173-2.625-2.625s1.173-2.625 2.625-2.625 2.625 1.173 2.625 2.625-1.173 2.625-2.625 2.625z"
                />
              </svg>
              <span className="text-rose-700 mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="#44B788"
              >
                <path d="M24 4.2L4.4 40.4h39.2L24 4.2zm0 7.8l-12.1 21h24.2L24 12z" />
                <path d="M24 12l12.1 21H11.9L24 12z" />
              </svg>
              <span className="text-rose-700 mt-2">Vue</span>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="#DD0031"
              >
                <path d="M24 4.2L4.4 40.4h39.2L24 4.2zm0 7.8l-12.1 21h24.2L24 12z" />
                <path d="M24 12l12.1 21H11.9L24 12z" />
              </svg>
              <span className="text-rose-700 mt-2">Angular</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-rose-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Ready to Elevate Learning?
          </h2>
          <p className="mt-4 text-xl text-rose-100 max-w-2xl mx-auto">
            Join innovative institutions transforming education through
            technology
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-rose-500 hover:bg-rose-50"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-rose-400 hover:bg-rose-600"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
