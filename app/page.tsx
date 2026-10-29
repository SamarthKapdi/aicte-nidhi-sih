'use client'

import { useState } from 'react'
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Bell,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Download,
  FileCheck2,
  FileText,
  LayoutDashboard,
  Landmark,
  LockKeyhole,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
  X,
  Zap,
} from 'lucide-react'

const levels = [
  { label: 'L1 Submitted', detail: 'Application received', state: 'done' },
  { label: 'L2 Document-validated', detail: 'Documents verified', state: 'done' },
  { label: 'L3 Bank-confirmed', detail: 'Bank response received', state: 'active' },
  { label: 'L4 Lien-confirmed', detail: 'AICTE lien pending', state: 'pending' },
  { label: 'L5 Active', detail: 'Deposit lifecycle active', state: 'pending' },
]

const rows = [
  { institution: 'Inst. A', id: '...4821', amount: '₹15 Lakhs', level: 'L3 Bank-confirmed', status: '42 Days Left', tone: 'blue', action: 'View' },
  { institution: 'Inst. B', id: '...7710', amount: '₹50 Lakhs', level: 'L2 Doc-validated', status: '9 Days Left', tone: 'amber', action: 'Verify' },
  { institution: 'Inst. C', id: '...3305', amount: '₹10 Lakhs', level: 'L1 Submitted', status: 'Overdue 3 Days', tone: 'red', action: 'Escalate' },
]

