# Heiddy Awais Website — CLAUDE.md

## REGLAS DE DEPLOY OBLIGATORIAS (DAB v2.0)

### Regla #1 — NUNCA push directo a main
NUNCA ejecutar: git push origin main
SIEMPRE usar: branch → PR → merge → auto-deploy

### Regla #2 — NUNCA deploy manual de Vercel
NUNCA ejecutar: vercel --prod
NUNCA ejecutar: vercel deploy --prod
GitHub Actions auto-deploya al merge del PR.

### Regla #3 — Workflow obligatorio para cada cambio
git checkout -b feat/descripcion-corta origin/main
git add <archivos>
git commit -m "feat: descripción del cambio"
git push origin feat/descripcion-corta
gh pr create --title "feat: descripción" --body "Descripción del cambio"
# → revisar → merge → Vercel auto-deploya

### Regla #4 — Verificar env vars SIEMPRE
Después de agregar variables de entorno en Vercel:
vercel env pull /tmp/check.env && cat /tmp/check.env
Verificar que NINGUNA KEY tenga valor vacío (KEY="")

### Regla #5 — Verificar alias si dominio queda pinned
Si después de un merge el dominio sigue mostrando código viejo:
curl -s https://heiddyawais.com/api/health | head -5  # verificar versión
vercel alias set <new-deployment-url> heiddyawais.com

## INFORMACIÓN DEL PROYECTO
- Owner: Heiddy Awais
- Dominio: heiddyawais.com
- GitHub: heiddya24
- Stack: Next.js 15, Tailwind CSS 4, Framer Motion (sin usar todavía)
- Deploy: Vercel (auto desde GitHub)
- DB: Supabase (para PR Auto-Pilot — Fase 5)
- Email: Resend API (para formulario de contacto — Fase 2)

## VARIABLES DE ENTORNO NECESARIAS
- RESEND_API_KEY — para formulario de contacto
- ANTHROPIC_API_KEY — para PR Auto-Pilot (Fase 5)
- SUPABASE_URL — para PR Auto-Pilot (Fase 5)
- SUPABASE_SERVICE_ROLE_KEY — para PR Auto-Pilot (Fase 5)
- PR_AUTH_SECRET — JWT secret (64+ chars)
- PR_AUTOPILOT_WEBHOOK_SECRET — webhook secret (64+ chars)

## CHECKLIST DE ONBOARDING (marcar al completar)
- [ ] Repo subido a GitHub (heiddya24/heiddy-awais)
- [ ] Proyecto conectado a Vercel (auto-deploy desde main)
- [ ] Dominio heiddyawais.com apuntando a Vercel
- [ ] RESEND_API_KEY configurado y verificado
- [ ] Google Search Console verificado
- [ ] Google Analytics GA4 instalado
- [ ] Sitemap enviado a Google Search Console
- [ ] Fase 5: PR Auto-Pilot configurado
