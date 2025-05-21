enum ServicesTitle {
  Intelligent_road_transport_management = "مدیریت هوشمند حمل جاده‌ای",
  Ship_planning_and_docking = "برنامه‌ریزی و پهلودهی کشتی",
  Managing_the_movement_of_goods = "مدیریت جابجایی کالا",
  Freigh_transportation_managemen = "مدیریت حمل و نقل کالا",
  Intelligent_Traffic_Management = "مدیریت هوشمند ترافیک (ITS)",
}
enum TextColor {
  black = "#1C1B1B",
  purpel = "#1D0B4D",
  gray = "#635884",
}
enum ListColor {
  first = "#8E7DA8",
  second = "rgba(196, 188, 252, 0.80)",
}
interface ServiceInfo {
  title: ServicesTitle;
  color: TextColor;
  listColor: ListColor;
  opacity?: string;
}

export const servicesInfo: Array<ServiceInfo> = [
  {
    title: ServicesTitle.Intelligent_road_transport_management,
    color: TextColor.black,
    listColor: ListColor.first,
  },
  {
    title: ServicesTitle.Ship_planning_and_docking,
    color: TextColor.black,
    listColor: ListColor.second,
  },
  {
    title: ServicesTitle.Managing_the_movement_of_goods,
    color: TextColor.black,
    listColor: ListColor.second,
  },
  {
    title: ServicesTitle.Freigh_transportation_managemen,
    color: TextColor.purpel,
    listColor: ListColor.second,
    opacity: "0.4",
  },
  {
    title: ServicesTitle.Intelligent_Traffic_Management,
    color: TextColor.gray,
    listColor: ListColor.second,
    opacity: "0.2",
  },
];
