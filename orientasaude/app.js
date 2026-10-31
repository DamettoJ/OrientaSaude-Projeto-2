(() => {
'use strict';

/* ================= ÍCONES ================= */
const P = {
  activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  chevR:'<polyline points="9 18 15 12 9 6"/>',
  chevL:'<polyline points="15 18 9 12 15 6"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  shieldOk:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  alert:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  heartPulse:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><path d="M3.5 12h4l2-3 3 6 2-3h6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  x:'<path d="M18 6L6 18M6 6l12 12"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  steth:'<path d="M5 3v6a4 4 0 0 0 8 0V3"/><path d="M4 3h2M12 3h2"/><path d="M9 13v2a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="11" r="2"/>',
  pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l10-10a5 5 0 0 1 7 7z"/><path d="M8.5 8.5l7 7"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  baby:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bone:'<path d="M17 10c.7-.7 1.7-.9 2.6-.5a2.5 2.5 0 1 0 1-4.4 2.5 2.5 0 0 0-4.4-1c-.4.9-.2 1.9.5 2.6L8 14.2c-.7-.7-1.7-.9-2.6-.5a2.5 2.5 0 1 0-1 4.4 2.5 2.5 0 0 0 4.4 1c.4-.9.2-1.9-.5-2.6z"/>'
};
const I = (n, s = 24, sw = 2) =>
  `<svg class="i" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const CROSS = `<svg class="i" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>`;

/* ================= DADOS ================= */
const SPECS = {
  'clinica-geral': { n:'Clínica geral', ic:'steth', c:'blue',
    d:'Porta de entrada para a maioria das queixas do dia a dia. Faz a avaliação inicial e, se necessário, encaminha para outras especialidades.',
    quando:['Sintomas comuns que não melhoram em poucos dias','Check-up e acompanhamento de rotina','Dúvidas sobre exames e tratamentos em andamento'],
    levar:['Documento com foto e cartão do SUS ou convênio','Lista dos sintomas e quando começaram','Exames e receitas anteriores'] },
  'pediatria': { n:'Pediatria', ic:'baby', c:'purple',
    d:'Cuida da saúde de bebês, crianças e adolescentes, incluindo crescimento, vacinação e doenças comuns da infância.',
    quando:['Febre, tosse ou diarreia em crianças','Dúvidas sobre crescimento, alimentação e sono','Acompanhamento da caderneta de vacinação'],
    levar:['Caderneta de vacinação','Documento da criança e do responsável','Anotações sobre sintomas, alimentação e sono'] },
  'cardiologia': { n:'Cardiologia', ic:'heart', c:'red',
    d:'Avalia e acompanha o coração e os vasos sanguíneos, como pressão alta e alterações de ritmo.',
    quando:['Pressão alta ou histórico de problemas no coração na família','Palpitações ou cansaço fora do comum','Acompanhamento de tratamento cardíaco'],
    levar:['Exames anteriores (eletrocardiograma, exames de sangue)','Registro de medidas de pressão, se houver','Lista dos medicamentos em uso, conforme prescrição'] },
  'ortopedia': { n:'Ortopedia', ic:'wrench', c:'amber',
    d:'Trata ossos, articulações, músculos e ligamentos, como dores, lesões e problemas de postura.',
    quando:['Dor persistente em articulações ou coluna','Lesões após quedas ou esforço','Limitação de movimentos'],
    levar:['Exames de imagem anteriores','Descrição de como a lesão ocorreu','Documento com foto e cartão do SUS ou convênio'] }
};

/* Dados de exemplo: endereços e horários devem ser cadastrados/validados pela equipe. */
const UNITS = [
  { n:'UPA Walter Cavalcante Barbosa', t:'Urgência e emergência', h:'24 horas' },
  { n:'UPA João Samek', t:'Urgência e emergência', h:'24 horas' },
  { n:'Hospital Municipal Padre Germano Lauck', t:'Hospital', h:'Consultar' },
  { n:'Hospital Ministro Costa Cavalcanti', t:'Hospital', h:'Consultar' },
  { n:'Unidade Básica de Saúde (UBS) do seu bairro', t:'Atenção básica', h:'Consultar' }
];

const ARTICLES = [
  { id:'sinais', t:'Entenda sinais de alerta', ic:'alert', c:'red',
    h:'<p>Alguns sintomas pedem atenção imediata. Procure ajuda sem demora, ou ligue 192 (SAMU), se houver:</p><ul><li>Falta de ar intensa</li><li>Dor no peito</li><li>Desmaio ou confusão súbita</li><li>Piora rápida do quadro</li><li>Sangramento que não para</li><li>Dificuldade para falar ou fraqueza súbita de um lado do corpo</li></ul>' },
  { id:'medidas', t:'Medidas iniciais seguras', ic:'shieldOk', c:'green',
    h:'<p>Enquanto aguarda orientação profissional:</p><ul><li>Descanse e beba líquidos, se possível</li><li>Anote quando os sintomas começaram, a intensidade e o que mudou</li><li>Evite se automedicar; siga apenas prescrições de profissionais de saúde</li><li>Peça ajuda a alguém de confiança se estiver sozinho e se sentindo mal</li></ul>' },
  { id:'febre', t:'Febre: quando se preocupar', ic:'heart', c:'amber',
    h:'<p>A febre é um sinal de que o corpo reage a algo. Procure atendimento se ela durar mais de 2 a 3 dias, vier com falta de ar, manchas na pele, rigidez no pescoço, vômitos persistentes ou confusão, ou se ocorrer em bebês pequenos, idosos ou pessoas com doenças crônicas.</p>' },
  { id:'hidrata', t:'Hidratação e alimentação', ic:'book', c:'blue',
    h:'<p>Beber água ao longo do dia e manter refeições simples e regulares ajudam a recuperação em muitos quadros leves. Em caso de diarreia ou vômitos frequentes, observe sinais de desidratação (boca seca, urina escura, tontura) e procure atendimento se surgirem.</p>' },
  { id:'maos', t:'Prevenção no dia a dia', ic:'shield', c:'purple',
    h:'<ul><li>Lave as mãos com frequência</li><li>Mantenha a caderneta de vacinação em dia</li><li>Evite água parada em casa para prevenir criadouros de mosquitos</li><li>Faça acompanhamento regular de pressão e glicemia se tiver orientação para isso</li></ul>' },
  { id:'consulta', t:'Como se preparar para a consulta', ic:'file', c:'teal',
    h:'<ul><li>Anote os sintomas, quando começaram e o que melhora ou piora</li><li>Leve exames, receitas e documentos</li><li>Escreva suas dúvidas antes de ir</li><li>Informe alergias e medicamentos em uso</li></ul>' }
];

const SYMS = [
  { id:'febre', n:'Febre', ic:'heart', c:'red' },
  { id:'dor', n:'Dor', ic:'alert', c:'amber' },
  { id:'tosse', n:'Tosse', ic:'msg', c:'cyan' },
  { id:'ar', n:'Falta de ar', ic:'heart', c:'purple' },
  { id:'nausea', n:'Náusea', ic:'file', c:'green' },
  { id:'tontura', n:'Tontura', ic:'user', c:'blue' }
];

/* ================= ESTADO ================= */
const KEY = 'orientasaude:v1';
let db = { records:[], reminders:[], name:'', big:false, notif:false };
try { Object.assign(db, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} };

const sym = { sel:new Set(), custom:[], text:'', dur:null, worse:null };
let lastTab = 'inicio';
let filterRem = 'todos';

/* ================= UTILS ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const pad = n => String(n).padStart(2, '0');
const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const fmtDate = s => { const [y,m,d] = s.split('-'); return `${d}/${m}/${y}`; };
const fmtAt = iso => new Date(iso).toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
const DUR = { hoje:'Hoje', '2-3':'2–3 dias', mais:'Mais tempo' };
const WORSE = { sim:'Sim', nao:'Não', nsei:'Não sei dizer' };
const UL = { baixa:'Urgência baixa', media:'Urgência média', alta:'Urgência alta' };

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 3200);
}
function go(r) { if (location.hash === '#/' + r) render(); else location.hash = '#/' + r; }

/* ================= COMPONENTES ================= */
const brand = () => `<div class="brand"><div class="logo">${I('activity',26,2.4)}</div>
  <div class="bt"><div class="bn">Orienta<span>Saúde</span></div><div class="bs">Orientação segura para cuidar de você</div></div>
  <button class="aplus" data-act="big" aria-label="Aumentar ou diminuir o tamanho do texto">A+</button></div>`;
const head = (t, s, back) => `<div class="head"><button class="back" data-go="${back}" aria-label="Voltar">${I('chevL',22,2.6)}</button>
  <div><h1>${t}</h1><p>${s}</p></div></div>`;
const acard = (go, c, ic, t, d) => `<button class="acard c-${c}" data-go="${go}"><span class="ico">${I(ic,24)}</span>
  <div><b>${t}</b><small>${d}</small><span class="chev">${I('chevR',20,2.6)}</span></div></button>`;

/* ================= TELAS ================= */
const S = {};

S.inicio = () => `${brand()}
  <section class="hero"><div><h1>Olá! Vamos cuidar<br>da sua saúde?</h1>
    <p>Conte o que está sentindo e receba orientações sobre quando buscar atendimento.</p></div>
    <div class="badge"><span>${I('heartPulse',38,2)}</span></div></section>
  <button class="sos" data-act="sos"><span class="cross">${CROSS}</span>
    <span><b>EMERGÊNCIA</b><small>Em caso de risco imediato, ligue 192 (SAMU).</small></span>
    <span class="chev">${I('chevR',24,2.6)}</span></button>
  <div class="sec"><h2>Como podemos ajudar?</h2><p class="sub">Escolha uma opção para começar</p></div>
  <div class="grid2">
    ${acard('sintomas','blue','user','Descrever sintomas','Conte o que está sentindo.')}
    ${acard('especialidades','green','steth','Especialidades','Veja caminhos para atendimento.')}
    ${acard('lembretes','purple','calendar','Consultas e lembretes','Organize seus compromissos.')}
    ${acard('educacao','amber','book','Dicas de saúde','Informações claras e confiáveis.')}
    ${acard('registros','teal','file','Meus registros','Consulte orientações anteriores.')}
    ${acard('unidades','blue','pin','Unidades de saúde','Encontre locais de atendimento.')}
  </div>
  <a href="noticias.html" class="linkrow" style="margin-top:14px;text-decoration:none" aria-label="Acessar notícias oficiais de saúde da Tríplice Fronteira">
    <span class="ico c-green">${I('book',22)}</span>
    <span><b>Notícias oficiais de saúde</b><small>Paraná, Paraguai e Argentina · fontes oficiais</small></span>
    <span class="chev">${I('chevR',20,2.6)}</span>
  </a>
  <div class="card tint mt row" style="margin-top:16px"><span class="ico c-green lg" style="--c:#0b9f6c;--cb:#dff5ea">${I('shieldOk',28)}</span>
    <div><b>Informação segura, passo a passo</b><p>O OrientaSaúde informa e orienta. Não faz diagnósticos nem substitui a avaliação de profissionais de saúde.</p></div></div>
  <div class="sec"><h2 style="font-size:1.25rem">Também pode ajudar você</h2></div>
  <div class="grid3 mt">
    <button class="mini c-blue" data-go="meus-lembretes"><span class="t"><span class="ico">${I('clock',22)}</span>Lembrete de consulta</span><span class="chev">${I('chevR',20,2.6)}</span></button>
    <button class="mini c-purple" data-go="novo-med"><span class="t"><span class="ico">${I('pill',22)}</span>Lembrete de medicamento</span><span class="chev">${I('chevR',20,2.6)}</span></button>
    <button class="mini c-green" data-go="sinais"><span class="t"><span class="ico">${I('msg',22)}</span>Entenda sinais de alerta</span><span class="chev">${I('chevR',20,2.6)}</span></button>
  </div>
  <div class="card tint row mt" style="margin-top:16px"><span class="ico" style="background:#fff;--c:#0a6cff">${I('clock',24)}</span>
    <div><b>Dica para uma boa orientação</b><p>Anote quando o sintoma começou, a intensidade e o que mudou. Essas informações ajudam na conversa com um profissional de saúde.</p></div></div>`;

S.lembretes = () => `${brand()}
  <h1 class="big">Minha saúde</h1><p class="sub">Acessos simples para o dia a dia</p>
  <section class="card tint row" style="align-items:flex-start;padding:16px">
    <span class="ico" style="background:#fff;--c:#0a6cff;width:48px;height:48px">${I('calendar',26)}</span>
    <div><b style="font-size:1.1rem">Consultas e lembretes</b><p>Organize consultas e crie lembretes de horários.</p>
    <button class="btn blue mt-btn" data-go="meus-lembretes">Ver meus lembretes</button></div></section>
  <div class="sec"><h2>Encontrar atendimento</h2><p class="sub">Explore especialidades e veja informações para buscar o serviço adequado.</p></div>
  <section class="card row" style="align-items:flex-start;padding:16px">
    <span class="ico c-green" style="width:48px;height:48px">${I('search',24)}</span>
    <div><b style="font-size:1.1rem">Especialidades médicas</b><p>Consulte opções como clínica geral, pediatria, cardiologia e ortopedia.</p>
    <button class="btn green mt-btn" data-go="especialidades">Ver especialidades</button></div></section>
  <div class="grid2 mt">
    ${Object.entries(SPECS).map(([k,s]) => `<button class="tile c-${s.c}" data-go="especialidade/${k}"><span class="ico">${I(s.ic,22)}</span>${s.n}<span class="chev">${I('chevR',20,2.6)}</span></button>`).join('')}
  </div>
  <button class="card mint mt row" data-go="unidades" style="width:100%;text-align:left;align-items:flex-start;margin-top:14px">
    <span class="ico c-green" style="background:#fff">${I('pin',24)}</span>
    <div style="flex:1"><b>Unidades de saúde</b><p>Veja endereços e informações de atendimento cadastradas no sistema.</p><span class="green-link">Consultar unidades</span></div>
    <span style="align-self:center;color:var(--green)">${I('chevR',22,2.6)}</span></button>
  <div class="sec"><h2>Cuide de você todos os dias</h2></div>
  <div class="grid2 mt">
    <button class="tilex c-purple" data-go="novo-med"><span class="ico">${I('pill',24)}</span><div><b>Medicamentos</b><small>Crie lembretes de horários prescritos.</small></div></button>
    <button class="tilex c-amber" data-go="educacao"><span class="ico">${I('book',24)}</span><div><b>Educação em saúde</b><small>Aprenda sobre sintomas e prevenção.</small></div></button>
  </div>
  <div class="card tint mt row" style="margin-top:14px"><span class="ico" style="background:#fff;--c:#0aa8a0">${I('shieldOk',24)}</span>
    <div><b>Importante</b><p>Os conteúdos são informativos. Não use o aplicativo para escolher medicamentos ou substituir uma consulta.</p></div></div>
  <button class="linkrow mt" data-go="sintomas" style="margin-top:14px"><span class="ico" style="background:#e3eeff;--c:#0a6cff">${I('msg',22)}</span>
    <span><b>Precisa de orientação?</b><small style="color:var(--muted)">Volte à tela inicial e descreva seus sintomas.</small></span>${I('chevR',22,2.6)}</button>`;

S.sintomas = () => {
  const all = [...SYMS.map(s => ({...s})), ...sym.custom.map(n => ({ id:'x:'+n, n, ic:'msg', c:'blue' }))];
  const isOn = id => sym.sel.has(id);
  return `${head('Descrever sintomas','Conte como você está se sentindo','inicio')}
  <div class="stepper"><div class="step on"><span class="n">1</span>Sintomas</div><div class="step"><span class="n">2</span>Detalhes</div><div class="step"><span class="n">3</span>Orientação</div></div>
  <h2 style="font-size:1.3rem">O que você está sentindo?</h2>
  <p class="sub" style="margin-bottom:0">Marque uma ou mais opções. Você também pode escrever com suas próprias palavras.</p>
  <label class="search">${I('search',20,2.4)}<input id="q" type="search" placeholder="Buscar ou digitar um sintoma" autocomplete="off" aria-label="Buscar ou digitar um sintoma"></label>
  <div class="grid2" id="opts">${all.map(s => `<button class="opt c-${s.c}${isOn(s.id)?' on':''}" data-sym="${esc(s.id)}" data-name="${esc(norm(s.n))}" aria-pressed="${isOn(s.id)}"><span class="ico">${I(s.ic,20)}</span>${esc(s.n)}<span class="radio">${I('check',14,3.4)}</span></button>`).join('')}</div>
  <div id="addcustom" hidden style="margin-top:10px"></div>
  <h3 style="font-size:1.1rem;margin-top:18px">Quer explicar melhor?</h3>
  <textarea id="txt" class="mt" style="margin-top:8px" placeholder="Ex.: quando começou, onde dói, se algo melhora ou piora...">${esc(sym.text)}</textarea>
  <h3 style="font-size:1.1rem;margin-top:18px">Há quanto tempo?</h3>
  <div class="chips" data-group="dur">${Object.entries(DUR).map(([k,v]) => `<button class="chip${sym.dur===k?' on':''}" data-dur="${k}">${v}</button>`).join('')}</div>
  <h3 style="font-size:1.1rem;margin-top:18px">O sintoma está piorando?</h3>
  <div class="chips" data-group="worse">
    <button class="chip r${sym.worse==='sim'?' on':''}" data-worse="sim">Sim</button>
    <button class="chip g${sym.worse==='nao'?' on':''}" data-worse="nao">Não</button>
    <button class="chip${sym.worse==='nsei'?' on':''}" data-worse="nsei">Não sei dizer</button></div>
  <div class="warn"><span class="ico">${I('alert',22)}</span><div><b>Atenção aos sinais graves</b><p>Falta de ar intensa, dor no peito, desmaio ou piora rápida? Não espere pelo aplicativo. Procure ajuda imediatamente.</p></div></div>
  <div class="note"><span class="ico">${I('shieldOk',18)}</span><span>Informe apenas o necessário. Esta ferramenta oferece orientação inicial e não confirma diagnósticos.</span></div>
  <div class="card tint row"><span class="ico" style="background:transparent;--c:#0b9f6c">${I('check',26,3)}</span><div><b>Você está no controle</b><p>Revise as respostas e ajuste o relato antes de continuar.</p></div></div>
  <div id="err" class="err" role="alert"></div>
  <button class="btn blue block" data-act="continue" style="margin-top:14px">Continuar para orientação</button>`;
};

function urgency(s) {
  const t = norm(s.text + ' ' + s.custom.join(' '));
  const n = s.sel.size + s.custom.length;
  if (/(dor no peito|peito|desmai|confus|convuls|sangr|nao consigo respirar|paralisia|fala enrolada)/.test(t)
      || (s.sel.has('ar') && s.worse === 'sim') || (s.sel.has('ar') && /(intens|muito|forte)/.test(t))) return 'alta';
  if (s.sel.has('ar') || s.worse === 'sim' || (s.sel.has('febre') && s.dur === 'mais') || n >= 3 || (s.dur === 'mais' && n > 0)) return 'media';
  return 'baixa';
}

S.orientacao = () => {
  const r = db.records[0] || { urg:'baixa' };
  const next = {
    baixa:'Revise os sinais de alerta abaixo e procure atendimento se os sintomas persistirem, piorarem ou causarem preocupação.',
    media:'Considere procurar uma unidade de saúde nas próximas horas ou dias, principalmente se os sintomas continuarem ou piorarem.',
    alta:'Pelos sinais informados, procure atendimento imediatamente. Em risco imediato, ligue 192 (SAMU).'
  }[r.urg];
  return `${head('Orientação inicial','Próximos passos para você','sintomas')}
  <div class="badge-info">${I('shield',22)}Orientação informativa - Não é diagnóstico</div>
  <h2>O que fazer agora</h2>
  <p class="sub">A orientação depende dos sintomas informados e da sua evolução. Em caso de dúvida, procure um profissional de saúde.</p>
  <div class="okbar"><span class="dot">${I('check',16,3.4)}</span>Seu relato foi registrado</div>
  <div class="okcard"><div class="top"><b>Próximo passo recomendado</b><span class="urg ${r.urg}">${UL[r.urg]}</span></div><p>${next}</p></div>
  <div class="alert${r.urg==='alta'?' pulse':''}"><span class="ico">${I('alert',26)}</span><div>
    <h4>Procure ajuda imediata se houver:</h4>
    <ul><li>Dor no peito ou falta de ar intensa</li><li>Desmaio, confusão súbita ou piora rápida</li></ul>
    <div class="tel">No Brasil, ligue <a href="tel:192">192 (SAMU)</a> em uma emergência.</div></div></div>
  <h2 style="font-size:1.3rem;margin-bottom:12px">Passos que podem ajudar</h2>
  <div class="stepcard"><span class="num n1">1</span><span class="ico">${I('eye',24)}</span><div><b>Observe a evolução</b><p>Anote quando começou, a intensidade e o que mudou.</p></div></div>
  <div class="stepcard g"><span class="num n2">2</span><span class="ico">${I('steth',24)}</span><div><b>Busque orientação profissional</b><p>Procure uma unidade de saúde se os sintomas persistirem ou preocuparem.</p></div></div>
  <div class="stepcard p"><span class="num n3">3</span><span class="ico">${I('book',24)}</span><div><b>Use fontes confiáveis</b><p>Consulte conteúdos educativos e evite se automedicar com base no aplicativo.</p></div></div>
  <button class="btn blue block" data-go="unidades" style="margin-top:16px">Encontrar atendimento</button>
  <button class="btn line block" data-go="sintomas" style="margin-top:10px">Revisar meus sintomas</button>
  <div class="card tint row mt" style="margin-top:16px"><span class="ico" style="background:#d9f6f3;--c:#0aa8a0">${I('heartPulse',24)}</span>
    <div><b>Você não precisa decidir sozinho</b><p>O OrientaSaúde apoia a busca por informação. Somente profissionais de saúde podem avaliar seu caso.</p></div></div>
  <div class="card tint row mt"><span class="ico" style="background:#fff;--c:#0a6cff">${I('shieldOk',24)}</span>
    <div><b>Antes do uso real</b><p>As regras de orientação e os conteúdos de saúde devem ser revisados por profissionais qualificados.</p></div></div>`;
};

S.registros = () => `${head('Meus registros','Orientações anteriores','inicio')}
  ${db.records.length ? `<div class="list">${db.records.map(r => `<div class="item"><span class="ico c-blue">${I('file',20)}</span>
    <div class="grow"><b>${esc(r.sel.join(', ') || 'Relato livre')}</b>
    <small>${fmtAt(r.at)} · ${r.dur ? DUR[r.dur] : 'duração não informada'}</small>
    <span class="urg ${r.urg}" style="display:inline-block;margin-top:4px">${UL[r.urg]}</span></div>
    <button class="x" data-del-rec="${r.id}" aria-label="Excluir registro">${I('trash',18)}</button></div>`).join('')}</div>
    <button class="btn line block" data-act="clear-rec" style="margin-top:14px">Apagar todos os registros</button>`
  : `<div class="empty">Você ainda não tem registros.<br>Descreva seus sintomas para receber uma orientação inicial.</div>
     <button class="btn blue block" data-go="sintomas" style="margin-top:14px">Descrever sintomas</button>`}`;

S.especialidades = () => `${head('Especialidades','Veja caminhos para atendimento',lastTab==='lembretes'?'lembretes':'inicio')}
  <div class="stack">${Object.entries(SPECS).map(([k,s]) => `<button class="tilex c-${s.c}" data-go="especialidade/${k}"><span class="ico">${I(s.ic,24)}</span><div><b>${s.n}</b><small>${s.d}</small></div><span class="chev">${I('chevR',20,2.6)}</span></button>`).join('')}</div>
  <div class="note" style="margin-top:16px"><span class="ico">${I('shieldOk',18)}</span><span>Conteúdo informativo. Não substitui a avaliação de um profissional de saúde.</span></div>`;

S.especialidade = id => {
  const s = SPECS[id]; if (!s) return S.especialidades();
  return `${head(s.n,'Informações para buscar atendimento','especialidades')}
  <div class="card tint row c-${s.c}"><span class="ico lg" style="background:#fff">${I(s.ic,28)}</span><p style="color:var(--navy)">${s.d}</p></div>
  <h2 class="sec" style="font-size:1.2rem">Quando procurar</h2>
  <div class="card mt"><ul style="padding-left:18px;display:grid;gap:6px">${s.quando.map(x=>`<li>${x}</li>`).join('')}</ul></div>
  <h2 class="sec" style="font-size:1.2rem">O que levar</h2>
  <div class="card mt"><ul style="padding-left:18px;display:grid;gap:6px">${s.levar.map(x=>`<li>${x}</li>`).join('')}</ul></div>
  <button class="btn green block" data-go="unidades" style="margin-top:16px">Ver unidades de saúde</button>
  <button class="btn line block" data-go="novo-consulta" style="margin-top:10px">Criar lembrete de consulta</button>`;
};

S.unidades = () => `${head('Unidades de saúde','Foz do Iguaçu e região',lastTab==='lembretes'?'lembretes':'inicio')}
  <label class="search">${I('search',20,2.4)}<input id="uq" type="search" placeholder="Buscar unidade" autocomplete="off"></label>
  <div class="list" id="ulist">${UNITS.map(u => `<div class="item" data-uname="${esc(norm(u.n+' '+u.t))}"><span class="ico c-green">${I('pin',20)}</span>
    <div class="grow"><b>${esc(u.n)}</b><small>${esc(u.t)} · Horário: ${esc(u.h)}</small><small>Endereço: a cadastrar no sistema</small>
    <a class="green-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.n+' Foz do Iguaçu')}">Abrir no mapa</a></div></div>`).join('')}</div>
  <div class="alert" style="margin-top:16px"><span class="ico">${I('phone',24)}</span><div><h4>Emergência</h4><div class="tel">Em risco imediato, ligue <a href="tel:192">192 (SAMU)</a>.</div></div></div>
  <div class="note"><span class="ico">${I('shieldOk',18)}</span><span>Dados de exemplo: endereços e horários devem ser conferidos e cadastrados pela equipe antes do uso real.</span></div>`;

S.educacao = () => `${head('Educação em saúde','Aprenda sobre sintomas e prevenção',lastTab==='lembretes'?'lembretes':'inicio')}
  <div class="stack">${ARTICLES.map(a => `<details class="acc" ${a.id===S._open?'open':''}><summary><span class="ico c-${a.c}">${I(a.ic,20)}</span>${a.t}<span class="chev">${I('chevR',20,2.6)}</span></summary><div class="body">${a.h}</div></details>`).join('')}</div>
  <div class="note" style="margin-top:16px"><span class="ico">${I('shieldOk',18)}</span><span>Conteúdo informativo e de exemplo. Deve ser revisado por profissionais de saúde antes do uso real.</span></div>`;
S.sinais = () => { S._open = 'sinais'; const h = S.educacao(); S._open = null; return h; };

function remSort(a, b) { return ((a.daily ? '0000-00-00' : a.date) + a.time).localeCompare((b.daily ? '0000-00-00' : b.date) + b.time); }
S['meus-lembretes'] = () => {
  const list = db.reminders.filter(r => filterRem === 'todos' || r.type === filterRem).sort(remSort);
  return `${head('Meus lembretes','Consultas e medicamentos','lembretes')}
  <div class="seg">${[['todos','Todos'],['consulta','Consultas'],['medicamento','Medicamentos']].map(([k,v]) => `<button class="${filterRem===k?'on':''}" data-filter="${k}">${v}</button>`).join('')}</div>
  ${list.length ? `<div class="list">${list.map(r => `<div class="item"><span class="ico ${r.type==='consulta'?'c-blue':'c-purple'}">${I(r.type==='consulta'?'calendar':'pill',20)}</span>
    <div class="grow"><b>${esc(r.title)}</b><small>${r.daily ? 'Todos os dias' : fmtDate(r.date)} às ${r.time}${r.note ? ' · ' + esc(r.note) : ''}</small>
    <span class="pill ${r.type==='consulta'?'':'g'}">${r.type==='consulta'?'Consulta':'Medicamento'}</span></div>
    <button class="x" data-del-rem="${r.id}" aria-label="Excluir lembrete">${I('trash',18)}</button></div>`).join('')}</div>`
  : `<div class="empty">Nenhum lembrete por aqui.<br>Crie um para não esquecer horários importantes.</div>`}
  <div class="two" style="margin-top:16px"><button class="btn blue block" data-go="novo-consulta" style="font-size:.95rem">${I('plus',18,2.6)} Consulta</button>
  <button class="btn green block" data-go="novo-med" style="font-size:.95rem">${I('plus',18,2.6)} Medicamento</button></div>
  <div class="note" style="margin-top:14px"><span class="ico">${I('bell',18)}</span><span>Os avisos aparecem enquanto o aplicativo está aberto. Registre apenas horários prescritos por profissionais.</span></div>`;
};

S.perfil = () => `${head('Perfil','Preferências do aplicativo','inicio')}
  <label class="lbl" for="pname" style="margin-top:4px">Seu nome (opcional)</label>
  <input id="pname" class="field" value="${esc(db.name)}" placeholder="Como quer ser chamado?" maxlength="40">
  <div class="stack" style="margin-top:14px">
    <label class="sw"><span><b>Texto maior</b><small>Facilita a leitura</small></span><input type="checkbox" id="pbig" ${db.big?'checked':''}></label>
    <label class="sw"><span><b>Notificações do navegador</b><small>Avisos dos lembretes</small></span><input type="checkbox" id="pnotif" ${db.notif?'checked':''}></label>
    <button class="linkrow" data-go="registros"><span class="ico c-teal">${I('file',20)}</span><b>Meus registros</b>${I('chevR',22,2.6)}</button>
    <button class="linkrow" data-go="educacao"><span class="ico c-amber">${I('book',20)}</span><b>Educação em saúde</b>${I('chevR',22,2.6)}</button>
  </div>
  <div class="card tint row mt" style="margin-top:16px"><span class="ico" style="background:#fff;--c:#0a6cff">${I('shieldOk',24)}</span>
    <div><b>Privacidade</b><p>Seus dados ficam apenas neste dispositivo (armazenamento local do navegador). Nada é enviado a servidores.</p></div></div>
  <button class="btn line block" data-act="wipe" style="margin-top:14px;color:var(--red)">Apagar todos os meus dados</button>`;

/* formulário de lembrete (folha) */
function reminderSheet(type) {
  const med = type === 'medicamento';
  openSheet(`<h3>${med ? 'Lembrete de medicamento' : 'Lembrete de consulta'}</h3>
  <p class="sub">${med ? 'Use apenas horários prescritos por um profissional de saúde.' : 'Organize o dia e o horário do seu compromisso.'}</p>
  <label class="lbl" for="rt">${med ? 'Nome do medicamento' : 'Consulta ou especialidade'}</label>
  <input class="field" id="rt" maxlength="60" placeholder="${med ? 'Ex.: medicamento prescrito' : 'Ex.: Cardiologia'}">
  <div class="two"><div><label class="lbl" for="rd">Data</label><input type="date" class="field" id="rd" value="${todayStr()}"></div>
  <div><label class="lbl" for="rh">Horário</label><input type="time" class="field" id="rh" value="08:00"></div></div>
  ${med ? `<label class="sw" style="margin-top:12px"><span><b>Repetir todos os dias</b></span><input type="checkbox" id="rdaily" checked></label>` : ''}
  <label class="lbl" for="rn">Observação (opcional)</label>
  <input class="field" id="rn" maxlength="80" placeholder="${med ? 'Ex.: conforme a receita' : 'Ex.: levar exames'}">
  <div id="rerr" class="err" role="alert"></div>
  <div class="acts"><button class="btn blue block" data-act="save-rem" data-type="${type}">Salvar lembrete</button>
  <button class="btn ghost block" data-act="close">Cancelar</button></div>`);
  setTimeout(() => $('#rt') && $('#rt').focus(), 60);
}
function openSheet(html, center) { const o = $('#overlay'); o.innerHTML = `<div class="sheet${center?' center':''}" role="dialog" aria-modal="true">${html}</div>`; o.hidden = false; }
function closeSheet() { const o = $('#overlay'); o.hidden = true; o.innerHTML = ''; }

/* ================= ROTEAMENTO ================= */
const TAB = { inicio:'inicio', sintomas:'registros', orientacao:'registros', registros:'registros', lembretes:'lembretes', 'meus-lembretes':'lembretes', perfil:'perfil' };
function render() {
  closeSheet();
  const parts = (location.hash.replace(/^#\//, '') || 'inicio').split('/');
  let name = parts[0], arg = parts[1];
  if (name === 'novo-med' || name === 'novo-consulta') {
    const type = name === 'novo-med' ? 'medicamento' : 'consulta';
    history.replaceState(null, '', '#/meus-lembretes'); name = 'meus-lembretes';
    lastTab = 'lembretes'; paint(name, arg); reminderSheet(type); return;
  }
  if (!S[name]) name = 'inicio';
  if (TAB[name]) lastTab = TAB[name];
  paint(name, arg);
}
function paint(name, arg) {
  const v = $('#view');
  v.innerHTML = S[name](arg);
  v.scrollTop = 0;
  const tab = TAB[name] || lastTab;
  document.querySelectorAll('#nav button').forEach(b => { const on = b.dataset.tab === tab; b.classList.toggle('on', on); if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
}

/* ================= EVENTOS ================= */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-go],[data-act],[data-sym],[data-dur],[data-worse],[data-filter],[data-del-rem],[data-del-rec],[data-addsym]');
  if (!el) return;
  if (el.dataset.go) return go(el.dataset.go);
  if (el.dataset.sym) {
    const id = el.dataset.sym, on = !sym.sel.has(id);
    on ? sym.sel.add(id) : sym.sel.delete(id);
    el.classList.toggle('on', on); el.setAttribute('aria-pressed', on); return;
  }
  if (el.dataset.dur) { sym.dur = sym.dur === el.dataset.dur ? null : el.dataset.dur; return groupSync('dur', sym.dur); }
  if (el.dataset.worse) { sym.worse = sym.worse === el.dataset.worse ? null : el.dataset.worse; return groupSync('worse', sym.worse); }
  if (el.dataset.filter) { filterRem = el.dataset.filter; return render(); }
  if (el.dataset.addsym) {
    const n = el.dataset.addsym; if (!sym.custom.includes(n)) { sym.custom.push(n); sym.sel.add('x:' + n); }
    return render();
  }
  if (el.dataset.delRem) { db.reminders = db.reminders.filter(r => String(r.id) !== el.dataset.delRem); save(); toast('Lembrete excluído'); return render(); }
  if (el.dataset.delRec) { db.records = db.records.filter(r => String(r.id) !== el.dataset.delRec); save(); toast('Registro excluído'); return render(); }

  switch (el.dataset.act) {
    case 'big': db.big = !db.big; document.documentElement.classList.toggle('big', db.big); save(); break;
    case 'sos':
      openSheet(`<h3 style="color:var(--red)">Emergência</h3><p class="sub">Em caso de risco imediato, ligue 192 (SAMU). Não espere pelo aplicativo.</p>
      <div class="acts"><a class="btn red block" href="tel:192">${I('phone',20)} Ligar para 192</a><button class="btn ghost block" data-act="close">Fechar</button></div>`, true); break;
    case 'close': closeSheet(); break;
    case 'continue': continueFlow(); break;
    case 'save-rem': saveReminder(el.dataset.type); break;
    case 'clear-rec': if (confirm('Apagar todos os registros?')) { db.records = []; save(); render(); } break;
    case 'wipe': if (confirm('Apagar todos os dados deste aplicativo neste dispositivo?')) { db = { records:[], reminders:[], name:'', big:false, notif:false }; save(); document.documentElement.classList.remove('big'); sym.sel.clear(); sym.custom = []; sym.text=''; sym.dur=null; sym.worse=null; toast('Dados apagados'); go('inicio'); } break;
  }
});
function groupSync(g, val) {
  document.querySelectorAll(`[data-group="${g}"] .chip`).forEach(c => c.classList.toggle('on', c.dataset[g] === val));
}
$('#overlay').addEventListener('click', e => { if (e.target.id === 'overlay') closeSheet(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

document.addEventListener('input', e => {
  if (e.target.id === 'txt') sym.text = e.target.value;
  if (e.target.id === 'q') {
    const q = norm(e.target.value.trim()); let n = 0;
    document.querySelectorAll('#opts .opt').forEach(o => { const m = !q || o.dataset.name.includes(q); o.style.display = m ? '' : 'none'; if (m) n++; });
    const box = $('#addcustom'), raw = e.target.value.trim();
    if (q && n === 0) { box.hidden = false; box.innerHTML = `<button class="btn ghost block" data-addsym="${esc(raw)}">${I('plus',18,2.6)} Adicionar “${esc(raw)}”</button>`; } else box.hidden = true;
  }
  if (e.target.id === 'uq') {
    const q = norm(e.target.value.trim());
    document.querySelectorAll('#ulist .item').forEach(o => o.style.display = !q || o.dataset.uname.includes(q) ? '' : 'none');
  }
  if (e.target.id === 'pname') { db.name = e.target.value; save(); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.id === 'q') { const b = $('#addcustom button'); if (b) b.click(); }
});
document.addEventListener('change', e => {
  if (e.target.id === 'pbig') { db.big = e.target.checked; document.documentElement.classList.toggle('big', db.big); save(); }
  if (e.target.id === 'pnotif') {
    if (e.target.checked && 'Notification' in window) {
      Notification.requestPermission().then(p => { db.notif = p === 'granted'; e.target.checked = db.notif; save(); if (!db.notif) toast('Permissão de notificação não concedida'); });
    } else { db.notif = false; save(); }
  }
});

function continueFlow() {
  const err = $('#err');
  if (!sym.sel.size && !sym.text.trim()) { err.textContent = 'Marque ao menos um sintoma ou descreva como você está se sentindo.'; $('#view').scrollTo({ top: $('#view').scrollHeight, behavior:'smooth' }); return; }
  const names = [...sym.sel].map(id => id.startsWith('x:') ? id.slice(2) : (SYMS.find(s => s.id === id) || {}).n).filter(Boolean);
  db.records.unshift({ id:Date.now(), at:new Date().toISOString(), sel:names, text:sym.text.trim(), dur:sym.dur, worse:sym.worse, urg:urgency(sym) });
  db.records = db.records.slice(0, 50); save();
  go('orientacao');
}

function saveReminder(type) {
  const title = $('#rt').value.trim(), date = $('#rd').value, time = $('#rh').value, note = $('#rn').value.trim();
  const daily = type === 'medicamento' && $('#rdaily').checked;
  const err = $('#rerr');
  if (!title) { err.textContent = 'Informe um nome para o lembrete.'; return; }
  if (!time || (!daily && !date)) { err.textContent = 'Informe a data e o horário.'; return; }
  db.reminders.push({ id:Date.now(), type, title, date:date || todayStr(), time, daily, note, fired:'' });
  save(); closeSheet(); toast('Lembrete salvo'); render();
}

/* avisos de lembretes (com o app aberto) */
function checkReminders() {
  const now = new Date(), t = `${pad(now.getHours())}:${pad(now.getMinutes())}`, d = todayStr();
  let changed = false;
  db.reminders.forEach(r => {
    const day = r.daily ? d : r.date;
    if (day === d && t >= r.time && r.fired !== d) {
      r.fired = d; changed = true;
      const msg = (r.type === 'consulta' ? 'Consulta: ' : 'Medicamento: ') + r.title + ' às ' + r.time;
      toast('🔔 ' + msg);
      if (db.notif && 'Notification' in window && Notification.permission === 'granted') { try { new Notification('OrientaSaúde', { body: msg }); } catch (e) {} }
    }
  });
  if (changed) save();
}
setInterval(checkReminders, 30000);

/* ================= INICIALIZAÇÃO ================= */
document.documentElement.classList.toggle('big', !!db.big);
document.querySelectorAll('[data-i]').forEach(n => n.innerHTML = I(n.dataset.i, 24));
window.addEventListener('hashchange', render);
render();
setTimeout(checkReminders, 1500);
})();
