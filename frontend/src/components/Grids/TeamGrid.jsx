import { useState } from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import Ayodele from "../../assets/Images/ayodele.jpg";
import Temie from "../../assets/Images/temie.jpg";
import Ay from "../../assets/Images/ay.png";
import Ajisere from "../../assets/Images/Ajiserere.jpeg";
import Aniekan from "../../assets/Images/Aniekan_Joseph_S.jpg";
import Ann from "../../assets/Images/Ann Ngima.jpeg";
import Afolabi from "../../assets/Images/Afolabi Oladayo.jpg";
import FirstOrnament from "../../assets/Icons/Ornament 11.svg";
import SecondOrnament from "../../assets/Icons/Ornament 31.svg";

export default function TeamGrid() {
  const [teamMembers] = useState([
    {
      name: "Temie Giwa-Tubosun",
      title: "Group CEO",
      linkedinUrl: "https://www.linkedin.com/in/temie-giwa-tubosun-61b18514/?originalSubdomain=ng",
      imageUrl: Temie,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Ayo Olufemi Michael",
      title: "Co-Founder and Chief Technology Officer",
      linkedinUrl: "https://www.linkedin.com/in/michael-ayo-olufemi/?originalSubdomain=ng",
      imageUrl: Ay,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Ayodele Adedayo",
      title: "VP Operations",
      linkedinUrl: "https://www.linkedin.com/in/ayodele-adedayo-7773b0b7/?originalSubdomain=ng",
      imageUrl: Ayodele,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Oladayo Afolabi",
      title: "VP Finance",
      linkedinUrl: "https://www.linkedin.com/in/afoladayo/",
      imageUrl: Afolabi,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Aniekan A. Joseph",
      title: "VP Growth, Partnership & Innovations",
      linkedinUrl: "https://www.linkedin.com/in/aniekan-a-joseph-78b4b524/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: Aniekan,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Ann Ngima",
      title: "Acting CEO of LifeBank, Kenya",
      linkedinUrl: "https://www.linkedin.com/in/ann-ngima-3b0334176/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: Ann,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
    {
      name: "Ajiserere Maria",
      title: "Director of Customer Health",
      linkedinUrl: "https://www.linkedin.com/in/maria-ajiserere/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageUrl: Ajisere,
      topOrnament: FirstOrnament,
      bottomOrnament: SecondOrnament,
    },
  ]);

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="w-12 h-1 bg-red-600 mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tight">LEADERSHIP TEAM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[10vw] gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <img
                  src={member.topOrnament}
                  className="absolute -top-10 left-0 md:-left-10 w-16 md:w-24 z-0"
                  alt="Top Left Ornament"
                />
                <img
                  src={member.bottomOrnament}
                  className="absolute -bottom-5 right-0 md:-right-10 w-16 md:w-24 z-0"
                  alt="Bottom Right Ornament"
                />
                <motion.div
                  className="w-[80vw] h-[70vw] rounded-md overflow-hidden relative z-10 md:w-[20vw] md:h-[20vw]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-lg mb-4">{member.title}</p>

              <motion.a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
                whileTap={{ scale: 0.9 }}
              >
                <SiLinkedin size={20} color="black" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
