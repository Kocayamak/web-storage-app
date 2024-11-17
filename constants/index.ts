export const navItems = [
  {
    name: "Anasayfa",
    icon: "/assets/icons/dashboard.svg",
    url: "/",
  },
  {
    name: "Dosyalar",
    icon: "/assets/icons/documents.svg",
    url: "/documents",
  },
  {
    name: "Resimler",
    icon: "/assets/icons/images.svg",
    url: "/images",
  },
  {
    name: "Medya",
    icon: "/assets/icons/video.svg",
    url: "/media",
  },
  {
    name: "Diğer",
    icon: "/assets/icons/others.svg",
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Adını Düzenle",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Detaylar",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Paylaş",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "İndir",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Sil",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024;
