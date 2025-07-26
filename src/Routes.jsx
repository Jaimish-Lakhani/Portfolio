import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import DynamicHomepage from "pages/dynamic-homepage";
import ProjectShowcaseGalaxy from "pages/project-showcase-galaxy";
import CollaborationStudio from "pages/collaboration-studio";
import TechnicalMasteryCenter from "pages/technical-mastery-center";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<DynamicHomepage />} />
          <Route path="/dynamic-homepage" element={<DynamicHomepage />} />
          <Route path="/project-showcase-galaxy" element={<ProjectShowcaseGalaxy />} />
          <Route path="/collaboration-studio" element={<CollaborationStudio />} />
          <Route path="/technical-mastery-center" element={<TechnicalMasteryCenter />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;