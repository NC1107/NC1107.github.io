import Image from "next/image";

const contacts = [
  {
    href: "mailto:NickPConn@gmail.com",
    icon: "/images/icons/envelope-regular.svg",
    alt: "Email",
  },
  {
    href: "https://linkedin.com/in/nicholas-conn",
    icon: "/images/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/NC1107",
    icon: "/images/icons/github-alt.svg",
    alt: "GitHub",
  },
];

export function ContactLinks() {
  return (
    <ul className="flex justify-center gap-5">
      {contacts.map((contact) => (
        <li key={contact.alt}>
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl transition-all duration-200 hover:scale-110 hover:bg-olive/20"
          >
            <Image
              src={contact.icon}
              alt={contact.alt}
              width={70}
              height={70}
              className="w-[70px] h-[70px] transition-all duration-200"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
