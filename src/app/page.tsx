import { Button } from "@/components/ui/button";
import { aboutPageSeo } from "@/lib/pageSeoData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const generateMetadata = (): Metadata => {
  return aboutPageSeo;
};

const page = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="relative mx-4 sm:mx-12">
          <Image
            alt="Background Graphic"
            src="/background.png"
            width={406}
            height={368}
            className="absolute right-1/2 top-0 -z-50 h-auto w-[400px] -translate-y-28 translate-x-1/2 opacity-10 sm:w-[500px]"
            priority
          />
          <h1 className="text-center text-3xl font-medium sm:text-5xl">
            I&apos;m Subhajit Sarkar, a Full Stack Web Developer
          </h1>
          <div className="mt-4 flex justify-center">
            <p className="text-justify text-base sm:w-3/4 sm:text-center">
              My web development journey began in 2021 at the Central Institute
              of Technology&#44; where I honed my skills and completed my
              training in 2024. On the other side&#44; I earned my Bachelor of
              Arts degree from West Bengal State University&#44; demonstrating
              my ability to balance both academic and technical growth. I have
              good problem solving😊.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <Link href="https://github.com/subhajitsarkar-dev" target="_blank">
              <Button color="default" size="icon">
                <FaGithub size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link href="https://x.com/sarkar50664" target="_blank">
              <Button color="default" size="icon">
                <BsTwitter size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link href="mailto:subhajitsarkar.dev@gmail.com" target="_blank">
              <Button color="default" size="icon">
                <SiGmail size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/subhajitsarkar-dev"
              target="_blank"
            >
              <Button color="default" size="icon">
                <FaLinkedinIn
                  size={28}
                  className="text-white dark:text-black"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
