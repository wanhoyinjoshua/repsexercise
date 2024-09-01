
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
const inter = Inter({ subsets: ["latin"] });
/*
<title>REPS- Lower limb and upper limb exercises for people with stroke</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name={`REPS physiotherapy exercises for people with stroke`} content="REPS consists of two post stroke exercise programs TASK and PUSH. Both programs utilise a stragety that can assist recovery after stroke - repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements." />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
            <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        */
export const metadata: Metadata = {
  title: "REPS- Lower limb and upper limb exercises for people with stroke",
  description: "REPS physiotherapy exercises for people with stroke",
  icons:[{ rel: "icon", url: "https://www.repsexercise.com.au/favicon.ico" }, { rel: "apple-touch-icon", url: "https://www.repsexercise.com.au/apple-icon.png" }],
  keywords:["stroke", "exercises","task specific training","repetitions","recovery","neurological physiotherapy","videos","exercise programs"]
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <Navbar></Navbar>
        
        {children}
     
       
        <Footer></Footer>
        </body>
    </html>
  );
}
