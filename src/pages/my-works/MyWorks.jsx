import "./my-works.css";

import Navbar from "../../components/navbar/Navbar";
// works images
import website1 from "../../assets/img/images/ecommerice-website.jpg";
import website2 from "../../assets/img/images/shop-grid.png";
import website3 from "../../assets/img/images/my-schedule.png";

const worksData = [
  {
    id: 1,
    image: website1,
    title: "وبسایت فروشگاهی",
    text: "وبسایت فروشگاهی ریسپانسیو با ری اکت",
    skills: ["HTML", "CSS", "Reactjs"],
    demo: "https://mohazizzi.github.io/orcid-ecommerice-website/",
    githubLink: "https://github.com/mohazizzi/orcid-ecommerice-website",
  },
  {
    id: 2,
    image: website2,
    title: "وبسایت فروشگاهی",
    text: "وبسایت فروشگاهی با بوت استرپ ۴.۵",
    skills: ["HTML", "CSS", "Bootstrap"],
    demo: "https://mohazizzi.github.io/shop-grid-website/",
    githubLink: "https://github.com/mohazizzi/shop-grid-website",
  },
  {
    id: 3,
    image: website3,
    title: "برنامه هفتگی",
    text: "سایتی برای ساختن برنامه ی هفتگی دانشجویی",
    skills: ["HTML", "CSS", "Reactjs"],
    demo: "https://mohazizzi.github.io/weekly-shedule/",
    githubLink: "https://github.com/mohazizzi/weekly-shedule",
    smallImage: true,
  },
];

const MyWorks = () => {
  return (
    <>
      <Navbar />
      <section className="works">
        <div className="container">
          <h1 className="works_title">نمونه کارها</h1>
          <div className="works_list">
            {worksData.map((work) => (
              <div className="works_list_item" key={work.id}>
                <div
                  className={`works_list_item_image ${
                    work.smallImage && "small-image"
                  }`}
                >
                  <img src={work.image} alt={work.title} />
                </div>
                <div className="works_list_item_info">
                  <h4 className="works_list_item_info_title">{work.title}</h4>
                  <p className="works_list_item_info_text">{work.text}</p>
                  <div className="works_list_item_info_skill-list">
                    {work.skills.map((skill) => (
                      <p
                        className="works_list_item_info_skill-list_item"
                        key={skill}
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="works_list_item_links-group">
                  <a
                    href={work.demo || "#"}
                    rel="noreferrer"
                    target="_blank"
                    className="works_list_item_links-group_cta"
                  >
                    لینک وبسایت
                  </a>
                  <a
                    href={work.githubLink || "#"}
                    rel="noreferrer"
                    target="_blank"
                    className="works_list_item_links-group_cta"
                  >
                    سورس کد
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWorks;
