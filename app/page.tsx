"use client"

import Image from "next/image"
import { useEffect } from "react"
import { BadgeCheck, Send } from "lucide-react"
import { track } from '@vercel/analytics'

const TELEGRAM_URL = "https://t.me/jeniizinhavip69_bot"
const TRACKING_ENDPOINT = "https://hot-dash-one.vercel.app/api/track-click"

function trackTelegramVisit() {
  if (typeof window === 'undefined') {
    return
  }

  void fetch(TRACKING_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'pre_venda',
      url: window.location.href,
    }),
  })
}

export default function Page() {
  useEffect(() => {
    trackTelegramVisit()
    track('clique-botao-vip-telegram')
  }, [])

  return (
    <main className="min-h-dvh flex flex-col items-center justify-between bg-background text-foreground px-6 py-10">
      <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-primary/30 blur-xl"
          />
          <div className="relative h-32 w-32 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-lg">
            <Image
              src="/jeni-avatar.jpg"
              alt="Foto da Jeni"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="flex items-center gap-1.5 text-2xl font-semibold tracking-tight">
            Jeni
            <BadgeCheck
              className="h-5 w-5 text-primary"
              aria-label="Verificado"
            />
          </h1>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Conteúdo Exclusivo
          </p>
        </div>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-primary/50 blur-md opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="relative flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground px-6 py-4 text-base font-semibold shadow-lg shadow-primary/30 transition-transform active:scale-[0.98] hover:brightness-110">
            <Send className="h-5 w-5" aria-hidden />
            Entrar no meu VIP (Telegram)
          </span>
        </a>

        <p className="text-xs text-center text-muted-foreground max-w-xs leading-relaxed">
          Acesso imediato após a confirmação. Conteúdo restrito para maiores de
          18 anos.
        </p>
      </div>

      <footer className="pt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jeni
      </footer>
    </main>
  )
}
