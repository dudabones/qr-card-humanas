import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a4f89176bd49402cb0575c6e4aa9cd9c',
  appName: 'qr-card-welcome',
  webDir: 'dist',
  server: {
    url: "https://a4f89176-bd49-402c-b057-5c6e4aa9cd9c.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    App: {
      launchUrl: "https://a4f89176-bd49-402c-b057-5c6e4aa9cd9c.lovableproject.com?forceHideBadge=true"
    }
  }
};

export default config;