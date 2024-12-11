import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { CatalogPage } from './pages/CatalogPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthPage } from './pages/AuthPage';
import { ExplorePage } from './pages/ExplorePage';
import { TravelServicesPage } from './pages/TravelServicesPage';
import { RegulationsPage } from './pages/RegulationsPage';
import { ContactPage } from './pages/ContactPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { CookieConsent } from './components/common/CookieConsent';
import { initializeAds } from './services/adService';

function App() {
  React.useEffect(() => {
    console.log('App initialized');
    initializeAds();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 pb-20">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/destinations" element={<CatalogPage />} />
              <Route path="/country/:id" element={<CountryPage />} />
              <Route path="/services" element={<TravelServicesPage />} />
              <Route path="/regulations" element={<RegulationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <FavoritesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <BottomNav />
          <CookieConsent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;