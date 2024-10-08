import React from "react";
import Image from "next/image";
import AboutImg from "@/public/image/image1.png";
import commitment from "@/public/image/commitment.png";
import why from "@/public/image/why-choose.png";
import { OurStory } from "@/components/pages/About/Our-story";

export default function AboutUs() {
  const cardData = [
    {
      id: 1,
      label: "Compassion",
      content:
        "We approach every client with empathy, understanding, and kindness. Our goal is to create a supportive environment that fosters dignity and comfort in every interaction.",
      position: "left",

    },
    {
      id: 2,
      label: "Community Engagement",
      content:
        "We are committed to positively impacting the Maryland community through: ",
      position: "left",
      children:[
        {
          id:1,
          label:"Safety: Prioritizing the safety and well-being of our clients and the community by adhering to strict safety protocols and creating a secure environment."
        },
        { 
          id:2,
          label:"Outreach: Engaging in community health initiatives and collaborative efforts to enhance overall well-being."
        },
      ]
    },
    {
      id: 3,
      label: "Excellence",
      content: "We are dedicated to providing top-quality care through:",
      position: "center",
      children:[
        {
          id:1,
          label:"Integrity: Upholding the highest standards of honesty and ethical practices in all aspects of our care."
        },
        {
          id:2,
          label:"Respect: Honoring each individual's unique needs, preferences, and cultural background, ensuring that everyone is treated with dignity."
        },
        {
          id:3,
          label:"Accountability: Taking responsibility for our actions and decisions, ensuring that we meet the highest standards and fulfill our commitment to exceptional care."
        },
      ]
    },
    {
      id: 4,
      label: "Empowering Care",
      content: "We believe in enhancing well-being through:",
      position: "right",
      children:[
        {
          id:1,
          label:"Collaboration: Working closely with clients, families, and healthcare professionals to create effective, personalized care plans. We value open communication and teamwork to achieve the best outcome."
        },
        {
          id:2,
          label:"Empowerment: Encouraging clients to be actively involved in their care, supporting them in making informed decisions about their health, and promoting independence and quality of life."
        },

      ]
    },
    {
      id: 5,
      label: "Innovation",
      content:
        "We embrace new ideas and advancements in healthcare to continually improve our services. By staying current with industry trends and incorporating innovative practices, we strive to deliver the highest quality of care. ",
      position: "right",
    },
  ];

  return (
    <main className="justify-center flex-col flex gap-12 pt-28 md:pt-0">
      {/* section 1 */}
      <div className="md:h-screen">
        <div className="md:h-screen items-center">
          <div className="h-full flex justify-center items-center">
            <div className="flex md:flex-row flex-col md:gap-48  md:pt-12 gap-6 md:px-[80px] py-6 px-6">
              <section className="flex flex-col gap-2 md:w-1/2 w-full">
                <h2 className="font-medium md:text-[24px] text-[16px] text-secondary leading-[32px]">
                  About Mindspot
                </h2>
                <h3 className="md:text-[40px] text-[24px] text-[#151314] md:leading-[56px]">
                  We believe that home is the foundation of well-being, and we are
                  honored to be a trusted partner in our patients' healthcare
                  journeys
                </h3>
                <p className="md:text-[18px] text-[#443F3F]">
                  As your trusted partner in Maryland home healthcare, we are
                  committed to providing compassionate, personalized care that
                  empowers individuals to thrive in their own homes.
                </p>
                <p className="md:text-[18px] text-[#443F3F]">
                  We are a licensed and insured home care provider recognized by
                  the State of Maryland. We take great pride in being part of the
                  Maryland community and are dedicated to serving its residents
                  with exceptional care programs.
                </p>
              </section>
              <section className="flex flex-col gap-6 md:w-1/2 w-full">
                <Image
                  src={AboutImg}
                  alt="about-image"
                  className="md:max-h-[300px] max-w-full rounded-lg w-auto h-auto justify-center"
                />
                <p className="md:text-[18px] text-[#443F3F]">
                  Our services, approved by the Maryland Department of Mental
                  Hygiene, include assisted living, companionship, recreational
                  activities, personal assistance with daily tasks, medication
                  reminders, cooking, cleaning, laundry, transportation to
                  appointments, grocery shopping, church visits, bathing
                  assistance, and support with dressing and grooming.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
  
      {/* section 2 */}
      <div className="bg-light" id="Our-Mission">
        <div className="flex md:flex-row flex-col items-center md:px-[80px] md:py-[80px] p-6 w-full">
          <h2 className="md:w-1/2 w-full md:text-[80px] text-[24px] text-[#2C2929] md:leading-[96px] font-semibold">
            Our Mission
          </h2>
          <div className="md:w-1/2 w-full">
            <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
              We are dedicated to enhancing the quality of life for our clients by
              delivering personalized, comprehensive home care services.
            </p>
          </div>
        </div>
      </div>
  
      {/* section 3 */}
      <div
        className="bg-gradient-to-r from-white via-[#E5FBFF] to-white"
        id="Our-Values"
      >
        <div className="flex flex-col text-dark md:px-[80px] px-6 md:py-[64px] py-6">
          <section className="flex w-full flex-col justify-center items-center">
            
            <h2 className="md:text-[28px] text-[24px] leading-[64px] text-[#151314]">
              Our Company's Core Values
            </h2>
            <p className="md:text-[18px] text-[14px] leading-[28px]">
              Discover the driving force behind our company. Learn about our
              purpose and the core values that define our culture and guide our
              actions.
            </p>
          </section>
          <section className="w-full">
            <div className="flex flex-col sm:flex-row w-full py-12">
              {/* Left Column */}
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:mr-4 w-1/3 justify-between">
                {cardData
                  .filter((card) => card.position === "left")
                  .map((card) => (
                    <div
                      key={card.id}
                      className="bg-white p-4 rounded-lg flex flex-col gap-6"
                    >
                      <h2 className="font-medium md:text-[32px] text-[16px] text-primary md:leading-[44px] font-custom">
                        {card.label}
                      </h2>
                      <p className="md:text-[16px] md:leading-[24px] text-[#2C2929]">
                        {card.content}
                      </p>
                      <div>
                        {card.children?.map((ch) => (
                          <li
                            key={ch.id}
                            className="md:text-[16px] md:leading-[24px] text-[12px] list-disc"
                          >
                            {ch.label}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
  
              {/* Center Card */}
              <div className="flex justify-center items-center sm:mx-4 w-1/3">
                {cardData
                  .filter((card) => card.position === "center")
                  .map((card) => (
                    <div
                      key={card.id}
                      className="bg-white flex flex-col gap-6 p-4 rounded-lg"
                    >
                      <h2 className="font-medium md:text-[32px] text-[16px] text-primary md:leading-[44px] font-custom">
                        {card.label}
                      </h2>
                      <p className="md:text-[16px] md:leading-[24px] text-[#2C2929]">
                        {card.content}
                      </p>
                      <div>
                        {card.children?.map((ch) => (
                          <li
                            key={ch.id}
                            className="md:text-[16px] md:leading-[24px] text-[12px] list-disc"
                          >
                            {ch.label}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
  
              {/* Right Column */}
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:ml-4 w-1/3 gap-8">
                {cardData
                  .filter((card) => card.position === "right")
                  .map((card) => (
                    <div
                      key={card.id}
                      className="bg-white p-4 flex flex-col gap-6 rounded-lg"
                    >
                      <h2 className="font-medium md:text-[32px] text-[16px] text-primary md:leading-[44px] font-custom">
                        {card.label}
                      </h2>
                      <p className="md:text-[16px] md:leading-[24px] text-[#2C2929]">
                        {card.content}
                      </p>
                      <div>
                        {card.children?.map((ch) => (
                          <li
                            key={ch.id}
                            className="md:text-[16px] md:leading-[24px] text-[12px] list-disc"
                          >
                            {ch.label}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
  
      {/* section 4 */}
      <div className="bg-lightOrange" id="Our-Commitment">
        <div className="md:px-[80px] px-6 md:py-[64px] py-6 flex md:flex-row flex-col items-center md:gap-12 gap-6">
          <div className="flex flex-col gap-6 md:w-1/2 w-full">
            <h2 className="font-medium md:leading-[64px] md:text-[48px] text-[36px]">
              Our Commitment
            </h2>
            <p className="md:text-[18px] text-[12px] leading-[28px]">
              At Mindspot, we offer compassionate, personalized home care with a
              focus on your unique needs. Your well-being is our top priority as
              we provide a range of services designed to support your independence
              and uphold your dignity.
            </p>
            <p className="md:text-[18px] text-[12px] leading-[28px]">
              Our commitment to diversity and inclusion means we ensure equal
              access to high-quality care for everyone, regardless of race,
              ethnicity, religion, sexual orientation, gender identity, age, or
              disability. We honor and respect the distinct needs and perspectives
              of each person we serve.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <Image src={commitment} alt="" />
          </div>
        </div>
      </div>
  
      {/* section 5 */}
      <div
        className="bg-gradient-to-r from-white via-lightOrange to-white"
        id="Our-Story"
      >
        <OurStory />
      </div>
  
      {/* section 6 */}
      <div className="bg-white" id="Why-Choose-Us">
        <div className="md:px-[80px] px-6 md:py-[64px] py-6 flex flex-col gap-6">
          <h2 className="md:text-[28px] text-[24px] md:leading-[64px] text-center text-[#151314]">
            Why Choose Us
          </h2>
          <Image src={why} alt="why-image" className="w-full max-h-[684px]" />
          <div className="flex md:flex-row flex-col md:gap-12 gap-6">
            <section className="flex gap-4 flex-col">
              <p className="md:text-[18px] text-[14px] leading-[28px]">
                The dedicated team at Mindspot Health Care Services is committed
                to ensuring your complete satisfaction. Our caregivers not only
                provide the comfort you need but also enrich your life and the
                lives of your loved ones. We strive to help you live safely,
                independently, and happily in the comfort of your own home.
              </p>
              <p className="md:text-[18px] text-[14px] leading-[28px]">
                What sets us apart from other home care agencies is the
                exceptional training and genuine care that our caregivers bring to
                their work. We carefully select only the best caregivers through a
                rigorous selection process.
              </p>
            </section>
            <section className="flex gap-4 flex-col">
              <p className="md:text-[18px] text-[14px] leading-[28px]">
                Once chosen, our caregivers undergo additional training and
                development to embody the unique qualities that define Mindspot
                Health Care Services. Our caregivers are bonded, insured, and
                highly skilled in personal care.
              </p>
              <p className="md:text-[18px] text-[14px] leading-[28px]">
                We are here to be your partner in caring for a sick or elderly
                loved one. Our caregivers will be there when you need them,
                visiting you in your home, providing the relief you need, and
                treating you like family. Because to us, you're already family.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}  