import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wwesjsjngjrazbtgujxl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3ZXNqc2puZ2pyYXpidGd1anhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMjIwNzYsImV4cCI6MjA5MDU5ODA3Nn0.R_ZS2IqEVp1pTTuuKIC_EztcAlUcQ28W32kNCbvxu74"
);

function IconWrapper({ children, dark = false }) {
  return (
    <div
      className={[
        "flex items-center justify-center transition duration-300",
        dark
          ? "h-12 w-12 rounded-[18px] bg-[linear-gradient(145deg,#e7f0ff,#dff4ff)] text-[#456a99] shadow-[0_12px_28px_rgba(86,132,196,0.14)] ring-1 ring-[#d9e8ff]/70 sm:h-14 sm:w-14 sm:rounded-[20px]"
          : "h-11 w-11 rounded-[16px] bg-[linear-gradient(145deg,#f3f8ff,#ebf6ff)] text-[#53759f] shadow-[0_10px_22px_rgba(86,132,196,0.10)] ring-1 ring-[#d9e8ff]/50 sm:h-12 sm:w-12 sm:rounded-[18px]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PhoneIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h9L20 9.5v9A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M14 4v5.5a1 1 0 0 0 1 1H20" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5A8.5 8.5 0 0 1 8.33 18.9L3 20l1.14-5.15A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M9.6 9.7c.22-.5.46-.5.68-.5h.58c.18 0 .43.07.55.34.14.31.48 1.13.52 1.21.04.08.07.18.01.29-.06.11-.1.18-.19.28-.09.09-.18.21-.26.28-.09.08-.19.17-.08.34.11.18.49.82 1.06 1.32.73.66 1.35.87 1.55.97.2.09.31.08.42-.05.12-.14.5-.58.63-.78.13-.2.27-.17.46-.1.19.06 1.18.56 1.38.66.2.1.34.15.39.23.05.08.05.48-.11.94-.16.45-.93.89-1.28.95-.33.05-.76.08-2.44-.62-2.03-.84-3.33-2.9-3.43-3.03-.1-.14-.83-1.11-.83-2.11 0-.99.52-1.48.71-1.68Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function CalendarIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ChevronRightIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}


export default function LinktreeStyleProfile() {
  const ADMIN_USERNAME = "ojaljain";
  const ADMIN_PASSWORD = "Ojaljain@170829";

  const defaultEvent = {
    enabled: false,
    title: "",
    formLink: "",
    info: "",
  };

  const [adminOpen, setAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [eventData, setEventData] = useState(defaultEvent);
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);
  const [isSavingEvent, setIsSavingEvent] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  

  useEffect(() => {
    const savedLoginState = window.localStorage.getItem("link-app-admin-auth");

    async function loadEventFromSupabase() {
      try {
        const { data, error } = await supabase
          .from("app_event")
          .select("enabled, title, form_link, info")
          .eq("id", "main")
          .maybeSingle();

        if (error) {
          console.error("Could not load event from Supabase", error);
        }

        if (data) {
          setEventData({
            enabled: Boolean(data.enabled),
            title: data.title || "",
            formLink: data.form_link || "",
            info: data.info || "",
          });
        }
      } catch (error) {
        console.error("Could not load event from Supabase", error);
      } finally {
        setIsLoadingEvent(false);
      }
    }

    loadEventFromSupabase();

    if (savedLoginState === "true") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoadingEvent) {
      window.localStorage.setItem("link-app-event", JSON.stringify(eventData));
    }
  }, [eventData, isLoadingEvent]);

  useEffect(() => {
    window.localStorage.setItem("link-app-admin-auth", String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  function handleAdminLogin(event) {
    event.preventDefault();

    if (
      loginForm.username === ADMIN_USERNAME &&
      loginForm.password === ADMIN_PASSWORD
    ) {
      setIsAdminLoggedIn(true);
      setLoginError("");
      setLoginForm({ username: "", password: "" });
      return;
    }

    setLoginError("Invalid username or password");
  }

  function handleLogout() {
    setIsAdminLoggedIn(false);
    setLoginForm({ username: "", password: "" });
    setLoginError("");
  }
  async function handleSaveWorkshop() {
    setIsSavingEvent(true);
    setSaveMessage("");

    try {
      const payload = {
        id: "main",
        enabled: eventData.enabled,
        title: eventData.title.trim(),
        form_link: eventData.formLink.trim(),
        info: eventData.info.trim(),
      };

      const { error } = await supabase.from("app_event").upsert(payload, {
        onConflict: "id",
      });

      if (error) {
        throw error;
      }

      setSaveMessage("Workshop saved across all devices");
      window.setTimeout(() => setSaveMessage(""), 2500);
    } catch (error) {
      console.error("Could not save workshop", error);
      setSaveMessage("Could not save workshop");
      window.setTimeout(() => setSaveMessage(""), 2500);
    } finally {
      setIsSavingEvent(false);
    }
  }

  const workshopCard = useMemo(() => {
    const hasTitle = eventData.title.trim().length > 0;
    const hasFormLink = eventData.formLink.trim().length > 0;

    if (!eventData.enabled || !hasTitle || !hasFormLink) {
      return null;
    }

    return {
      label: eventData.title,
      href: eventData.formLink,
      icon: <CalendarIcon />,
      badge: "Live",
      description: eventData.info,
    };
  }, [eventData]);

  const profile = {
    name: "Ojal Jain | Inner Lens",
    title: "Counselling Psychologist",
   
    photo:
      "https://lh3.googleusercontent.com/d/19ISfHiNty5DbJYhm-50SSzv0f-YzQiqJ",
    contact: {
      phone: "+91 9080411653",
      googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSeEcWPuoWdxciZ4s74huh6C3nn0c3gBzI871nVdMXGlh1j_NQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnMaz7mr1Y7hFcT4bRsedy_b1SlAMJvsp19FyasI5AIE4ZDBM77r3bh2TNC3s_aem_I2esAACbjL7hebqWRU4xRw",
    },
    instagram: "https://instagram.com/_innerlens",
    email: "mailto:theinnerlens.ojal@gmail.com",
    linkedin: "https://linkedin.com/in/ojaljain22",
  };

  const whatsappHref = `https://wa.me/${profile.contact.phone.replace(/[^\d]/g, "")}`;
  const appFontStyle = { fontFamily: '"Poppins", sans-serif' };

  const quickLinks = [
    { href: whatsappHref, icon: <WhatsAppIcon className="h-5 w-5 text-[#5e7fa9]" />, label: "WhatsApp" },
    { href: profile.instagram, icon: <InstagramIcon className="h-5 w-5 text-[#5e7fa9]" />, label: "Instagram" },
    { href: profile.email, icon: <MailIcon className="h-5 w-5 text-[#5e7fa9]" />, label: "Email" },
    { href: profile.linkedin, icon: <LinkedInIcon className="h-5 w-5 text-[#5e7fa9]" />, label: "LinkedIn" },
  ];

  const cards = [
    {
      label: "Contact Form",
      href: profile.contact.googleForm,
      icon: <PhoneIcon />,
    },
    {
      label: "WhatsApp",
      href: whatsappHref,
      icon: <WhatsAppIcon />,
    },
    {
      label: "Instagram",
      href: profile.instagram,
      icon: <InstagramIcon />,
    },
    {
      label: "Email",
      href: profile.email,
      icon: <MailIcon />,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: <LinkedInIcon />,
    },
  ];

  if (workshopCard) {
    cards.push(workshopCard);
  }

  return (
    <div
      className="min-h-screen bg-[linear-gradient(180deg,#f4f8ff_0%,#edf4ff_34%,#eef8ff_68%,#f7fbff_100%)] px-3 py-4 font-[Poppins] sm:px-6 sm:py-10"
      style={appFontStyle}
    >
      <div className="mx-auto max-w-md sm:max-w-lg">
        <div className="relative overflow-hidden rounded-[28px] border border-[#dbe8fb] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,247,255,0.93))] p-4 shadow-[0_20px_50px_rgba(92,136,198,0.12)] backdrop-blur-xl sm:rounded-[36px] sm:p-7 sm:shadow-[0_28px_75px_rgba(92,136,198,0.14)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),rgba(221,235,255,0.34)_44%,transparent_74%)]" />

          <div className="relative z-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(189,221,255,0.46),_transparent_70%)]" />

            <div className="mb-4 flex items-start justify-between">
              <div className="h-11 w-11 rounded-full bg-[linear-gradient(145deg,#eef5ff,#e8f6ff)] shadow-[0_8px_20px_rgba(92,136,198,0.10)] ring-1 ring-[#d7e7ff]/55" />
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(145deg,#eef5ff,#e7f5ff)] text-[#53739c] shadow-[0_8px_20px_rgba(92,136,198,0.10)] ring-1 ring-[#d7e7ff]/55 transition duration-300 hover:scale-105 hover:bg-[#f6fbff]"
                onClick={() => setAdminOpen((v) => !v)}
                aria-label="Toggle admin panel"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </button>
            </div>

            {adminOpen && (
              <div className="mb-6 rounded-[20px] border border-[#dce8fb] bg-[linear-gradient(180deg,#f7fbff,#eef5ff)] p-3.5 shadow-[0_14px_30px_rgba(92,136,198,0.10)] sm:rounded-[24px] sm:p-4">
                {!isAdminLoggedIn ? (
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-sm font-semibold text-[#110703]">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        value={loginForm.username}
                        onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                        className="mt-1 block w-full rounded-xl border border-[#d8e6fa] bg-[#fdfefe] px-3 py-2.5 text-sm text-[#45617f] shadow-[0_6px_16px_rgba(92,136,198,0.06)] outline-none focus:border-[#7ea6d8] focus:ring-2 focus:ring-[#c7dbf7]/60"
                        style={appFontStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-semibold text-[#110703]">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="mt-1 block w-full rounded-xl border border-[#d8e6fa] bg-[#fdfefe] px-3 py-2.5 text-sm text-[#45617f] shadow-[0_6px_16px_rgba(92,136,198,0.06)] outline-none focus:border-[#7ea6d8] focus:ring-2 focus:ring-[#c7dbf7]/60"
                        style={appFontStyle}
                      />
                    </div>
                    {loginError && <p className="text-xs text-red-600">{loginError}</p>}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[linear-gradient(145deg,#7ea6d8,#5f87bb)] px-4 py-2.5 text-sm font-semibold text-[#fafdff] shadow-[0_10px_22px_rgba(92,136,198,0.14)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
                      style={appFontStyle}
                    >
                      Log In
                    </button>
                  </form>
                ) : (
                  <>
                    <div className="mb-4 flex items-center gap-3">
                      <input
                        id="workshopEnabled"
                        type="checkbox"
                        checked={eventData.enabled}
                        onChange={(e) => setEventData({ ...eventData, enabled: e.target.checked })}
                        className="h-5 w-5 rounded-md border border-[#d8e6fa] bg-[#ffffff] text-[#6d95c6] focus:ring-2 focus:ring-[#c7dbf7]/60"
                      />
                      <label htmlFor="workshopEnabled" className="text-sm font-semibold text-[#110703]">
                        Show workshop tile
                      </label>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="eventTitle" className="block text-sm font-semibold text-[#110703]">
                        Workshop title
                      </label>
                      <input
                        id="eventTitle"
                        type="text"
                        value={eventData.title}
                        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                        className="mt-1 block w-full rounded-xl border border-[#d8e6fa] bg-[#fdfefe] px-3 py-2.5 text-sm text-[#45617f] shadow-[0_6px_16px_rgba(92,136,198,0.06)] outline-none focus:border-[#7ea6d8] focus:ring-2 focus:ring-[#c7dbf7]/60"
                        style={appFontStyle}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="formLink" className="block text-sm font-semibold text-[#110703]">
                        Google Form link
                      </label>
                      <input
                        id="formLink"
                        type="text"
                        value={eventData.formLink}
                        onChange={(e) => setEventData({ ...eventData, formLink: e.target.value })}
                        className="mt-1 block w-full rounded-xl border border-[#d8e6fa] bg-[#fdfefe] px-3 py-2.5 text-sm text-[#45617f] shadow-[0_6px_16px_rgba(92,136,198,0.06)] outline-none focus:border-[#7ea6d8] focus:ring-2 focus:ring-[#c7dbf7]/60"
                        style={appFontStyle}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="workshopInfo" className="block text-sm font-semibold text-[#110703]">
                        Workshop info
                      </label>
                      <textarea
                        id="workshopInfo"
                        rows={2}
                        value={eventData.info}
                        onChange={(e) => setEventData({ ...eventData, info: e.target.value })}
                        className="mt-1 block w-full rounded-xl border border-[#d8e6fa] bg-[#fdfefe] px-3 py-2.5 text-sm text-[#45617f] shadow-[0_6px_16px_rgba(92,136,198,0.06)] outline-none focus:border-[#7ea6d8] focus:ring-2 focus:ring-[#c7dbf7]/60"
                        style={appFontStyle}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveWorkshop}
                      disabled={isSavingEvent}
                      className="mb-3 w-full rounded-xl bg-[linear-gradient(145deg,#7ea6d8,#5f87bb)] px-4 py-2.5 text-sm font-semibold text-[#fafdff] shadow-[0_10px_22px_rgba(92,136,198,0.14)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                      style={appFontStyle}
                    >
                      {isSavingEvent ? "Saving..." : "Save workshop"}
                    </button>

                    {saveMessage ? (
                      <p className="mb-3 text-center text-xs font-medium text-[#5d7da5]">
                        {saveMessage}
                      </p>
                    ) : null}

                    <button
                      type="button"
                      onClick={() =>
                        setEventData({
                          ...defaultEvent,
                        })
                      }
                      className="mb-3 w-full rounded-xl bg-[#e9f3ff] px-4 py-2.5 text-sm font-semibold text-[#56759a] shadow-[0_8px_18px_rgba(92,136,198,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#deecff]"
                      style={appFontStyle}
                    >
                      Clear workshop
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full rounded-xl bg-[linear-gradient(145deg,#7ea6d8,#5f87bb)] px-4 py-2.5 text-sm font-semibold text-[#fafdff] shadow-[0_10px_22px_rgba(92,136,198,0.14)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
                      style={appFontStyle}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}

            <div className="flex flex-col items-center text-center pt-1">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,_rgba(204,225,255,0.72),_rgba(214,240,255,0.24)_58%,_transparent_74%)] blur-xl" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative h-24 w-24 rounded-full object-cover ring-4 ring-[#fffaf5] shadow-[0_18px_38px_rgba(125,95,72,0.16)] sm:h-28 sm:w-28"
                />
              </div>

              <h1
                className="mt-4 text-[clamp(1.05rem,6.4vw,1.35rem)] font-bold leading-[0.95] tracking-[-0.045em] min-[430px]:tracking-[-0.035em] sm:mt-5 sm:text-[1.95rem] sm:whitespace-nowrap"
                style={{ ...appFontStyle, color: "#5a6f82" }}
              >
                {profile.name}
              </h1>
              
              <p className="mt-2 text-[0.9rem] font-semibold uppercase tracking-[0.16em] text-[#6785ad] sm:text-base sm:tracking-[0.22em]" style={appFontStyle}>{profile.title}</p>
              

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-[#eaf2ff] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6483ab] shadow-[0_8px_16px_rgba(92,136,198,0.08)] ring-1 ring-[#d7e7ff]/70" style={appFontStyle}>Available for bookings</span>
                <span className="rounded-full bg-[#e9f8ff] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5b839b] shadow-[0_8px_16px_rgba(103,164,198,0.07)] ring-1 ring-[#d8eef7]/70" style={appFontStyle}>Online</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noreferrer"
                    aria-label={item.label}
                    className="group transition duration-300 hover:-translate-y-1.5"
                  >
                    <div className="group-hover:scale-105"><IconWrapper>{item.icon}</IconWrapper></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
              {cards.map((card) => {
                const isMail = card.href.startsWith("mailto:");

                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={isMail ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-[24px] border border-[#dbe8fb] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,247,255,0.95))] p-3.5 shadow-[0_14px_30px_rgba(92,136,198,0.10)] ring-1 ring-[#d7e7ff]/20 transition duration-300 hover:-translate-y-1 hover:border-[#c8dbf6] hover:shadow-[0_24px_42px_rgba(92,136,198,0.14)] sm:rounded-[28px] sm:p-4 sm:hover:-translate-y-1.5"
                    style={appFontStyle}
                  >
                    <div className="flex items-start gap-3.5 sm:items-center sm:gap-4">
                      <IconWrapper dark>{card.icon}</IconWrapper>

                      <div className="min-w-0 flex-1 overflow-hidden text-[#5a4132]">
                        <div className="mb-1 flex items-center gap-2">
                          <h2
                            className="truncate text-base font-semibold sm:text-[1.05rem]"
                            style={{ ...appFontStyle, color: "#4b688f" }}
                          >
                            {card.label}
                          </h2>
                          {card.badge ? (
                            <span className="rounded-full bg-[#eaf2ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6481a8] ring-1 ring-[#d7e7ff]/70" style={appFontStyle}>
                              {card.badge}
                            </span>
                          ) : null}
                        </div>
                        {card.description ? (
                          <p className="text-[0.92rem] leading-5 sm:text-sm" style={{ ...appFontStyle, color: "#6e82a1" }}>
                            {card.description}
                          </p>
                        ) : null}
                        {card.value ? (
                          <p className="mt-1 break-all text-[0.92rem] font-medium leading-5 sm:text-sm" style={{ ...appFontStyle, color: "#5e7fa1" }}>
                            {card.value}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#eaf2ff,#e6f6ff)] text-[#6280a8] shadow-[0_6px_14px_rgba(92,136,198,0.08)] transition duration-300 group-hover:scale-105 group-hover:bg-[#6f97cb] group-hover:text-[#ffffff] sm:h-10 sm:w-10">
                        <ChevronRightIcon className="h-5 w-5" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
