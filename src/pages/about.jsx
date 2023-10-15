import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About | Patrick Kellar</title>
        <meta
          name="description"
          content="I’m Patrick Kellar. I am a fullstack developer working remotely from Ontario, Canada"
        />
        <meta
          name="keywords"
          content="fullstack developer, blog, remote work, canada, technology, php, software development, software engineering"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h3 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I&apos;m Patrick Kellar 👋
            </h3>
            <h1 className="mt-6 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              About Me
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a Senior Software Engineer with over 13 years of experience, currently working remotely from Ontario, Canada.
                I work on a small team of brilliant developers for a company called QuoteVelocity. We provide real-time web and live transfer prospects.
                We generate qualified leads and calls of consumers seeking assistance in most financial, automotive, and healthcare verticals.
                The companies experience spans over a decade in delivering the right customers to the right clients.
              </p>
              <p>
                When I am not working you’ll find me hanging out with my Wife
                and two dogs, Bear and Teddy. If the weather is warm you will
                catch me out for a tour in the twistys on my motorcycle — I
                recently picked up a 2018 Triumph Street Triple RS 765! Even more recently, my Wife acquired her M2 license and we have been enjoying rides together.
              </p>
              <p>
                I enjoy tinkering on wood working projects in the garage,
                ranging from little things like cutting boards, wood signs, etc.
                — all the way up to full-on furniture, like tables, desks (like
                the one my keyboard is on right now).
              </p>

              <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                My Current Stack
              </h3>
              <p>
                For work, I use PHP and Laravel, Vue.js, and Nova 4.
                For personal projects, you’ll find me using the TALL stack:
                Tailwind CSS, Alpine JS, Laravel, and Livewire. It’s fast,
                scalable, and allows for rapid development and prototyping of
                ideas; and with Laravel recently announcing first-party support for Livewire, it&apos;s not going away anytime soon!
                If I need to script something, it’s either Powershell or
                Bash, depending on which OS I am using. I&apos;m also familiar with Python, I&apos;ve recently been using it to help fine-tune <Link
                    href="https://openai.com"
                    className="transition hover:text-teal-500 dark:hover:text-teal-400 border-b border-dotted"
                > OpenAI
                </Link> models.
              </p>
              <p>
                I’ve deployed apps to on-prem servers, Azure app services, AWS EC2 and Lambda functions (Laravel Vapor),
                Docker, and for rapid development I use services like surge.sh and Vercel
                to get something up fast and easy.
              </p>
              <p>
                For the most part I try to at least stay in touch with the
                current trends, so I will often dabble in new tech or frameworks
                just to get a sense for what’s out there (like this site I made
                with Next.js). Well written docs make it so easy to jump into
                something new and get up-to-speed quickly (I’m looking at you
                Laravel…).
              </p>
              <p>
                I’ve started looking into open source projects I can contribute
                to in my spare time, as well I have a couple ideas floating
                around that I think would make for potential packages that I&apos;d
                like to develop. I’ve also committed myself to start{' '}
                <Link
                  href="/articles"
                  className="transition hover:text-teal-500 dark:hover:text-teal-400 border-b border-dotted"
                >
                  {' '}
                  blogging!
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={`${process.env.NEXT_PUBLIC_TWITTER_URL}`} icon={XIcon}>
                Follow on X (Twitter)
              </SocialLink>
              <SocialLink href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:pkellar@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                pjkellar@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
