import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { KINETIK_BASIS } from "./pages/kinetik/seiten";
import Uebersicht from "./pages/kinetik/Uebersicht";
import Beispiele from "./pages/kinetik/Beispiele";
import WieDasFunktioniert from "./pages/kinetik/WieDasFunktioniert";
import WoherDieTechnikKommt from "./pages/kinetik/WoherDieTechnikKommt";
import AufwandUndPerspektive from "./pages/kinetik/AufwandUndPerspektive";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/product/:slug"} component={ProductDetail} />
      <Route path={"/imprint"} component={Imprint} />
      <Route path={"/privacy"} component={PrivacyPolicy} />

      {/*
        Der unverlinkte Kinetik-Bereich. Basispfad und Reihenfolge stehen in
        pages/kinetik/seiten.ts; der Server hält alles unterhalb des Basispfads
        über X-Robots-Tag: noindex aus dem Index (siehe server/index.ts).
      */}
      <Route path={KINETIK_BASIS} component={Uebersicht} />
      <Route path={`${KINETIK_BASIS}/beispiele`} component={Beispiele} />
      <Route
        path={`${KINETIK_BASIS}/wie-das-funktioniert`}
        component={WieDasFunktioniert}
      />
      <Route
        path={`${KINETIK_BASIS}/woher-die-technik-kommt`}
        component={WoherDieTechnikKommt}
      />
      <Route
        path={`${KINETIK_BASIS}/aufwand-und-perspektive`}
        component={AufwandUndPerspektive}
      />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <CookieConsent />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
