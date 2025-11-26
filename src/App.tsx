import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Resources = lazy(() => import("./pages/Resources"));
const Courses = lazy(() => import("./pages/Courses"));
const Lab = lazy(() => import("./pages/Lab"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const GdprCompliance = lazy(() => import("./pages/GdprCompliance"));
const ViewWaitList = lazy(() => import("./pages/ViewWaitList"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/gdpr-compliance" element={<GdprCompliance />} />
            <Route path="/view-waitlist" element={<ViewWaitList />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  </QueryClientProvider>
);

export default App;
