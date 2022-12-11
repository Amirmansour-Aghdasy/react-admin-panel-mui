import {
  HomeOutlined,
  GroupOutlined,
  EmailOutlined,
  ArticleOutlined,
  FactCheckOutlined,
  ShoppingCartOutlined,
  InsertCommentOutlined,
  ScheduleSendOutlined,
  SendOutlined,
} from "@mui/icons-material";

//* Sidebar List Items => Used in The Sidebar & Home Components.
export const SidebarListItems = [
  {
    path: "/",
    icon: <HomeOutlined />,
    text: "صفحه اصلی",
    subTitle: "ناحیه اصلی مدیریتی ( دسترسی سریع )",
  },
  {
    path: "/users",
    icon: <GroupOutlined />,
    text: "کاربران",
    subTitle: "اطلاعات کل کاربران سایت",
  },
  {
    path: "/products",
    icon: <ShoppingCartOutlined />,
    text: "محصولات سایت",
    subTitle: "موجودی کل محصولات موجود",
  },
  {
    path: "/transaction-report",
    icon: <FactCheckOutlined />,
    text: "صورت حساب ها",
    subTitle: "گزارش کل گردش مالی و تراکنش های سایت",
  },
  {
    path: "/articles",
    icon: <ArticleOutlined />,
    text: "مقالات وبلاگ ",
    subTitle: "تعداد کل مقالات آموزشی وبلاگ",
  },
  {
    path: "/tickets",
    icon: <ScheduleSendOutlined />,
    text: "تیکت های پشتیبانی",
    subTitle: "صندوق ورودی تیکت های پشتیبانی",
  },
  {
    path: "/comments",
    icon: <InsertCommentOutlined />,
    text: "دیدگاه کاربران",
    subTitle: "تمام دیدگاه های پست ها و محصولات",
  },
  {
    path: "/emails",
    icon: <EmailOutlined />,
    text: "ایمیل های دریافتی",
    subTitle: "صندوق ورودی کل ایمیل های سایت",
  },
  {
    path: "/contact-us",
    icon: <SendOutlined />,
    text: "صندوق تماس با ما",
    subTitle: "ورودی تمام پیام های تماس با ما",
  },
];
