const enum NavbarItems {
  Home = "خانه",
  Services = "خدمات",
  About_avesta = "درباره اوستا",
  Truck_recall = "فراخوان کامیون‌ها",
  Job_opportunities = "فرصت‌های شغلی",
  Digital_archive = "آرشیو دیجیتال",
  Contact_us = "ارتباط با ما",
}

export const menu: Array<{ label: NavbarItems; route: string }> = [
  { label: NavbarItems.Home, route: "/" },
  { label: NavbarItems.Services, route: "/services" },
  { label: NavbarItems.About_avesta, route: "/aboutus" },
  { label: NavbarItems.Truck_recall, route: "/truck" },
  { label: NavbarItems.Job_opportunities, route: "/jobs" },
  { label: NavbarItems.Digital_archive, route: "/archive" },
  { label: NavbarItems.Contact_us, route: "/contactus" },
];
