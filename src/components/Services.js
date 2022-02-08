import React, { useState, useEffect } from "react";
import autopeyk from "../assets/image/autopeyk.webp";
import classic from "../assets/image/classic.webp";
import hamkhat from "../assets/image/hamkhat.webp";
import hamyar from "../assets/image/hamyar.webp";
import line from "../assets/image/line.webp";
import motopeyk from "../assets/image/motopeyk.webp";
import plus from "../assets/image/plus.webp";
import taxi from "../assets/image/taxi.webp";
import tel from "../assets/image/tel.webp";

function Services() {
  /* 
https://tapsi.ir/images/home/illus-classic.webp----
https://tapsi.ir/images/home/illus-motopeyk.webp----
https://tapsi.ir/images/home/illus-autopeyk.webp----
https://tapsi.ir/images/home/illus-plus.webp-----
https://tapsi.ir/images/home/illus-tel.webp-----
https://tapsi.ir/images/home/illus-hamyar.webp-----
https://tapsi.ir/images/home/illus-hamkhat.webp-----
https://tapsi.ir/images/home/illus-hamkhat.webp----
https://tapsi.ir/images/home/illus-hamkhat.webp----
https://tapsi.ir/images/home/illus-taxi.webp-----
https://tapsi.ir/images/home/illus-line.webp-----
  */
  const services = [
    {
      id: 0,
      title: "تپسی کلاسیک",
      content:
        "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید",
      image: classic,
    },
    {
      id: 1,
      title: "موتوپیک",
      content:
        "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید",
      image: motopeyk,
    },
    {
      id: 2,
      title: "اتوپیک",
      content:
        "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است",
      image: autopeyk,
    },
    {
      id: 3,
      title: "تپسی پلاس",
      content:
        "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد",
      image: plus,
    },
    {
      id: 4,
      title: "تپسی تلفنی",
      content:
        "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست",
      image: tel,
    },
    {
      id: 5,
      title: "همیار",
      content:
        "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند",
      image: hamyar,
    },
    {
      id: 6,
      title: "هم خط",
      content:
        "سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است",
      image: hamkhat,
    },
    {
      id: 7,
      title: "تاکسی",
      content:
        "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود",
      image: taxi,
    },
    {
      id: 8,
      title: "تپسی لاین",
      content:
        "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید",
      image: line,
    },
  ];
  const [counter, setCounter] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  const handleFade = () => {
    if (counter < 8) {
      setCounter(counter + 1);
    } else if (counter == 8) {
      setCounter(0);
    }
  };

  useEffect(() => {
    const updateCount = setInterval(handleFade, 5000);
    return () => {
      clearInterval(updateCount);
    };
  }, [counter]);

  function handleClick(event) {
    const currClass = Number(event.target.parentElement.classList[1]);
    setCounter(currClass);
    const currId = event.target.parentElement.id;
    setActiveTab(currId);
  }

  return (
    <div>
      <section id="services">
        <div className="container">
          <h2>سرویس های تپسی</h2>
          <nav>
            <div className="services__nav">
              <span
                id="classic"
                onClick={handleClick}
                className={`${counter == 0 ? "active" : null} 0`}
              >
                <img
                  className="0"
                  src="https://tapsi.ir/images/home/cc-classic.png"
                  alt="tapsi-classic-icon"
                />
                <p>تپسی کلاسیک</p>
              </span>
              <span
                id="motopeyk"
                onClick={handleClick}
                className={`${counter == 1 ? "active" : null} 1`}
              >
                <img
                  src="https://tapsi.ir/images/home/cc-motopeyk.png"
                  alt="motopeyk-icon"
                />
                <p>موتو پیک</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 2 ? "active" : null} 2`}
                id="autopeyk"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-autopeyk.png"
                  alt="autopeyk-icon"
                />
                <p>اتوپیک</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 3 ? "active" : null} 3`}
                id="plus"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-plus.png"
                  alt="tapsi-plus-icon"
                />
                <p>تپسی پلاس</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 4 ? "active" : null} 4`}
                id="tel"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-tel.png"
                  alt="tapsi-tel-icon"
                />
                <p>تپسی تلفنی</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 5 ? "active" : null} 5`}
                id="hamyar"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-hamyar.png"
                  alt="hamyar-icon"
                />
                <p>همیار</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 6 ? "active" : null} 6`}
                id="hamkhat"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-hamkhat.png"
                  alt="hamkhat-icon"
                />
                <p>هم خط</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 7 ? "active" : null} 7`}
                id="taxi"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-taxi.png"
                  alt="tapsi-taxi-icon"
                />
                <p>تاکسی</p>
              </span>
              <span
                onClick={handleClick}
                className={`${counter == 8 ? "active" : null} 8`}
                id="line"
              >
                <img
                  src="https://tapsi.ir/images/home/cc-line.png"
                  alt="tapsi-line-icon"
                />
                <p>تپسی لاین</p>
              </span>
            </div>
          </nav>
          <div className="tab__content">
            <div className="tab__text__intro">
              <h3>{services[counter].title}</h3>
              <p>{services[counter].content}</p>
            </div>
            <div className="tab__img__intro">
              <img src={services[counter].image} alt="services" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
