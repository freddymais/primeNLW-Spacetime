import Image from 'next/image'

import logoPrime from '../assets/logo-Prime.svg'

export function Copyright() {
  return (
    <div className="flex w-full items-center gap-1 text-sm leading-relaxed text-gray-200">
      <Image src={logoPrime} alt="LogoPrime" className="h-12 w-12" />
      Feito com 💛 na NLW por
      <a
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://www.instagram.com/primefoxti"
      >
        Primefox Soluções em T.I.
      </a>
    </div>
  )
}
