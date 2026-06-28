import "./globals.css";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
         
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{
            top: 30,
          }}
          toastOptions={{
            duration: 2000,
            style: {
              background:
                "linear-gradient(90deg, #023e73 0%, #0474C4 55%, #7ec3ff 100%)",
              color: "#fff",
              borderRadius: "16px",
              padding: "16px 22px",
              fontSize: "15px",
              fontWeight: "500",
              boxShadow: "0 12px 35px rgba(4,116,196,.35)",
              border: "1px solid rgba(255,255,255,.15)",
            },

            success: {
              iconTheme: {
                primary: "#7ec3ff",
                secondary: "#023e73",
              },
            },

            error: {
              iconTheme: {
                primary: "#ffffff",
                secondary: "#dc2626",
              },
            },
          }}
        />
      </body>
    </html>
  );
}