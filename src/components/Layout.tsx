import { Link, Outlet } from "react-router-dom";
import { CalendarCheck, Phone } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BUSINESS } from "../data/site";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-navy/95 p-3 backdrop-blur-xl lg:hidden">
        <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass !px-3 !py-3 !text-sm !whitespace-nowrap">
          <Phone className="h-4 w-4" /> Call now
        </a>
        <Link to="/contact" className="btn btn-blue !px-3 !py-3 !text-sm !whitespace-nowrap">
          <CalendarCheck className="h-4 w-4" /> Free inspection
        </Link>
      </div>
    </div>
  );
}