function IconBox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${className}`}>{children}</div>
}

export default function Page() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const verifyBank = () => {
    setIsVerifying(true)
    window.setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
      setToastVisible(true)
      window.setTimeout(() => setToastVisible(false), 4000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#0f172a]">
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-[264px] flex-col bg-[#0f1b33] text-white transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-[88px] items-center gap-3 border-b border-white/10 px-7">
          <div className="flex size-11 items-center justify-center rounded-xl bg-[#0d9488] shadow-lg shadow-teal-950/40"><Landmark className="size-6" /></div>
          <div><p className="text-[17px] font-bold tracking-tight">AICTE-NIDHI</p><p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">Trust & Verification Portal</p></div>
        </div>
        <div className="px-4 pt-8"><p className="px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Workspace</p><nav className="mt-3 flex flex-col gap-1">
          {[['Dashboard', LayoutDashboard], ['FDR Repository', WalletCards], ['Approvals', FileCheck2], ['Bank Verification', Landmark], ['Audit Trail', Activity], ['Settings', Settings]].map(([label, Icon], index) => <button key={label as string} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-medium transition ${index === 0 ? 'bg-[#19365a] text-white shadow-inner' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}><Icon className={`size-[17px] ${index === 0 ? 'text-[#5eead4]' : 'text-slate-500 group-hover:text-slate-300'}`} /><span>{label as string}</span>{label === 'Approvals' && <span className="ml-auto rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-300">04</span>}</button>)}
        </nav></div>
        <div className="mt-auto border-t border-white/10 p-5"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#d9e8f4] text-sm font-bold text-[#0f1b33]">SO</div><div className="min-w-0"><p className="truncate text-[12px] font-semibold">Section Officer</p><p className="truncate text-[10px] text-slate-400">Regulation Bureau</p></div><ChevronDown className="ml-auto size-4 text-slate-500" /></div></div>
      </aside>

      {sidebarOpen && <button aria-label="Close navigation" className="fixed inset-0 z-20 bg-slate-950/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <div className="lg:pl-[264px]">
        <header className="sticky top-0 z-10 flex h-[88px] items-center justify-between border-b border-slate-200/80 bg-white/95 px-5 backdrop-blur md:px-9">
          <div className="flex items-center gap-4"><button aria-label="Open navigation" className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="size-5" /></button><div className="relative hidden w-[340px] md:block"><Search className="absolute left-3 top-1/2 size-[17px] -translate-y-1/2 text-slate-400" /><input className="h-10 w-full rounded-lg border border-slate-200 bg-[#f8fafc] pl-10 pr-4 text-xs outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10" placeholder="Search by FDR No, Institution ID, or Bank Name..." /></div><button className="rounded-lg border border-slate-200 p-2 text-slate-500 md:hidden"><Search className="size-5" /></button></div>
          <div className="flex items-center gap-3 md:gap-5"><div className="hidden items-center gap-2 text-xs text-slate-500 md:flex"><CalendarDays className="size-4" /><span>29 October 2026</span></div><div className="hidden h-6 w-px bg-slate-200 md:block" /><button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"><Download className="size-4" /> <span className="hidden sm:inline">Export</span></button><button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications"><Bell className="size-[19px]" /><span className="absolute right-1 top-1 flex size-3.5 items-center justify-center rounded-full bg-[#dc2626] text-[8px] font-bold text-white ring-2 ring-white">2</span></button></div>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 py-7 md:px-9 md:py-9"><div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700"><ShieldCheck className="size-4" /> Secure workspace</div><h1 className="text-2xl font-bold tracking-tight text-[#0f172a] md:text-[29px]">Good morning, Section Officer</h1><p className="mt-1.5 text-sm text-slate-500">Here&apos;s your FDR lifecycle overview for today.</p></div><div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm md:self-auto"><span className="size-2 rounded-full bg-emerald-500" /> Systems operational <span className="text-slate-300">•</span> Last synced 08:42 IST</div></div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
            ['Total Active FDRs', '₹450.5 Cr', 'Across 1,284 institutions', 'emerald', Landmark], ['Pending Verification', '24', 'Requires maker action', 'amber', Clock3], ['Expiring in < 30 Days', '12', 'T-30 alert window', 'red', AlertCircle], ['Released / Refunded', '89', 'This financial year', 'slate', WalletCards],
          ].map(([title, value, detail, tone, Icon]) => <div key={title as string} className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_3px_12px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between"><p className="text-xs font-semibold text-slate-500">{title as string}</p><IconBox className={tone === 'emerald' ? 'bg-emerald-50 text-emerald-600' : tone === 'amber' ? 'bg-amber-50 text-amber-600' : tone === 'red' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}><Icon className="size-[18px]" /></IconBox></div><p className="mt-4 text-[27px] font-bold tracking-tight text-[#0f172a]">{value as string}</p><p className="mt-1 text-[11px] text-slate-400">{detail as string}</p></div>)}</section>

          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.04)]"><div className="flex flex-col justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-[#f8fbfd] to-white px-5 py-5 md:flex-row md:items-center md:px-7"><div className="flex items-center gap-3"><IconBox className="bg-[#e4f4f3] text-[#0d9488]"><LockKeyhole className="size-[18px]" /></IconBox><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-bold text-[#0f172a]">FDR Verification Tracker: Inst. A <span className="font-medium text-slate-400">/ FDR #4821</span></h2><span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">HIGH VALUE</span></div><p className="mt-1 text-[11px] text-slate-500">Five-level trust protocol · Last updated 08:38 IST</p></div></div><div className="flex items-center gap-2 text-[11px] font-medium text-slate-500"><span className="size-2 rounded-full bg-blue-500" /> Verification in progress</div></div><div className="px-5 py-7 md:px-10 md:py-8"><div className="relative flex flex-col gap-6 md:flex-row md:gap-0">{levels.map((level, index) => <div key={level.label} className="relative flex flex-1 items-center gap-3 md:block md:text-center"><div className={`relative z-[1] mx-0 flex size-9 shrink-0 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-sm md:mx-auto ${level.state === 'done' ? 'bg-emerald-500 text-white' : level.state === 'active' && !isVerified ? 'bg-blue-600 text-white ring-4 ring-blue-100' : level.state === 'active' || (isVerified && index === 3) ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 'bg-slate-100 text-slate-400'}`}>{level.state === 'done' || (isVerified && index === 2) ? <Check className="size-4" /> : index + 1}</div>{index < levels.length - 1 && <div className={`absolute left-[17px] top-9 h-full w-1 md:left-1/2 md:top-[18px] md:h-1 md:w-full ${index < (isVerified ? 3 : 2) ? 'bg-emerald-400' : 'bg-slate-200'}`} /> }<div className="pt-0 md:pt-3"><p className={`text-xs font-bold ${level.state === 'pending' && !(isVerified && index === 3) ? 'text-slate-400' : 'text-slate-700'}`}>{isVerified && index === 2 ? 'L3 Bank-confirmed' : isVerified && index === 3 ? 'L4 Lien-confirmed' : level.label}</p><p className="mt-1 text-[10px] text-slate-400">{isVerified && index === 3 ? 'AICTE lien verified' : level.detail}</p></div></div>)}</div><div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3.5 sm:flex-row sm:items-center"><div className="flex items-center gap-2.5"><Sparkles className="size-4 text-blue-600" /><p className="text-xs text-blue-900">{isVerified ? 'Lien confirmation completed. FDR is ready for activation.' : 'Next recommended action: validate lien directly with the issuing bank.'}</p></div><button onClick={verifyBank} disabled={isVerifying || isVerified} className="flex shrink-0 items-center gap-2 rounded-lg bg-[#0f3b65] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#0c2f52] disabled:cursor-not-allowed disabled:opacity-70">{isVerifying ? <><span className="size-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Verifying with bank...</> : isVerified ? <><Check className="size-4" /> Lien Verified</> : <>Initiate Bank API Verification <ArrowUpRight className="size-4" /></>}</button></div></div></section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(330px,1fr)]"><section className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.04)]"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 md:px-6"><div><h2 className="text-sm font-bold">Active FDR Tracking</h2><p className="mt-1 text-[11px] text-slate-400">Live lifecycle status across priority deposits</p></div><button className="flex items-center gap-1 text-[11px] font-bold text-teal-700 hover:text-teal-800">View repository <ArrowUpRight className="size-3.5" /></button></div><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead><tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-bold uppercase tracking-wider text-slate-400"><th className="px-5 py-3 md:px-6">Institution</th><th className="px-3 py-3">FDR No.</th><th className="px-3 py-3">Amount</th><th className="px-3 py-3">Trust Level</th><th className="px-3 py-3">Maturity Status</th><th className="px-3 py-3">Action</th></tr></thead><tbody>{rows.map((row) => <tr key={row.id} className="group border-b border-slate-100 last:border-0 transition hover:bg-[#f8fbfc]"><td className="px-5 py-4 md:px-6"><div className="flex items-center gap-2.5"><div className="flex size-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500"><Building2 className="size-3.5" /></div><span className="text-xs font-semibold">{row.institution}</span></div></td><td className="px-3 py-4 font-mono text-[11px] text-slate-500">{row.id}</td><td className="px-3 py-4 text-xs font-semibold">{row.amount}</td><td className="px-3 py-4"><span className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${row.tone === 'blue' ? 'bg-blue-50 text-blue-700' : row.tone === 'amber' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{row.level}</span></td><td className={`px-3 py-4 text-[11px] font-semibold ${row.tone === 'red' ? 'text-red-600' : row.tone === 'amber' ? 'text-amber-600' : 'text-slate-500'}`}>{row.status}</td><td className="px-3 py-4"><button className={`rounded-md border px-3 py-1.5 text-[10px] font-bold transition ${row.action === 'Escalate' ? 'border-red-200 text-red-600 hover:bg-red-50' : 'border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700'}`}>{row.action}</button></td></tr>)}</tbody></table></div></section>

            <section className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_3px_12px_rgba(15,23,42,0.04)]"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-5"><div><h2 className="text-sm font-bold">Action Required</h2><p className="mt-1 text-[11px] text-slate-400">APH timelines & escalations</p></div><button aria-label="View all alerts" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"><CircleHelp className="size-4" /></button></div><div className="flex flex-col gap-3 p-4">{[
              ['T-15 Days', 'Escalate to Deputy Director', 'Inst B. renewal pending.', 'amber'], ['T-7 Days', 'Escalate to Director', 'Inst D. FDR maturity critical.', 'orange'], ['Overdue', 'Case Flagged for Action', 'Inst C. FDR expired without renewal.', 'red'],
            ].map(([tag, title, body, tone]) => <div key={tag} className={`rounded-xl border p-3.5 ${tone === 'red' ? 'border-red-100 bg-red-50/50' : 'border-amber-100 bg-amber-50/50'}`}><div className="flex gap-3"><div className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg ${tone === 'red' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>{tone === 'red' ? <AlertCircle className="size-3.5" /> : <Zap className="size-3.5" />}</div><div><span className={`text-[9px] font-bold uppercase tracking-wider ${tone === 'red' ? 'text-red-600' : 'text-amber-700'}`}>{tag}</span><p className="mt-1 text-[11px] font-bold text-slate-700">{title}</p><p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{body}</p></div></div></div>)}</div><div className="mx-4 mb-4 rounded-lg bg-slate-50 px-3 py-2 text-center text-[10px] text-slate-500">APH escalation policy v2.4 <span className="mx-1 text-slate-300">·</span> <button className="font-semibold text-teal-700">View policy</button></div></section></div>
          <footer className="mt-7 flex flex-col justify-between gap-2 border-t border-slate-200 pt-4 text-[10px] text-slate-400 sm:flex-row"><span>AICTE-NIDHI · Government of India</span><span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-teal-600" /> Secured with trust-verified workflows</span></footer>
        </main>
      </div>
      {toastVisible && <div role="status" className="fixed bottom-6 right-5 z-40 flex max-w-[340px] items-center gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-3.5 shadow-xl shadow-emerald-950/10"><div className="flex size-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><Check className="size-4" /></div><div><p className="text-xs font-bold text-slate-800">Bank Lien Verified Successfully.</p><p className="mt-0.5 text-[10px] text-slate-500">FDR #4821 advanced to L4.</p></div><button aria-label="Dismiss notification" className="ml-2 text-slate-400 hover:text-slate-600" onClick={() => setToastVisible(false)}><X className="size-4" /></button></div>}
    </div>
  )
}
