import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import profileImage from "../../assets/img/profile.jpg";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { GrLinkedinOption } from "@react-icons/all-files/gr/GrLinkedinOption";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const Home = () => {
  const socialLink = [
    {
      id: 1,
      icon: <AiFillGithub />,
      linkAddress: "https://github.com/mohazizzi",
      targetBlank: true,
    },
    {
      id: 2,
      icon: <FaTelegramPlane />,
      linkAddress: "https://t.me/mohazizzi",
      targetBlank: true,
    },
    {
      id: 3,
      icon: <AiOutlineInstagram />,
      linkAddress: "https://www.instagram.com/mohazizzi",
      targetBlank: true,
    },
    {
      id: 4,
      icon: <AiFillYoutube />,
      linkAddress: "",
      targetBlank: true,
    },
    {
      id: 5,
      icon: <GrLinkedinOption />,
      linkAddress: "",
      targetBlank: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="home-page">
        <div className="container">
          <div className="home-page_info">
            <div className="home-page_info_profile">
              <img
                src={profileImage}
                alt="پروفایل"
                className="home-page_info_profile_img"
              />
            </div>
            <div className="home-page_info_title">
              <h1 className="home-page_info_title_name">محمدرضاعزیزی</h1>
              <h2 className="home-page_info_title_subtitle">
                برنامه نویس فرانت اند
              </h2>
            </div>
          </div>
          <div className="home-page_summary">
            <h3 className="home-page_summary_title">
              درحال حاضر با فریمورک ری اکت کار میکم
            </h3>
            <p className="home-page_summary_text">
              دانشجوام و ۲۲ سالمه، از درست کردن وبسایت و خلق ایده های جدید لذت
              میبرم، معتقدم هرکاری رو با علاقه انجام بدیم بهترین نتیجه را خواهد
              داشت.
            </p>
            <p className="home-page_summary_slogan">
              &#10094;-- کاری که دوست داری انجام بده و از کاری که انجام میدی لذت
              ببر !--&#10095;
            </p>
          </div>
          <div className="home-page_social-media">
            {socialLink.map(
              (social) =>
                social.linkAddress !== "" && (
                  <a
                    key={social.id}
                    className="home-page_social-media_link"
                    href={social.linkAddress || "#"}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {social.icon}
                  </a>
                )
            )}
          </div>
          <button className="home-page_btn">دانلود رزومه</button>
        </div>
      </main>
    </>
  );
};

export default Home;
