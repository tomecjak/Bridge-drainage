const CURVES = {"1":[[[0,24.0],[0.025,23.3],[0.05,22.5],[0.075,21.5],[0.1,20.7],[0.125,19.7],[0.15,18.9],[0.175,18.0],[0.2,17.1],[0.225,16.2],[0.25,15.3],[0.275,14.4],[0.3,13.5],[0.325,12.6],[0.35,11.8],[0.375,11.0],[0.4,10.3],[0.425,9.6],[0.45,8.9],[0.475,8.3],[0.5,7.7],[0.525,7.1],[0.55,6.6],[0.575,6.2],[0.6,5.8],[0.625,5.4],[0.65,5.1],[0.675,4.8],[0.7,4.5],[0.725,4.3],[0.75,4.1],[0.775,3.9],[0.8,3.8],[0.825,3.6],[0.85,3.5],[0.875,3.5],[0.9,3.4],[0.925,3.4],[0.95,3.4],[0.975,3.4],[1.0,3.4]],[[0,30.4],[0.025,29.7],[0.05,28.8],[0.075,27.9],[0.1,27.0],[0.125,26.1],[0.15,25.2],[0.175,24.3],[0.2,23.4],[0.225,22.5],[0.25,21.5],[0.275,20.7],[0.3,19.7],[0.325,18.9],[0.35,17.9],[0.375,17.0],[0.4,16.1],[0.425,15.2],[0.45,14.3],[0.475,13.5],[0.5,12.8],[0.525,12.0],[0.55,11.3],[0.575,10.7],[0.6,10.1],[0.625,9.5],[0.65,8.9],[0.675,8.4],[0.7,8.0],[0.725,7.5],[0.75,7.1],[0.775,6.7],[0.8,6.4],[0.825,6.1],[0.85,5.9],[0.875,5.6],[0.9,5.4],[0.925,5.2],[0.95,5.1],[0.975,5.0],[1.0,4.9]],[[0,36.8],[0.025,36.1],[0.05,35.2],[0.075,34.3],[0.1,33.4],[0.125,32.5],[0.15,31.6],[0.175,30.6],[0.2,29.8],[0.225,28.8],[0.25,27.9],[0.275,27.0],[0.3,26.1],[0.325,25.2],[0.35,24.3],[0.375,23.4],[0.4,22.5],[0.425,21.5],[0.45,20.6],[0.475,19.7],[0.5,18.7],[0.525,17.8],[0.55,16.9],[0.575,16.1],[0.6,15.2],[0.625,14.5],[0.65,13.7],[0.675,13.0],[0.7,12.3],[0.725,11.6],[0.75,11.0],[0.775,10.4],[0.8,9.8],[0.825,9.3],[0.85,8.8],[0.875,8.4],[0.9,8.0],[0.925,7.6],[0.95,7.3],[0.975,7.0],[1.0,6.8]],[[0,42.7],[0.025,42.1],[0.05,41.1],[0.075,40.3],[0.1,39.3],[0.125,38.4],[0.15,37.5],[0.175,36.6],[0.2,35.7],[0.225,34.8],[0.25,33.9],[0.275,32.9],[0.3,32.1],[0.325,31.1],[0.35,30.3],[0.375,29.3],[0.4,28.5],[0.425,27.5],[0.45,26.6],[0.475,25.7],[0.5,24.8],[0.525,23.9],[0.55,23.0],[0.575,22.0],[0.6,21.1],[0.625,20.1],[0.65,19.3],[0.675,18.4],[0.7,17.5],[0.725,16.7],[0.75,15.9],[0.775,15.1],[0.8,14.3],[0.825,13.5],[0.85,12.8],[0.875,12.1],[0.9,11.4],[0.925,10.8],[0.95,10.2],[0.975,9.6],[1.0,9.1]],[[0.079,45.7],[0.1,44.9],[0.125,44.0],[0.15,43.1],[0.175,42.1],[0.2,41.3],[0.225,40.3],[0.25,39.5],[0.275,38.5],[0.3,37.7],[0.325,36.7],[0.35,35.8],[0.375,34.9],[0.4,34.0],[0.425,33.1],[0.45,32.2],[0.475,31.3],[0.5,30.3],[0.525,29.5],[0.55,28.5],[0.575,27.7],[0.6,26.7],[0.625,25.8],[0.65,24.9],[0.675,24.0],[0.7,23.1],[0.725,22.2],[0.75,21.3],[0.775,20.4],[0.8,19.5],[0.825,18.6],[0.85,17.7],[0.875,16.7],[0.9,15.9],[0.925,14.9],[0.95,14.0],[0.975,13.1],[1.0,12.3]]],"2":[[[0,36.7],[0.025,36.3],[0.05,35.4],[0.075,34.7],[0.1,33.9],[0.125,33.1],[0.15,32.3],[0.175,31.5],[0.2,30.7],[0.225,29.9],[0.25,29.1],[0.275,28.3],[0.3,27.5],[0.325,26.8],[0.35,25.9],[0.375,25.1],[0.4,24.3],[0.425,23.6],[0.45,22.7],[0.475,21.9],[0.5,21.2],[0.525,20.4],[0.55,19.5],[0.575,18.8],[0.6,18.0],[0.625,17.2],[0.65,16.4],[0.675,15.6],[0.7,14.9],[0.725,14.3],[0.75,13.7],[0.775,13.2],[0.8,12.7],[0.825,12.2],[0.85,11.8],[0.875,11.4],[0.9,11.0],[0.925,10.6],[0.95,10.3],[0.975,9.9],[1.0,9.6],[1.025,9.3],[1.05,9.0],[1.075,8.7],[1.1,8.5],[1.125,8.2],[1.15,8.0],[1.175,7.7],[1.2,7.5],[1.225,7.3],[1.25,7.1],[1.275,7.0],[1.3,6.8],[1.325,6.6],[1.35,6.5],[1.375,6.3],[1.4,6.2],[1.425,6.1],[1.45,6.0],[1.475,5.9],[1.5,5.9]],[[0,46.5],[0.025,46.0],[0.05,45.3],[0.075,44.4],[0.1,43.6],[0.125,42.9],[0.15,42.1],[0.175,41.2],[0.2,40.4],[0.225,39.7],[0.25,38.9],[0.275,38.0],[0.3,37.3],[0.325,36.5],[0.35,35.7],[0.375,34.9],[0.4,34.1],[0.425,33.3],[0.45,32.5],[0.475,31.7],[0.5,30.9],[0.525,30.1],[0.55,29.4],[0.575,28.5],[0.6,27.7],[0.625,27.0],[0.65,26.2],[0.675,25.3],[0.7,24.6],[0.725,23.8],[0.75,23.0],[0.775,22.2],[0.8,21.4],[0.825,20.6],[0.85,19.9],[0.875,19.2],[0.9,18.5],[0.925,17.8],[0.95,17.2],[0.975,16.6],[1.0,16.0],[1.025,15.4],[1.05,14.9],[1.075,14.4],[1.1,13.9],[1.125,13.4],[1.15,12.9],[1.175,12.5],[1.2,12.1],[1.225,11.7],[1.25,11.3],[1.275,10.9],[1.3,10.6],[1.325,10.2],[1.35,9.9],[1.375,9.7],[1.4,9.4],[1.425,9.1],[1.45,8.9],[1.475,8.7],[1.5,8.5]],[[0,55.0],[0.025,54.7],[0.05,53.8],[0.075,53.0],[0.1,52.3],[0.125,51.5],[0.15,50.6],[0.175,49.8],[0.2,49.1],[0.225,48.3],[0.25,47.4],[0.275,46.7],[0.3,45.9],[0.325,45.1],[0.35,44.3],[0.375,43.5],[0.4,42.7],[0.425,41.9],[0.45,41.1],[0.475,40.3],[0.5,39.5],[0.525,38.8],[0.55,37.9],[0.575,37.1],[0.6,36.4],[0.625,35.6],[0.65,34.7],[0.675,34.0],[0.7,33.2],[0.725,32.4],[0.75,31.6],[0.775,30.8],[0.8,30.0],[0.825,29.2],[0.85,28.5],[0.875,27.6],[0.9,26.8],[0.925,26.1],[0.95,25.3],[0.975,24.5],[1.0,23.8],[1.025,23.1],[1.05,22.4],[1.075,21.7],[1.1,21.0],[1.125,20.4],[1.15,19.7],[1.175,19.1],[1.2,18.4],[1.225,17.8],[1.25,17.2],[1.275,16.6],[1.3,16.0],[1.325,15.4],[1.35,14.8],[1.375,14.3],[1.4,13.7],[1.425,13.2],[1.45,12.7],[1.475,12.2],[1.5,11.8]],[[0.125,59.7],[0.15,58.9],[0.175,58.1],[0.2,57.3],[0.225,56.5],[0.25,55.8],[0.275,54.9],[0.3,54.1],[0.325,53.3],[0.35,52.6],[0.375,51.7],[0.4,50.9],[0.425,50.2],[0.45,49.4],[0.475,48.5],[0.5,47.8],[0.525,47.0],[0.55,46.2],[0.575,45.4],[0.6,44.6],[0.625,43.8],[0.65,43.0],[0.675,42.3],[0.7,41.4],[0.725,40.6],[0.75,39.9],[0.775,39.1],[0.8,38.2],[0.825,37.5],[0.85,36.7],[0.875,35.9],[0.9,35.1],[0.925,34.3],[0.95,33.5],[0.975,32.7],[1.0,31.9],[1.025,31.1],[1.05,30.3],[1.075,29.6],[1.1,28.7],[1.125,27.9],[1.15,27.2],[1.175,26.4],[1.2,25.5],[1.225,24.8],[1.25,24.0],[1.275,23.2],[1.3,22.3],[1.325,21.6],[1.35,20.8],[1.375,20.0],[1.4,19.3],[1.425,18.4],[1.45,17.6],[1.475,16.8],[1.5,16.2]]],"3":[[[0,40.4],[0.025,39.8],[0.05,38.8],[0.075,37.8],[0.1,36.9],[0.125,35.9],[0.15,34.8],[0.175,33.9],[0.2,32.9],[0.225,31.9],[0.25,30.9],[0.275,29.9],[0.3,28.9],[0.325,27.9],[0.35,27.0],[0.375,26.0],[0.4,24.9],[0.425,24.0],[0.45,23.0],[0.475,22.0],[0.5,21.0],[0.525,20.1],[0.55,19.0],[0.575,18.1],[0.6,17.2],[0.625,16.3],[0.65,15.5],[0.675,14.8],[0.7,14.0],[0.725,13.4],[0.75,12.7],[0.775,12.2],[0.8,11.6],[0.825,11.0],[0.85,10.6],[0.875,10.1],[0.9,9.7],[0.925,9.3],[0.95,9.0],[0.975,8.6],[1.0,8.3],[1.025,8.0],[1.05,7.8],[1.075,7.5],[1.1,7.3],[1.125,7.1],[1.15,6.9],[1.175,6.7],[1.2,6.6],[1.225,6.4],[1.25,6.3],[1.275,6.2],[1.3,6.1],[1.325,6.0],[1.35,6.0],[1.375,5.9],[1.4,5.9],[1.425,5.9],[1.45,5.9],[1.475,5.8],[1.5,5.7]],[[0,50.4],[0.025,49.8],[0.05,48.8],[0.075,47.9],[0.1,46.8],[0.125,45.8],[0.15,44.9],[0.175,43.9],[0.2,42.9],[0.225,41.9],[0.25,40.9],[0.275,39.9],[0.3,38.9],[0.325,38.0],[0.35,37.0],[0.375,35.9],[0.4,35.0],[0.425,34.0],[0.45,33.0],[0.475,32.1],[0.5,31.1],[0.525,30.0],[0.55,29.0],[0.575,28.1],[0.6,27.1],[0.625,26.0],[0.65,25.1],[0.675,24.1],[0.7,23.2],[0.725,22.2],[0.75,21.4],[0.775,20.6],[0.8,19.8],[0.825,19.0],[0.85,18.3],[0.875,17.6],[0.9,17.0],[0.925,16.3],[0.95,15.7],[0.975,15.1],[1.0,14.6],[1.025,14.1],[1.05,13.6],[1.075,13.1],[1.1,12.6],[1.125,12.2],[1.15,11.8],[1.175,11.4],[1.2,11.0],[1.225,10.7],[1.25,10.4],[1.275,10.1],[1.3,9.8],[1.325,9.5],[1.35,9.3],[1.375,9.1],[1.4,8.9],[1.425,8.8],[1.45,8.7],[1.475,8.6],[1.5,8.6]],[[0,60.9],[0.025,60.3],[0.05,59.3],[0.075,58.4],[0.1,57.4],[0.125,56.3],[0.15,55.4],[0.175,54.4],[0.2,53.4],[0.225,52.5],[0.25,51.5],[0.275,50.4],[0.3,49.5],[0.325,48.5],[0.35,47.5],[0.375,46.5],[0.4,45.6],[0.425,44.5],[0.45,43.5],[0.475,42.6],[0.5,41.6],[0.525,40.5],[0.55,39.6],[0.575,38.6],[0.6,37.6],[0.625,36.6],[0.65,35.7],[0.675,34.6],[0.7,33.6],[0.725,32.7],[0.75,31.7],[0.775,30.7],[0.8,29.7],[0.825,28.7],[0.85,27.8],[0.875,26.8],[0.9,25.9],[0.925,25.0],[0.95,24.2],[0.975,23.3],[1.0,22.5],[1.025,21.7],[1.05,20.9],[1.075,20.2],[1.1,19.5],[1.125,18.8],[1.15,18.1],[1.175,17.4],[1.2,16.8],[1.225,16.2],[1.25,15.6],[1.275,15.1],[1.3,14.6],[1.325,14.1],[1.35,13.6],[1.375,13.2],[1.4,12.8],[1.425,12.4],[1.45,12.1],[1.475,11.8],[1.5,11.6]],[[0,70.5],[0.025,69.8],[0.05,68.8],[0.075,67.9],[0.1,66.9],[0.125,65.9],[0.15,65.0],[0.175,63.9],[0.2,62.9],[0.225,61.9],[0.25,61.0],[0.275,60.0],[0.3,58.9],[0.325,58.0],[0.35,57.0],[0.375,56.0],[0.4,55.1],[0.425,54.1],[0.45,53.0],[0.475,52.0],[0.5,51.1],[0.525,50.1],[0.55,49.0],[0.575,48.2],[0.6,47.1],[0.625,46.1],[0.65,45.2],[0.675,44.2],[0.7,43.1],[0.725,42.2],[0.75,41.2],[0.775,40.2],[0.8,39.2],[0.825,38.3],[0.85,37.2],[0.875,36.2],[0.9,35.3],[0.925,34.3],[0.95,33.3],[0.975,32.4],[1.0,31.4],[1.025,30.5],[1.05,29.6],[1.075,28.7],[1.1,27.8],[1.125,26.9],[1.15,26.1],[1.175,25.2],[1.2,24.4],[1.225,23.6],[1.25,22.8],[1.275,22.0],[1.3,21.2],[1.325,20.4],[1.35,19.7],[1.375,18.9],[1.4,18.2],[1.425,17.5],[1.45,16.8],[1.475,16.2],[1.5,15.7]],[[0.125,75.0],[0.15,73.9],[0.175,73.0],[0.2,72.0],[0.225,71.0],[0.25,70.0],[0.275,69.1],[0.3,68.0],[0.325,67.0],[0.35,66.1],[0.375,65.1],[0.4,64.1],[0.425,63.2],[0.45,62.1],[0.475,61.1],[0.5,60.1],[0.525,59.2],[0.55,58.2],[0.575,57.1],[0.6,56.2],[0.625,55.2],[0.65,54.2],[0.675,53.3],[0.7,52.2],[0.725,51.2],[0.75,50.2],[0.775,49.3],[0.8,48.3],[0.825,47.2],[0.85,46.3],[0.875,45.3],[0.9,44.3],[0.925,43.4],[0.95,42.4],[0.975,41.3],[1.0,40.3],[1.025,39.4],[1.05,38.4],[1.075,37.3],[1.1,36.5],[1.125,35.4],[1.15,34.4],[1.175,33.5],[1.2,32.5],[1.225,31.4],[1.25,30.5],[1.275,29.5],[1.3,28.5],[1.325,27.5],[1.35,26.6],[1.375,25.5],[1.4,24.5],[1.425,23.6],[1.45,22.6],[1.475,21.6],[1.5,20.7]]]};
const GRATES = {
  g300:   {label:"Odvodňovač 300 × 300", info:"Mriežka 300 × 300 mm, rám 330 × 330 mm.", a:"0,33", len:0.30, vlim:1.0, slots:["1","2","3","4","5"], curves:CURVES["1"]},
  g500x300:{label:"Odvodňovač 500 × 300", info:"Mriežka 300 × 500 mm (šírka × dĺžka), rám 330 × 530 mm.", a:"0,33", len:0.50, vlim:1.5, slots:["1–2","3–4","5–6","7–8"], curves:CURVES["2"]},
  g500:   {label:"Odvodňovač 500 × 500", info:"Mriežka 455 × 430 mm (šírka × dĺžka), rám 486 × 460 mm.", a:"0,486", len:0.43, vlim:1.5, slots:["1","2","3","4","5"], curves:CURVES["3"]}
};
const DEFAULTS = {typ:"g300", ppr:"2,5", ppd:"2,9", B:"1", a:"0,33", bobr:"0,025", n:"0,015",
  l:"156,4", sw:"18,4", lines:"1", q:"0,02", phi:"0,9", s:"2",
  dpot:"0,25", ipot:"2,9", npot:"0,014", fill:"66,65"};
const GROUPS = [
  {title:"Rigol a odvodňovač", fields:[
    {id:"typ", type:"select"},
    {id:"ppr", name:"Priečny sklon", sym:"P<sub>pr</sub>", unit:"%"},
    {id:"ppd", name:"Pozdĺžny sklon", sym:"P<sub>pd</sub>", unit:"%"},
    {id:"B", name:"Šírka rozliatia", sym:"B", unit:"m"},
    {id:"a", name:"Šírka rámu odvodňovača", sym:"a", unit:"m", fixed:true},
    {id:"bobr", name:"Vzdialenosť od obrubníka", sym:"b<sub>obr</sub>", unit:"m"},
    {id:"n", name:"Súčiniteľ drsnosti povrchu", sym:"n", unit:""}
  ]},
  {title:"Odvodňovaná plocha", fields:[
    {id:"l", name:"Dĺžka odvodňovanej plochy", sym:"l", unit:"m"},
    {id:"sw", name:"Šírka odvodňovanej plochy", sym:"š", unit:"m"},
    {id:"lines", name:"Počet línií odvodňovačov", sym:"n<sub>l</sub>", unit:"", int:true, hint:"Šírka š sa rozdelí rovnomerne medzi línie. Hodnota 1 zodpovedá výpočtovému listu."},
    {id:"q", name:"Intenzita dažďa (15 min)", sym:"q", unit:"l/s·m²"},
    {id:"phi", name:"Súčiniteľ odtoku", sym:"φ", unit:""},
    {id:"s", name:"Stupeň bezpečnosti", sym:"s", unit:""}
  ]},
  {title:"Zberné potrubie", fields:[
    {id:"dpot", name:"Vnútorný priemer", sym:"d<sub>pot</sub>", unit:"m"},
    {id:"ipot", name:"Sklon potrubia", sym:"i<sub>pot</sub>", unit:"%"},
    {id:"npot", name:"Drsnosť potrubia", sym:"n", unit:""},
    {id:"fill", name:"Plnenie potrubia", sym:"h/d", unit:"%", hint:"66,65 % zodpovedá stredovému uhlu 218,9° z výpočtového listu."}
  ]}
];
const STORE_KEY = "odvodnenie-mosta-v1";
let state = {...DEFAULTS};
try { const s = localStorage.getItem(STORE_KEY); if (s) state = {...DEFAULTS, ...JSON.parse(s)}; } catch(e) {}
if (!GRATES[state.typ]) state.typ = DEFAULTS.typ;
state.a = GRATES[state.typ].a;

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const parse = s => { if (s == null) return NaN; const t = String(s).trim().replace(/\s/g,"").replace(",", "."); return t === "" ? NaN : Number(t); };
const nf = (x, d) => Number.isFinite(x) ? x.toLocaleString("sk-SK", {minimumFractionDigits:d, maximumFractionDigits:d}) : "–";
const plain = html => html.replace(/<sub>(.*?)<\/sub>/g, "$1").replace(/<sup>(.*?)<\/sup>/g, "^$1").replace(/<[^>]+>/g, "");
function interp(pts, x){
  if (x <= pts[0][0]) return pts[0][1];
  const last = pts[pts.length-1];
  if (x >= last[0]) return last[1];
  for (let i = 1; i < pts.length; i++){
    if (x <= pts[i][0]){ const [x0,y0] = pts[i-1], [x1,y1] = pts[i]; return y0 + (y1-y0)*(x-x0)/(x1-x0); }
  }
  return last[1];
}
function niceStep(range, n){ const raw = range/n, mag = Math.pow(10, Math.floor(Math.log10(raw))), f = raw/mag; return (f<=1?1:f<=2?2:f<=2.5?2.5:f<=5?5:10)*mag; }
function niceMax(x, n){ const st = niceStep(x, n); return {max: Math.ceil(x/st)*st, step: st}; }
function range(a, b, st){ const out=[]; for (let v=a; v<=b+st*1e-6; v+=st) out.push(+v.toFixed(10)); return out; }

/* ---------- calculation ---------- */
function readParams(){
  const p = {typ: state.typ}; const bad = [];
  GROUPS.flatMap(g=>g.fields).filter(f=>f.type!=="select").forEach(f => {
    const v = parse(state[f.id]);
    p[f.id] = v;
    let ok = Number.isFinite(v) && v > 0;
    if (f.int) ok = ok && Number.isInteger(v);
    if (f.id === "fill") ok = ok && v <= 100;
    if (!ok) bad.push(f.id);
  });
  return {p, bad};
}
function calc(p){
  const r = {};
  const ppr = p.ppr/100, ppd = p.ppd/100;
  r.h = p.B*ppr; r.A = 0.5*p.B*r.h; r.O = p.B + r.h; r.R = r.A/r.O;
  r.C = Math.pow(r.R, 1/6)/p.n;
  r.v = r.C*Math.sqrt(r.R*ppd);
  r.Q = r.A*r.v*1000;
  r.vs = r.v*1.15;
  r.h1 = (p.B - p.bobr - p.a/2)*ppr;
  r.k = 5/r.v; r.kh1 = r.k*r.h1;
  r.a1 = r.kh1 + p.a + Math.min(p.bobr, r.kh1);
  r.hp = (p.B - r.a1/2)*ppr;
  r.A1 = r.a1*r.hp;
  r.Hod = r.A1*r.v*1000;
  const g = GRATES[p.typ];
  if (g.curves){
    r.vlim = g.vlim;
    const top = g.curves[g.curves.length-1];
    r.hmax = interp(top, Math.min(r.vs, g.vlim));
    r.slot = null;
    for (let i = 0; i < g.curves.length; i++){ if (r.h1*1000 <= interp(g.curves[i], Math.min(r.vs, g.vlim)) + 1e-9){ r.slot = g.slots[i]; break; } }
  } else { r.vlim = null; r.hmax = p.hmaxManual; r.slot = null; }
  r.okH = r.h1*1000 <= r.hmax + 1e-9;
  r.okV = r.vlim == null || r.vs <= r.vlim + 1e-9;
  r.Fm = p.l*p.sw; r.QM = r.Fm*p.q*p.phi;
  r.swl = p.sw/p.lines;
  r.Lodv = r.Hod/(p.q*r.swl*p.phi*p.s);
  r.nodv = Math.ceil(p.l/r.Lodv - 1e-9);
  r.ntot = r.nodv*p.lines;
  r.Lreal = p.l/r.nodv;
  Object.assign(r, pipe(p, p.fill));
  r.okP = r.Qp >= r.QM;
  return r;
}
function pipe(p, fillPct){
  const th = 2*Math.acos(1 - 2*fillPct/100);
  const S = p.dpot*p.dpot/8*(th - Math.sin(th));
  const Op = p.dpot/2*th, Rp = S/Op;
  const cp = (1/p.npot)*Math.pow(Rp, 1/6);
  const vp = cp*Math.sqrt(Rp*p.ipot/100);
  return {theta: th*180/Math.PI, Sp: S, Op, Rp, cp, vp, Qp: S*vp*1000};
}

/* ---------- svg helpers ---------- */
function frame(o){
  const {W,H,ml,mr,mt,mb,x0,x1,y0,y1} = o;
  const sx = v => ml + (v-x0)/(x1-x0)*(W-ml-mr);
  const sy = v => H - mb - (v-y0)/(y1-y0)*(H-mt-mb);
  let s = "";
  o.yt.forEach(t => { s += `<line class="grid" x1="${ml}" x2="${W-mr}" y1="${sy(t).toFixed(1)}" y2="${sy(t).toFixed(1)}"/><text class="tick" x="${ml-8}" y="${(sy(t)+4).toFixed(1)}" text-anchor="end">${o.fy(t)}</text>`; });
  o.xt.forEach(t => { s += `<line class="grid" y1="${mt}" y2="${H-mb}" x1="${sx(t).toFixed(1)}" x2="${sx(t).toFixed(1)}"/><text class="tick" y="${H-mb+18}" x="${sx(t).toFixed(1)}" text-anchor="middle">${o.fx(t)}</text>`; });
  s += `<line class="axis" x1="${ml}" x2="${W-mr}" y1="${H-mb}" y2="${H-mb}"/><line class="axis" x1="${ml}" x2="${ml}" y1="${mt}" y2="${H-mb}"/>`;
  s += `<text class="axlab" x="${ml+(W-ml-mr)/2}" y="${H-8}" text-anchor="middle">${o.xl}</text>`;
  s += `<text class="axlab" transform="translate(15 ${mt+(H-mt-mb)/2}) rotate(-90)" text-anchor="middle">${o.yl}</text>`;
  return {sx, sy, s};
}
const sb = (b, s, rest) => `${b}<tspan dy="3" font-size="0.78em">${s}</tspan><tspan dy="-3">${rest}</tspan>`;
const pathOf = (pts, sx, sy) => pts.map((p,i)=>(i?"L":"M")+sx(p[0]).toFixed(1)+" "+sy(p[1]).toFixed(1)).join("");

/* ---------- animation ---------- */
const anim = {p:null, r:null, parts:[], step:"all", speed:1, playing:true, visible:true, last:0, spawnAcc:0, cap:0, pass:0, statT:0, W:0, H:0, dpr:1, key:""};
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) anim.playing = false;
const cv = $("animcv"), ctx = cv.getContext("2d");
function cssv(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function animResize(){
  const w = cv.parentElement.clientWidth || 600;
  const h = Math.round(Math.min(380, Math.max(250, w*0.44)));
  anim.dpr = window.devicePixelRatio || 1;
  cv.width = Math.round(w*anim.dpr); cv.height = Math.round(h*anim.dpr); cv.style.height = h + "px";
  anim.W = w; anim.H = h; anim.parts = []; anim.key = "";
}
function animGeo(){
  const {p, r, W, H} = anim;
  const top = 36, bottom = 50;
  const s = (H - top - bottom)/(p.B*1.16);
  const len = GRATES[p.typ].len || p.a;
  const gx0 = Math.round(W*0.56), gx1 = gx0 + len*s;
  const dL = Math.max(0, p.bobr - Math.min(p.bobr, r.kh1)), dR = Math.min(p.B, p.bobr + p.a + r.kh1);
  const approach = Math.max(0.25, r.kh1*2.2)*s;
  return {top, s, len, gx0, gx1, dL, dR, approach, Y: y => top + y*s};
}
function spawn(g, x){
  const {p, r} = anim;
  const y0 = p.B*(1 - Math.sqrt(Math.random()));       // hustota úmerná hĺbke vody
  const inZone = y0 >= g.dL && y0 <= g.dR;
  let over = false;
  if (inZone && !r.okH) over = Math.random() < Math.min(0.6, (r.h1*1000 - r.hmax)/(r.h1*1000)*1.3);
  return {x, y0, y:y0, cap: inZone && !over, over, drop: 0.15 + Math.random()*0.75, jit: 0.9 + Math.random()*0.2, fall: -1, rad: 1.5 + Math.random()*1.1};
}
function stepParticles(dt, g){
  const {r} = anim;
  const vpx = r.v*g.s;
  const rate = Math.min(260, Math.max(25, r.Q*14));
  anim.spawnAcc += rate*dt;
  while (anim.spawnAcc >= 1){ anim.parts.push(spawn(g, -4 - Math.random()*vpx*dt)); anim.spawnAcc -= 1; }
  const yIn = anim.p.bobr, yOut = anim.p.bobr + anim.p.a;
  const out = [];
  for (const q of anim.parts){
    if (q.fall >= 0){ q.fall += dt; if (q.fall < 0.35) out.push(q); continue; }
    q.x += vpx*q.jit*dt;
    if (q.cap){
      const target = Math.min(yOut - 0.01, Math.max(yIn + 0.01, q.y0));
      const xs = g.gx0 - g.approach, xe = g.gx0 + q.drop*(g.gx1 - g.gx0);
      const t = Math.min(1, Math.max(0, (q.x - xs)/(xe - xs)));
      const e = t*t*(3 - 2*t);
      q.y = q.y0 + (target - q.y0)*e;
      if (q.x >= xe){ q.fall = 0; anim.cap++; }
    } else if (q.over && q.x > g.gx0 && q.x < g.gx1){
      q.y = q.y0 + Math.sin((q.x - g.gx0)/(g.gx1 - g.gx0)*Math.PI)*0.004;
    }
    if (q.x > anim.W + 6){ anim.pass++; continue; }
    out.push(q);
  }
  anim.parts = out;
}
function seedParticles(g){
  anim.parts = []; anim.spawnAcc = 0;
  const T = (anim.W + 10)/(anim.r.v*g.s);
  for (let t = 0; t < T; t += 0.04) stepParticles(0.04, g);
  anim.cap = 0; anim.pass = 0;
}
function arrow(x1, y1, x2, y2, col){
  ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - 8*Math.cos(a - 0.4), y2 - 8*Math.sin(a - 0.4)); ctx.lineTo(x2 - 8*Math.cos(a + 0.4), y2 - 8*Math.sin(a + 0.4)); ctx.closePath(); ctx.fill();
}
function label(t, x, y, col, align="left", weight=600, size=12.5){
  ctx.font = `${weight} ${size}px "Barlow Semi Condensed", "Barlow", Arial, sans-serif`;
  ctx.textAlign = align; ctx.textBaseline = "middle";
  ctx.lineWidth = 4; ctx.strokeStyle = anim.col.surface; ctx.lineJoin = "round"; ctx.strokeText(t, x, y);
  ctx.fillStyle = col; ctx.fillText(t, x, y);
}
function vbracket(x, y1, y2, col){
  ctx.strokeStyle = col; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.moveTo(x - 4, y1); ctx.lineTo(x + 4, y1); ctx.moveTo(x - 4, y2); ctx.lineTo(x + 4, y2); ctx.stroke();
}
function drawAnim(){
  const {p, r, W, H, dpr, step} = anim;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const c = anim.col;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = c.surface; ctx.fillRect(0, 0, W, H);
  const g = animGeo();
  const yB = g.Y(p.B);
  // deck
  ctx.fillStyle = c.deck; ctx.fillRect(0, g.top, W, H - g.top);
  // water with depth gradient
  const gr = ctx.createLinearGradient(0, g.top, 0, yB);
  gr.addColorStop(0, c.waterDeep); gr.addColorStop(1, c.waterShallow);
  ctx.fillStyle = gr; ctx.fillRect(0, g.top, W, yB - g.top);
  // spread edge
  ctx.setLineDash([5, 4]); ctx.strokeStyle = c.water; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(0, yB); ctx.lineTo(W, yB); ctx.stroke(); ctx.setLineDash([]);
  // zone a1
  const zoneStrong = step === "2" || step === "3";
  ctx.fillStyle = c.zone; ctx.globalAlpha = zoneStrong ? 1 : (step === "all" ? 0.6 : 0.25);
  ctx.fillRect(0, g.Y(g.dL), g.gx1, g.Y(g.dR) - g.Y(g.dL));
  ctx.globalAlpha = 1;
  if (step !== "1" && step !== "4"){
    ctx.setLineDash([3, 3]); ctx.strokeStyle = c.water; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, g.Y(g.dR)); ctx.lineTo(g.gx1, g.Y(g.dR)); ctx.stroke(); ctx.setLineDash([]);
  }
  // side inflow bands (k·h1)
  if (step === "2"){
    ctx.fillStyle = c.hatch;
    ctx.fillRect(g.gx0 - g.approach, g.Y(p.bobr + p.a), g.gx1 - g.gx0 + g.approach, g.Y(g.dR) - g.Y(p.bobr + p.a));
    if (p.bobr > g.dL) ctx.fillRect(g.gx0 - g.approach, g.Y(g.dL), g.gx1 - g.gx0 + g.approach, g.Y(p.bobr) - g.Y(g.dL));
    const ym = g.Y((p.bobr + p.a + g.dR)/2);
    arrow(g.gx0 - g.approach*0.9, ym, g.gx0 + (g.gx1 - g.gx0)*0.35, g.Y(p.bobr + p.a) + 3, c.ink);
  }
  // curb
  ctx.fillStyle = c.curb; ctx.fillRect(0, 0, W, g.top);
  ctx.strokeStyle = c.asphalt; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, g.top); ctx.lineTo(W, g.top); ctx.stroke();
  label("obrubník", 10, g.top/2, c.muted, "left", 500, 12);
  // grate
  const gy0 = g.Y(p.bobr), gy1 = g.Y(p.bobr + p.a);
  ctx.fillStyle = c.grate; ctx.fillRect(g.gx0, gy0, g.gx1 - g.gx0, gy1 - gy0);
  ctx.strokeStyle = c.surface; ctx.lineWidth = 1.4;
  const nb = Math.max(4, Math.round(g.len/0.035));
  for (let i = 1; i < nb; i++){ const x = g.gx0 + (g.gx1 - g.gx0)*i/nb; ctx.beginPath(); ctx.moveTo(x, gy0 + 3); ctx.lineTo(x, gy1 - 3); ctx.stroke(); }
  ctx.strokeStyle = r.okH ? c.asphalt : c.bad; ctx.lineWidth = r.okH ? 1.5 : 2.5; ctx.strokeRect(g.gx0, gy0, g.gx1 - g.gx0, gy1 - gy0);
  // particles
  for (const q of anim.parts){
    let alpha = 0.9;
    if (step === "3" && !q.cap) alpha = 0.18;
    if (step === "4" && q.cap) alpha = 0.15;
    if (step === "5" && !q.cap && !q.over) alpha = 0.3;
    let rad = q.rad, hop = 0;
    if (q.over && q.x > g.gx0 - 6 && q.x < g.gx1 + 6){ const t = (q.x - g.gx0 + 6)/(g.gx1 - g.gx0 + 12); hop = Math.sin(t*Math.PI)*7; rad *= 1.45; }
    if (q.fall >= 0){ const k = 1 - q.fall/0.35; alpha *= k; rad *= 0.4 + 0.6*k; }
    ctx.globalAlpha = alpha;
    ctx.fillStyle = q.cap ? c.water : (q.over ? (q.x > g.gx0 - 6 ? c.bad : c.water) : c.pass);
    ctx.beginPath(); ctx.arc(q.x, g.Y(q.y) - hop, rad, 0, Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  // dimensions
  vbracket(14, g.top, yB, c.ink);
  label(`B = ${nf(p.B,2)} m`, 22, g.Y(p.B*0.75), step === "1" ? c.water : c.ink);
  const bx = Math.min(W - 90, g.gx1 + 22);
  if (step !== "5"){
    vbracket(bx, g.Y(g.dL), g.Y(g.dR), c.water);
    label(`a₁ = ${nf(r.a1,3)} m`, bx + 8, (g.Y(g.dL) + g.Y(g.dR))/2, c.water);
  }
  if (step === "2"){
    label(`k·h₁ = ${nf(r.kh1,3)} m`, g.gx0 - g.approach, g.Y(g.dR) + 14, c.ink, "left");
    label(`mriežka a = ${nf(p.a,2)} m`, g.gx0 - 8, (gy0 + gy1)/2, c.ink, "right");
  }
  if (step === "1"){
    label(`h = ${nf(r.h*1000,1)} mm pri obrubníku`, W*0.2, g.top + 14, c.ink, "left");
    label("okraj rozliatia, h = 0", W*0.2, yB + 14, c.water, "left", 600, 12);
  }
  if (step === "3" || step === "all"){
    label(`H od = ${nf(r.Hod,2)} l/s`, (g.gx0 + g.gx1)/2, Math.min(H - 60, g.Y(g.dR) + 16), c.water, "center");
  }
  if (step === "4"){
    arrow(g.gx1 + 20, yB - (yB - g.Y(g.dR))/2, W - 12, yB - (yB - g.Y(g.dR))/2, c.ink);
    label(`k ďalšiemu odvodňovaču, ${nf(r.Lodv,2)} m`, W - 14, yB - (yB - g.Y(g.dR))/2 - 14, c.ink, "right");
  }
  if (step === "5" && anim.demo) label(`modelový prípad: ${anim.demo.what === "ppd" ? `P pd = ${nf(p.ppd,1)} %` : `B = ${nf(p.B,2)} m`}`, W - 10, g.top/2, c.ink, "right");
  if (!r.okH) label("h₁ > h max: mriežka je preťažená, časť vody pretečie", step === "5" && anim.demo ? Math.min(g.gx1, W - 190) : g.gx1, g.top/2, c.bad, "right");
  if (step === "5" && !r.okH){
    const ym = g.Y(Math.min(p.bobr + p.a*0.5, g.dR));
    arrow(g.gx1 + 8, ym, Math.min(W - 16, g.gx1 + 130), ym, c.bad);
    label("pretečie ďalej", Math.min(W - 16, g.gx1 + 130), ym + 14, c.bad, "right");
  }
  if (step === "5" && !r.okV) label(`v′ = ${nf(r.vs,2)} m/s > ${nf(r.vlim,1)} m/s, mimo grafu`, g.gx0, H - 40, c.bad, "left");
  // flow arrow
  const fy = H - 22;
  const narrow = W < 560, ax0 = narrow ? 14 : W*0.30;
  arrow(ax0, fy, ax0 + 50, fy, c.muted);
  label(narrow ? `smer toku, v = ${nf(r.v,2)} m/s` : `smer toku, P pd = ${nf(p.ppd,2)} %, v = ${nf(r.v,2)} m/s`, ax0 + 60, fy, c.muted, "left", 500, 12);
  if (!narrow) label(`mierka 1 m = ${nf(g.s,0)} px`, W - 10, fy, c.muted, "right", 500, 11.5);
}
function animStats(){
  const {r} = anim, tot = anim.cap + anim.pass;
  const meas = tot > 40 ? `${nf(anim.cap/tot*100,0)} %` : "…";
  $("animstats").innerHTML = [
    ["Prietok v rigole Q", nf(r.Q,2), "l/s"],
    ["Zachytí odvodňovač H<sub>od</sub>", nf(r.Hod,2), "l/s"],
    ["Obteká Q − H<sub>od</sub>", nf(r.Q - r.Hod,2), "l/s"],
    ["Podiel zachytenia H<sub>od</sub>/Q", nf(r.Hod/r.Q*100,1), "%"],
    [anim.r.okH ? "Zachytené kvapky v animácii" : "Zachytené kvapky (ilustračne, časť pretečie)", meas, ""]
  ].map(x => anim.demo ? [x[0] + " (model)", x[1], x[2]] : x).map(x => `<div><div class="lab">${x[0]}</div><div class="big">${x[1]}<small>${x[2]}</small></div></div>`).join("");
}
function animText(){
  const {p, r, step} = anim;
  const sw = p.lines > 1 ? "š<sub>l</sub>" : "š";
  const inflow = p.q*r.swl*p.phi*r.Lodv;
  const T = {
    all: `Voda tečie rigolom priemernou rýchlosťou v = ${nf(r.v,2)} m/s. Modré kvapky z pásu a<sub>1</sub> skončia v odvodňovači, sivé ho obtečú.`,
    "5": "",
    "1": `Priečny sklon P<sub>pr</sub> = ${nf(p.ppr,2)} % ženie vodu k obrubníku, kde je najhlbšia (h = ${nf(r.h*1000,1)} mm). Rozlieva sa do šírky B = ${nf(p.B,2)} m a smerom od obrubníka plytčie, preto je tam menej kvapiek. Celkový prietok v rigole je Q = A · v = ${nf(r.Q,2)} l/s.`,
    "2": `Mriežka nezachytí len vodu, ktorá tečie priamo nad ňou. Pred odvodňovačom sa voda stáča do strán, odvodňovač tak „dosiahne“ aj pás vedľa mriežky so šírkou k · h<sub>1</sub> = ${nf(r.kh1,3)} m (k = 5/v = ${nf(r.k,2)}). Spolu s mriežkou a pásom pri obrubníku vzniká spolupôsobiaca šírka a<sub>1</sub> = ${nf(r.a1,3)} m.`,
    "3": `Všetka voda z pásu a<sub>1</sub> vtečie do odvodňovača: H<sub>od</sub> = A<sub>1</sub> · v = ${nf(r.Hod,2)} l/s, čo je ${nf(r.Hod/r.Q*100,1)} % prietoku v rigole. ` + (r.okH ? `Platí to len vtedy, ak mriežka vodu stihne pohltiť. To overuje podmienka h<sub>1</sub> = ${nf(r.h1*1000,1)} mm ≤ h<sub>max</sub> = ${nf(r.hmax,1)} mm z grafu výrobcu, ktorá je splnená.` : `Podmienka h<sub>1</sub> = ${nf(r.h1*1000,1)} mm ≤ h<sub>max</sub> = ${nf(r.hmax,1)} mm však splnená nie je, mriežka je preťažená a časť vody pretečie ponad štrbiny (v animácii červenou, len ilustračne). Hodnotu H<sub>od</sub> v takom prípade nemožno považovať za zaručenú.`),
    "4": `Voda mimo pásu a<sub>1</sub>, teda Q − H<sub>od</sub> = ${nf(r.Q - r.Hod,2)} l/s, obteká odvodňovač a pokračuje k ďalšiemu. Odvodňovače sú od seba L<sub>odv</sub> = ${nf(r.Lodv,2)} m. Z tejto dĺžky pritečie q · ${sw} · φ · L<sub>odv</sub> = ${nf(inflow,2)} l/s, čo je H<sub>od</sub>/s. Zvyšok hltnosti je rezerva stupňa bezpečnosti s = ${nf(p.s,1)}.`
  };
  $("steptext").innerHTML = step === "5" ? failText() : `<p>${T[step]}</p>`;
}
function findDemo(p){
  const start = Math.round(p.ppd*10)/10 + 0.1;
  for (let x = start; x <= 15.001; x += 0.1){
    const r = calc({...p, ppd:x});
    if (!r.okV) break;
    if (!r.okH){
      let best = x;
      for (let y = x + 0.1; y <= x + 0.8; y += 0.1){ const ry = calc({...p, ppd:y}); if (ry.okV && !ry.okH) best = y; else break; }
      const pp = {...p, ppd: +best.toFixed(1)};
      return {p:pp, r:calc(pp), what:"ppd"};
    }
  }
  for (let b = p.B + 0.05; b <= p.B*4; b += 0.05){
    const pp = {...p, B:+b.toFixed(2)}, r = calc(pp);
    if (!r.okV) break;
    if (!r.okH){ const pb = {...p, B:+(b + 0.15).toFixed(2)}, rb = calc(pb); return (rb.okV && !rb.okH) ? {p:pb, r:rb, what:"B"} : {p:pp, r, what:"B"}; }
  }
  return null;
}
function remedies(p, r){
  const out = [];
  let Bok = null;
  for (let b = p.B - 0.01; b > p.bobr + p.a/2 + 0.02; b -= 0.01){ const rr = calc({...p, B:b}); if (rr.okH && rr.okV){ Bok = {b, rr}; break; } }
  if (Bok) out.push(`<b>Zmenšiť návrhovú šírku rozliatia na B ≤ ${nf(Bok.b,2)} m.</b> Hĺbka v osi odvodňovača klesne na h<sub>1</sub> = ${nf(Bok.rr.h1*1000,1)} mm a mriežka vodu pohltí. Odvodňovač zachytí menej (H<sub>od</sub> = ${nf(Bok.rr.Hod,2)} l/s), preto ich treba osadiť hustejšie: L<sub>odv</sub> = ${nf(Bok.rr.Lodv,2)} m, min. ${Bok.rr.nodv} ks v línii.`);
  ["g300","g500x300","g500"].filter(k => k !== p.typ).forEach(k => {
    const pk = {...p, typ:k, a: parse(GRATES[k].a)}, rk = calc(pk);
    if (rk.okH && rk.okV) out.push(`<b>Použiť ${GRATES[k].label.toLowerCase()}</b> (a = ${GRATES[k].a} m). Pri v′ = ${nf(rk.vs,2)} m/s pohltí vodu do h<sub>max</sub> = ${nf(rk.hmax,1)} mm, H<sub>od</sub> = ${nf(rk.Hod,2)} l/s, L<sub>odv</sub> = ${nf(rk.Lodv,2)} m.`);
  });
  if (!r.okV) out.push(`<b>Overiť hltnosť u výrobcu.</b> Graf končí pri v′ = ${nf(r.vlim,1)} m/s, pre vyššiu rýchlosť výpočet nemá podklad.`);
  if (p.ppd > 0) out.push(`Pri moste s premenlivým sklonom posúď úseky s najväčším sklonom samostatne. Graf vzdialenosti podľa pozdĺžneho sklonu v kroku 2 ukazuje, od akého sklonu odvodňovač prestáva vyhovovať.`);
  return out;
}
function failText(){
  const {p, r, demo, realP} = anim;
  const g = GRATES[p.typ];
  let head = "";
  if (demo){
    head = `<p class="demo">Tvoj návrh vyhovuje, preto animácia ukazuje <b>modelový prípad</b>: rovnaké vstupy, len ${demo.what === "ppd" ? `pozdĺžny sklon P<sub>pd</sub> = ${nf(p.ppd,1)} % namiesto ${nf(realP.ppd,1)} %` : `šírka rozliatia B = ${nf(p.B,2)} m namiesto ${nf(realP.B,2)} m`}.</p>`;
  } else if (r.okH && r.okV){
    return `<p>Pre zadané vstupy odvodňovač vyhovuje a modelový nevyhovujúci prípad sa nenašiel. Odvodňovač nevyhovuje vtedy, keď je voda v osi mriežky hlbšia, než koľko mriežka pri danej rýchlosti stihne pohltiť (h<sub>1</sub> &gt; h<sub>max</sub>), alebo keď je rýchlosť v′ mimo rozsahu grafu výrobcu.</p>`;
  } else {
    head = `<p class="demo bad">Tvoj návrh <b>nevyhovuje</b>, animácia ukazuje, čo sa na moste deje.</p>`;
  }
  let body = "";
  if (!r.okH){
    const ex = r.h1*1000 - r.hmax, gmax = Math.max(r.h1*1000, r.hmax)*1.15;
    body += `<div class="gauge" aria-hidden="true"><div class="gbar"><span class="gfill" style="width:${(r.h1*1000/gmax*100).toFixed(1)}%"></span><span class="gmark" style="left:${(r.hmax/gmax*100).toFixed(1)}%"></span></div><div class="glab"><span>h<sub>1</sub> = ${nf(r.h1*1000,1)} mm</span><span>h<sub>max</sub> = ${nf(r.hmax,1)} mm${g.curves ? ` pri v′ = ${nf(r.vs,2)} m/s` : ""}</span><span class="b">prekročenie ${nf(ex,1)} mm</span></div></div>`;
    body += `<p><b>Čo sa deje.</b> Štrbiny mriežky stihnú pohltiť vodu len do určitej hĺbky. ${g.curves ? `Táto hranica klesá s rýchlosťou: rýchlejšia voda štrbiny „preskakuje“, preto pri v′ = ${nf(r.vs,2)} m/s je h<sub>max</sub> len ${nf(r.hmax,1)} mm.` : `Pre zvolený odvodňovač je to h<sub>max</sub> = ${nf(r.hmax,1)} mm.`} V osi odvodňovača je však voda hlboká h<sub>1</sub> = ${nf(r.h1*1000,1)} mm. Horná vrstva vody preto pretečie ponad mriežku (červené kvapky) a odvodňovač zachytí menej než vypočítaných H<sub>od</sub> = ${nf(r.Hod,2)} l/s. Výpočet vzdialenosti L<sub>odv</sub> = ${nf(r.Lodv,2)} m tak stojí na hodnote, ktorú mriežka v skutočnosti nedosiahne.</p>`;
    body += `<p><b>Prečo je to problém.</b> Pretečená voda sa pridá k obtoku, k ďalšiemu odvodňovaču priteká viac vody, rozliatie tam prekročí návrhovú šírku B a voda zasahuje ďalej do jazdného pruhu. Efekt sa reťazí po dĺžke mosta a voda sa hromadí pri nižšom konci, v prechodovej oblasti a pri mostnom závere.</p>`;
  }
  if (!r.okV){
    body += `<p><b>Rýchlosť mimo grafu.</b> Povrchová rýchlosť v′ = ${nf(r.vs,2)} m/s je väčšia ako ${nf(r.vlim,1)} m/s, kde graf výrobcu končí. Hodnotu h<sub>max</sub> nemožno odčítať, aplikácia ju berie z konca krivky, čo nie je overené.</p>`;
  }
  const rem = remedies(p, r);
  body += `<p><b>Ako to riešiť${demo ? " v tomto modelovom prípade" : ""}:</b></p><ul class="remedy">${rem.map(x => `<li>${x}</li>`).join("")}</ul>`;
  return head + body;
}
function activeSet(){
  const p = anim.realP, r = anim.realR;
  anim.demo = (anim.step === "5" && r.okH && r.okV) ? findDemo(p) : null;
  anim.p = anim.demo ? anim.demo.p : p;
  anim.r = anim.demo ? anim.demo.r : r;
  const key = JSON.stringify([anim.p.B, anim.p.a, anim.p.bobr, anim.p.ppr, anim.p.ppd, anim.p.n, anim.p.typ]);
  if (key !== anim.key && anim.W){ anim.key = key; seedParticles(animGeo()); }
}
function animUpdate(p, r){
  anim.realP = p; anim.realR = r;
  anim.col = {surface:cssv("--surface"), ink:cssv("--ink"), muted:cssv("--muted"), water:cssv("--water"), bad:cssv("--bad"), asphalt:cssv("--asphalt"),
    deck:cssv("--deck"), curb:cssv("--concrete-dark"), grate:cssv("--asphalt"), waterDeep:cssv("--water-deep"), waterShallow:cssv("--water-shallow"),
    zone:cssv("--zone"), hatch:cssv("--water-fill"), pass:cssv("--pass")};
  activeSet();
  animText(); animStats();
  if (!anim.playing) drawAnim();
}
function animLoop(ts){
  requestAnimationFrame(animLoop);
  if (!anim.p || !anim.playing || !anim.visible || document.hidden){ anim.last = ts; return; }
  const dt = Math.min(0.05, (ts - (anim.last || ts))/1000)*anim.speed;
  anim.last = ts;
  const g = animGeo();
  stepParticles(dt, g);
  drawAnim();
  anim.statT += dt/anim.speed;
  if (anim.statT > 0.6){ anim.statT = 0; animStats(); }
}
function setupAnim(){
  animResize();
  if (window.ResizeObserver) new ResizeObserver(() => { const w = cv.parentElement.clientWidth; if (Math.abs(w - anim.W) > 2){ animResize(); if (anim.realP){ anim.key = ""; animUpdate(anim.realP, anim.realR); drawAnim(); } } }).observe(cv.parentElement);
  if (window.IntersectionObserver) new IntersectionObserver(es => { anim.visible = es[0].isIntersecting; }).observe(cv);
  if (window.matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (anim.realP){ animUpdate(anim.realP, anim.realR); drawAnim(); } });
  requestAnimationFrame(animLoop);
}

let crossLast = null;
function renderCross(p, r){
  crossLast = [p, r];
  const cw = $("cross").clientWidth;
  const W = Math.round(Math.max(300, Math.min(720, cw || 720))), H = 296, narrow = W < 480, curbX = W - (narrow ? 134 : 164), left = narrow ? 12 : 30;
  const dMax = p.B*1.14;
  const hs = (curbX-left)/dMax;
  const ppr = p.ppr/100;
  const zMax = dMax*ppr;
  const vs = 105/Math.max(zMax, 1e-6);
  const baseY = 236;
  const X = d => curbX - d*hs, Y = z => baseY - z*vs;
  const exag = vs/hs;
  let s = `<defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="var(--water-hatch)" stroke-width="2"/></pattern></defs>`;
  // slab
  s += `<polygon class="slab" points="${X(dMax)},${Y(zMax)} ${curbX},${Y(0)} ${curbX},${baseY+44} ${X(dMax)},${Y(zMax)+44}"/>`;
  // drain body
  const dIn = p.bobr, dOut = p.bobr + p.a;
  const dbx = X(dOut), dbw = X(dIn) - X(dOut);
  const dbB = baseY + 50;
  s += `<polygon class="drain" points="${dbx},${Y(dOut*ppr)} ${dbx+dbw},${Y(dIn*ppr)} ${dbx+dbw},${dbB} ${dbx},${dbB}"/>`;
  s += `<line class="drain" x1="${dbx}" y1="${Y(dOut*ppr)}" x2="${dbx+dbw}" y2="${dbB}"/><line class="drain" x1="${dbx+dbw}" y1="${Y(dIn*ppr)}" x2="${dbx}" y2="${dbB}"/>`;
  // curb
  s += `<rect class="curb" x="${curbX}" y="${Y(p.B*ppr)-34}" width="36" height="${baseY+44-(Y(p.B*ppr)-34)}"/>`;
  // water
  s += `<polygon class="waterp" points="${X(p.B)},${Y(r.h)} ${curbX},${Y(r.h)} ${curbX},${Y(0)}"/>`;
  // a1 hatch
  const dL = Math.max(0, p.bobr - Math.min(p.bobr, r.kh1)), dR = Math.min(p.B, p.bobr + p.a + r.kh1);
  if (dR > dL) s += `<polygon fill="url(#hatch)" points="${X(dR)},${Y(r.h)} ${X(dL)},${Y(r.h)} ${X(dL)},${Y(dL*ppr)} ${X(dR)},${Y(dR*ppr)}"/>`;
  // road surface
  s += `<polyline class="road" points="${X(dMax)},${Y(zMax)} ${curbX},${Y(0)}"/>`;
  s += `<line class="grate" x1="${X(dOut)}" y1="${Y(dOut*ppr)}" x2="${X(dIn)}" y2="${Y(dIn*ppr)}"/>`;
  // dimension lines
  const dim = (xa, xb, y, txt, cls="") => {
    const a = Math.min(xa,xb), b = Math.max(xa,xb);
    let t = `<line class="dim" x1="${a}" x2="${b}" y1="${y}" y2="${y}"/><line class="dim" x1="${a}" x2="${a}" y1="${y-5}" y2="${y+5}"/><line class="dim" x1="${b}" x2="${b}" y1="${y-5}" y2="${y+5}"/>`;
    t += `<line class="dim" x1="${a-3}" x2="${a+3}" y1="${y+3}" y2="${y-3}"/><line class="dim" x1="${b-3}" x2="${b+3}" y1="${y+3}" y2="${y-3}"/>`;
    if (txt) t += `<text class="dimtxt ${cls}" x="${(a+b)/2}" y="${y-6}" text-anchor="middle">${txt}</text>`;
    return t;
  };
  s += dim(X(p.B), curbX, 22, `B = ${nf(p.B,2)} m`);
  s += dim(X(dR), X(dL), 52, `a₁ = ${nf(r.a1,3)} m`, "w");
  const yr = 82;
  if (r.kh1 > 0) s += dim(X(dR), X(dOut), yr, (X(dOut)-X(dR) > 70) ? `k·h₁ = ${nf(r.kh1,3)}` : "k·h₁");
  s += dim(X(dOut), X(dIn), yr, (dbw > 56) ? `a = ${nf(p.a,3)}` : "a");
  if (p.bobr > 0){
    s += dim(X(dIn), curbX, yr + 26, "");
    s += `<text class="dimtxt" x="${X(dIn)-8}" y="${yr+30}" text-anchor="end">${sb("b","obr",` = ${nf(p.bobr,3)}`)}</text>`;
  }
  // extension lines
  [X(p.B), curbX].forEach(x => s += `<line class="dim" x1="${x}" x2="${x}" y1="16" y2="${x===curbX?Y(p.B*ppr)-34:Y(r.h)}" stroke-dasharray="2 3"/>`);
  [X(dR), X(dL)].forEach(x => s += `<line class="dim" x1="${x}" x2="${x}" y1="46" y2="${Y(r.h)}" stroke-dasharray="2 3"/>`);
  [X(dOut), X(dIn)].forEach(x => s += `<line class="dim" x1="${x}" x2="${x}" y1="${yr-6}" y2="${Y(r.h)}" stroke-dasharray="2 3"/>`);
  // vertical h at curb
  const vx = curbX + (narrow ? 44 : 56);
  s += `<line class="dim" x1="${vx}" x2="${vx}" y1="${Y(r.h)}" y2="${Y(0)}"/><line class="dim" x1="${curbX+36}" x2="${vx+5}" y1="${Y(r.h)}" y2="${Y(r.h)}"/><line class="dim" x1="${curbX+36}" x2="${vx+5}" y1="${Y(0)}" y2="${Y(0)}"/>`;
  s += `<text class="dimtxt w" x="${vx+8}" y="${(Y(r.h)+Y(0))/2+4}">h = ${nf(r.h*1000,1)} mm</text>`;
  // h1 at drain axis
  const ax = X(p.bobr + p.a/2), zAx = (p.bobr + p.a/2)*ppr;
  s += `<line stroke="var(--water)" stroke-width="1.6" x1="${ax}" x2="${ax}" y1="${Y(r.h)}" y2="${Y(zAx)}"/>`;
  s += `<text class="dimtxt w" x="${ax}" y="${Y(r.h)-8}" text-anchor="middle">h₁ = ${nf(r.h1*1000,1)} mm</text>`;
  // slope note
  s += `<text class="small" x="${X(dMax)+4}" y="${narrow ? Y(zMax)+62 : Y(zMax)-10}">${sb("P","pr",` = ${nf(p.ppr,2)} %  →`)}</text>`;
  $("cross").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Priečny rez rigolom s rozliatím vody">${s}</svg>`;
  $("crosscap").innerHTML = `Voda sa rozlieva do šírky <b>B = ${nf(p.B,2)} m</b> od obrubníka. Odvodňovač zachytí vodu zo spolupôsobiacej šírky <b>a₁ = ${nf(r.a1,3)} m</b>, čo je <b>${nf(r.Hod,2)} l/s</b> z celkového prietoku v rigole ${nf(r.Q,2)} l/s. Výšky sú prevýšené ${nf(exag,0)}×, šrafovaná plocha A₁ = a₁ · ø h′₁ vteká do odvodňovača.`;
}
if (window.ResizeObserver){
  let crossW = 0;
  new ResizeObserver(() => {
    const w = $("cross").clientWidth;
    if (w && Math.abs(w - crossW) > 2 && crossLast){ crossW = w; renderCross(...crossLast); }
  }).observe($("cross"));
}


function renderSens(p, r){
  const xmax = Math.max(6, Math.ceil(p.ppd*1.3));
  const pts = [];
  for (let x = 0.25; x <= xmax + 1e-9; x += 0.05){
    const rr = calc({...p, ppd:x});
    pts.push({x, L: rr.Lodv, ok: rr.okH && rr.okV});
  }
  const Lmax = Math.max(...pts.map(q=>q.L), r.Lodv);
  const {max: ym, step} = niceMax(Lmax*1.05, 5);
  const W = 720, H = 340;
  const F = frame({W,H,ml:52,mr:20,mt:14,mb:46,x0:0,x1:xmax,y0:0,y1:ym,
    xt: range(0, xmax, xmax > 8 ? 2 : 1), yt: range(0, ym, step),
    fx: v => nf(v,0), fy: v => nf(v, Number.isInteger(step) ? 0 : 1),
    xl:`Pozdĺžny sklon ${sb("P","pd"," [%]")}`, yl:`Vzdialenosť odvodňovačov ${sb("L","odv"," [m]")}`});
  const {sx, sy} = F;
  let s = "";
  // bad zones background
  let zs = null;
  pts.forEach((q, i) => {
    if (!q.ok && zs === null) zs = q.x;
    if ((q.ok || i === pts.length-1) && zs !== null){ const ze = q.ok ? pts[i-1].x : q.x; s += `<rect class="badzone" x="${sx(zs)}" y="${sy(ym)}" width="${Math.max(2, sx(ze)-sx(zs))}" height="${sy(0)-sy(ym)}"/>`; zs = null; }
  });
  s += F.s;
  const runs = []; let cur = null;
  pts.forEach(q => {
    if (!cur || cur.ok !== q.ok){ const last = cur ? cur.pts[cur.pts.length-1] : null; cur = {ok:q.ok, pts: last ? [last] : []}; runs.push(cur); }
    cur.pts.push([q.x, q.L]);
  });
  runs.forEach(rn => { s += `<path class="${rn.ok?"line-ok":"line-bad"}" d="${pathOf(rn.pts, sx, sy)}"/>`; });
  const ok = r.okH && r.okV;
  s += `<line class="guide" x1="${sx(p.ppd)}" x2="${sx(p.ppd)}" y1="${sy(r.Lodv)}" y2="${sy(0)}"/><line class="guide" x1="${sx(0)}" x2="${sx(p.ppd)}" y1="${sy(r.Lodv)}" y2="${sy(r.Lodv)}"/>`;
  s += `<circle class="${ok?"pt-ok":"pt-bad"}" cx="${sx(Math.min(p.ppd,xmax))}" cy="${sy(r.Lodv)}" r="7"/>`;
  const right = p.ppd > xmax*0.6;
  s += `<text class="ann" x="${sx(p.ppd)+(right?-12:12)}" y="${sy(r.Lodv)+(right?-14:24)}" text-anchor="${right?"end":"start"}">${nf(r.Lodv,2)} m pri ${nf(p.ppd,2)} %</text>`;
  $("senschart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Vzdialenosť odvodňovačov v závislosti od pozdĺžneho sklonu">${s}</svg>`;
  const badFrom = pts.find(q => !q.ok && q.x > 0.3);
  $("senscap").innerHTML = `Ostatné vstupy zostávajú rovnaké. ${badFrom ? `Od sklonu približne <b>${nf(badFrom.x,1)} %</b> (prerušovaná čiara) by voda pretekala cez odvodňovač alebo by v′ vyšla mimo rozsah grafu, vtedy navrhni odvodňovače hustejšie, zmenši B alebo zvoľ iný typ.` : "V celom zobrazenom rozsahu sklonov zostáva bod pod hraničnou krivkou."} Graf pomáha pri moste s premenlivým pozdĺžnym sklonom.`;
}

function renderPipe(p, r){
  const pts = []; for (let f = 5; f <= 100.001; f += 1) pts.push([f, pipe(p, f).Qp]);
  const Qmax = Math.max(...pts.map(q=>q[1]), r.QM);
  const {max: ym, step} = niceMax(Qmax*1.08, 5);
  const W = 720, H = 340;
  const F = frame({W,H,ml:52,mr:20,mt:14,mb:46,x0:0,x1:100,y0:0,y1:ym,
    xt: range(0, 100, 10), yt: range(0, ym, step), fx: v => nf(v,0), fy: v => nf(v, Number.isInteger(step) ? 0 : 1),
    xl:"Plnenie potrubia h/d [%]", yl:`Prietok ${sb("Q","pot"," [l/s]")}`});
  const {sx, sy} = F;
  let s = F.s;
  s += `<line class="ref" x1="${sx(0)}" x2="${sx(100)}" y1="${sy(r.QM)}" y2="${sy(r.QM)}"/>`;
  s += `<text class="ann" x="${sx(2)}" y="${sy(r.QM)-7}">${sb("Q","M",` = ${nf(r.QM,1)} l/s`)}</text>`;
  s += `<path class="line-ok" d="${pathOf(pts, sx, sy)}"/>`;
  s += `<line class="guide" x1="${sx(p.fill)}" x2="${sx(p.fill)}" y1="${sy(r.Qp)}" y2="${sy(0)}"/>`;
  s += `<circle class="${r.okP?"pt-ok":"pt-bad"}" cx="${sx(p.fill)}" cy="${sy(r.Qp)}" r="7"/>`;
  s += `<text class="ann ${r.okP?"ann-ok":"ann-bad"}" x="${sx(p.fill)-12}" y="${sy(r.Qp)-12}" text-anchor="end">${nf(r.Qp,1)} l/s pri ${nf(p.fill,1)} %</text>`;
  $("pipechart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Prietok potrubím v závislosti od plnenia">${s}</svg>`;
  // find required fill
  let need = null; for (const q of pts){ if (q[1] >= r.QM){ need = q[0]; break; } }
  $("pipecap").innerHTML = need !== null
    ? `Potrubie DN ${nf(p.dpot*1000,0)} pri sklone ${nf(p.ipot,2)} % prevedie Q<sub>M</sub> už pri plnení približne <b>${nf(need,0)} %</b>.`
    : `Potrubie DN ${nf(p.dpot*1000,0)} pri sklone ${nf(p.ipot,2)} % neprevedie Q<sub>M</sub> ani pri plnom profile. Zväčši priemer alebo sklon.`;
}


/* ---------- step navigation ---------- */
const SHORT = {g300:"300 × 300", g500x300:"500 × 300", g500:"500 × 500"};
let step = 1;
function goStep(n){
  step = n;
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("hidden", +v.dataset.view !== n));
  document.querySelectorAll(".steps button").forEach(b => b.setAttribute("aria-current", +b.dataset.step === n ? "step" : "false"));
  if (n === 1 && anim.realP){ animResize(); anim.key = ""; animUpdate(anim.realP, anim.realR); drawAnim(); }
  window.scrollTo({top: 0, behavior: reduceMotion ? "auto" : "smooth"});
}
document.querySelectorAll(".steps button").forEach(b => b.addEventListener("click", () => goStep(+b.dataset.step)));
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => goStep(+b.dataset.go)));
document.querySelectorAll(".calctoggle").forEach(b => b.addEventListener("click", () => {
  const open = b.getAttribute("aria-expanded") !== "true";
  b.setAttribute("aria-expanded", open ? "true" : "false");
  $(b.getAttribute("aria-controls")).hidden = !open;
}));

/* ---------- inputs ---------- */
function buildInputs(){
  GROUPS.forEach((g, gi) => {
    let html = "";
    g.fields.forEach(f => {
      if (f.type === "select"){
        html += `<div class="field"><span class="flabel" id="typ-lab">Typ odvodňovača</span><div class="grates" role="group" aria-labelledby="typ-lab">${Object.keys(GRATES).map(k => `<button type="button" data-typ="${k}" aria-pressed="false">${SHORT[k]}</button>`).join("")}</div><div class="hint" id="typinfo"></div></div>`;
      } else {
        html += `<div class="field"><div class="row"><label for="f-${f.id}">${f.name} <b>${f.sym}</b></label><div class="inbox${f.fixed ? " fixed" : ""}" id="box-${f.id}"><input id="f-${f.id}"${f.fixed ? ` readonly tabindex="-1" title="Určené typom odvodňovača"` : ""} inputmode="decimal" autocomplete="off" spellcheck="false"><span class="unit">${f.unit}</span></div></div>${f.hint ? `<div class="hint">${f.hint}</div>` : ""}</div>`;
      }
    });
    $("params" + (gi + 1)).innerHTML = html;
  });
  document.querySelectorAll(".grates button").forEach(b => b.addEventListener("click", () => {
    state.typ = b.dataset.typ;
    const g = GRATES[state.typ];
    state.a = g.a; $("f-a").value = g.a;
    update();
  }));
  GROUPS.flatMap(g => g.fields).filter(f => f.type !== "select" && !f.fixed).forEach(f => {
    $("f-" + f.id).addEventListener("input", e => { state[f.id] = e.target.value; update(); });
  });
  [["m-stavba","stavba"],["m-objekt","objekt"],["m-autor","autor"]].forEach(([id, k]) => {
    $(id).addEventListener("input", e => { state[k] = e.target.value; update(); });
  });
  fillInputs();
}
function fillInputs(){
  GROUPS.flatMap(g => g.fields).filter(f => f.type !== "select").forEach(f => { $("f-" + f.id).value = state[f.id]; });
  $("m-stavba").value = state.stavba || ""; $("m-objekt").value = state.objekt || ""; $("m-autor").value = state.autor || "";
}

/* ---------- small builders ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const RC = 2*Math.PI*26;
function tile(t){
  let g = "";
  if (t.gauge != null){
    const u = Number.isFinite(t.gauge) ? Math.max(0, t.gauge) : 0;
    const col = u > 1 + 1e-9 ? "var(--bad)" : u > 0.9 ? "var(--warn)" : "var(--ok)";
    g = `<svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle class="ring-bg" cx="32" cy="32" r="26"/><circle class="ring" cx="32" cy="32" r="26" stroke="${col}" stroke-dasharray="${(Math.min(1,u)*RC).toFixed(1)} ${RC.toFixed(1)}" transform="rotate(-90 32 32)"/><text class="ring-t" x="32" y="36.5" text-anchor="middle">${nf(u*100,0)}%</text></svg>`;
  }
  return `<div class="tile">${g}<div><div class="tl">${t.label}</div><div class="tv">${t.value} <small>${t.unit || ""}</small></div>${t.note ? `<div class="tn ${t.kind || ""}">${t.note}</div>` : ""}</div></div>`;
}
function result(label, value, unit, kind){
  const st = kind === "ok" ? "Vyhovuje" : kind === "bad" ? "Nevyhovuje" : "Návrh";
  return `<span class="rl">${label}</span><span class="rv"><b>${value}</b><span>${unit}</span></span><span class="status ${kind}">${st}</span>`;
}
function calcGroups(groups){
  return groups.map(g => `<div class="cgroup"><h3>${g.title}</h3>${g.rows.map(r => {
    const v = typeof r[2] === "string" ? r[2] : nf(r[2], r[4]);
    return `<div class="crow ${r.cls || ""}"><span><span class="cn">${r[1]}</span><span class="cf">${r[5] || `<b>${r[0]}</b>`}</span></span><span class="val">${v} <small>${r[3]}</small></span></div>`;
  }).join("")}</div>`).join("");
}
const segs = (q, f) => { let s = ""; for (let i = 0; i < q.length - 1; i++){ const a = q[i-1] || q[i], b = q[i], c = q[i+1], d = q[i+2] || c; s += ` C${f(b[0]+(c[0]-a[0])/6)} ${f(b[1]+(c[1]-a[1])/6)} ${f(c[0]-(d[0]-b[0])/6)} ${f(c[1]-(d[1]-b[1])/6)} ${f(c[0])} ${f(c[1])}`; } return s; };

/* ---------- capacity chart with live point ---------- */
const cap = {key: ""};
function renderCapacity(p, r){
  const g = GRATES[p.typ];
  $("captitle").textContent = g.curves ? `Graf hltnosti · ${g.label.toLowerCase()}` : "Graf hltnosti";
  if (!g.curves){
    cap.key = "";
    $("capchart").innerHTML = `<p class="note">Pre zvolený typ nie je graf k dispozícii. Porovnávam h₁ = ${nf(r.h1*1000,1)} mm s ručne zadanou hodnotou h<sub>max</sub> = ${nf(r.hmax,1)} mm.</p>`;
    $("capcap").innerHTML = "";
    return;
  }
  const top = g.curves[g.curves.length-1], n = g.curves.length;
  const ym = Math.ceil((Math.max(top[0][1], r.h1*1000) + 5)/10)*10;
  const W = 820, H = 450, x0 = 58, x1 = W - 64, y0 = H - 74, y1 = 18;
  const sx = v => x0 + v/g.vlim*(x1 - x0), sy = h => y0 - h/ym*(y0 - y1), f = v => v.toFixed(1);
  const key = p.typ + "|" + ym;
  if (key !== cap.key){
    cap.key = key;
    const P = c => c.map(q => [sx(q[0]), sy(q[1])]);
    const qt = P(top), last = qt[qt.length-1];
    const topD = `M${f(x0)} ${f(qt[0][1])} L${f(qt[0][0])} ${f(qt[0][1])}` + segs(qt, f);
    let s = `<path class="ovf" d="M${f(x0)} ${f(y1)} L${f(x0)} ${f(qt[0][1])} L${f(qt[0][0])} ${f(qt[0][1])}${segs(qt, f)} L${f(x1)} ${f(y1)} Z"/>`;
    s += `<path class="under" d="${topD} L${f(last[0])} ${f(y0)} L${f(x0)} ${f(y0)} Z"/>`;
    const ys = ym > 60 ? 10 : 5, xs = g.vlim > 1 ? 0.25 : 0.1;
    range(0, ym, ys).forEach(h => s += `<line class="grid" x1="${x0}" x2="${x1}" y1="${f(sy(h))}" y2="${f(sy(h))}"/><text class="tick" x="${x0-10}" y="${f(sy(h)+4)}" text-anchor="end">${h}</text>`);
    range(0, g.vlim, xs).forEach(v => s += `<line class="grid" x1="${f(sx(v))}" x2="${f(sx(v))}" y1="${y1}" y2="${y0}"/><text class="tick" x="${f(sx(v))}" y="${f(y0+46)}" text-anchor="middle">${nf(v, xs < 0.25 ? 1 : 2)}</text>`);
    s += `<text class="ovftxt" x="${f(sx(g.vlim*0.74))}" y="${f(y1+28)}" text-anchor="middle">PRETOK</text>`;
    const ends = g.curves.map((c, i) => ({i, y: sy(c[c.length-1][1])})).sort((a, b) => b.y - a.y);
    let prev = Infinity; const ly = {};
    ends.forEach(o => { ly[o.i] = Math.min(o.y, prev - 14); prev = ly[o.i]; });
    g.curves.slice(0, n-1).forEach((c, i) => {
      const q = P(c), e = q[q.length-1];
      s += `<path class="curve" d="M${f(q[0][0])} ${f(q[0][1])}${segs(q, f)}"/><text class="slot" x="${f(e[0]+8)}" y="${f(ly[i]+4)}">${g.slots[i]}</text>`;
    });
    s += `<path class="curve glow" d="${topD}"/><path class="curve top" d="${topD}"/><text class="slot top" x="${f(last[0]+8)}" y="${f(ly[n-1]+4)}">${g.slots[n-1]}</text>`;
    s += `<text class="slothead" x="${f(x1+6)}" y="${f(Math.min(...Object.values(ly)) - 14)}">štrbiny</text>`;
    s += `<g class="move" id="cp-h"><line class="cp-cross" x1="${x0}" x2="${x1}" y1="0" y2="0"/><rect class="cp-tag" x="${x0-54}" y="-11" width="50" height="22" rx="6"/><text class="cp-tagtxt" id="cp-ht" x="${x0-29}" y="4.5" text-anchor="middle"></text></g>`;
    s += `<g class="move" id="cp-v"><line class="cp-cross" x1="0" x2="0" y1="${y1}" y2="${y0}"/><rect class="cp-tag" x="-30" y="${y0+6}" width="60" height="22" rx="6"/><text class="cp-tagtxt" id="cp-vt" x="0" y="${y0+21.5}" text-anchor="middle"></text></g>`;
    s += `<g class="move" id="cp-m"><rect class="mark" x="-6" y="-6" width="12" height="12" transform="rotate(45)"/><text class="cp-hlab" id="cp-mt" y="-12"></text></g>`;
    s += `<g class="move" id="cp-p"><circle class="cp-pulse" r="7"/><circle class="cp-dot" r="7"/><text class="cp-lab" id="cp-pt" y="24"></text></g>`;
    s += `<text class="axlab" x="${f((x0+x1)/2)}" y="${f(y0+68)}" text-anchor="middle">povrchová rýchlosť vody na prítoku v′ [m/s]</text>`;
    s += `<text class="axlab" transform="translate(14 ${f((y0+y1)/2)}) rotate(-90)" text-anchor="middle">výška vody v osi mriežky h′₁ [mm]</text>`;
    $("capchart").innerHTML = `<svg id="capsvg" viewBox="0 0 ${W} ${H}" role="img">${s}</svg>`;
  }
  const vx = Math.min(r.vs, g.vlim), hh = r.h1*1000;
  const ok = r.okH && r.okV, util = hh/r.hmax;
  const col = !ok ? "var(--bad)" : util > 0.9 ? "var(--warn)" : "var(--ok)";
  const px = sx(vx), py = sy(hh), hy = sy(r.hmax), right = vx > g.vlim*0.6, diff = r.hmax - hh;
  const svg = $("capsvg");
  svg.style.setProperty("--pt", col);
  svg.setAttribute("aria-label", `Graf hltnosti: h′₁ ${nf(hh,1)} mm pri v′ ${nf(r.vs,2)} m/s, hranica h max ${nf(r.hmax,1)} mm`);
  $("cp-h").style.transform = `translate(0px, ${f(py)}px)`;
  $("cp-v").style.transform = `translate(${f(px)}px, 0px)`;
  $("cp-m").style.transform = `translate(${f(px)}px, ${f(hy)}px)`;
  $("cp-p").style.transform = `translate(${f(px)}px, ${f(py)}px)`;
  $("cp-ht").textContent = nf(hh,1);
  $("cp-vt").textContent = nf(vx,2);
  [["cp-mt", `h max ${nf(r.hmax,1)} mm`], ["cp-pt", (diff >= 0 ? "rezerva " : "prekročenie ") + nf(Math.abs(diff),1) + " mm"]].forEach(([id, t]) => {
    const el = $(id); el.textContent = t; el.setAttribute("x", right ? -14 : 14); el.setAttribute("text-anchor", right ? "end" : "start");
  });
  $("capcap").innerHTML = r.okH
    ? `Bod leží pod hraničnou krivkou, rezerva <b>${nf(diff,1)} mm</b> (${nf(diff/r.hmax*100,0)} %). ${r.slot ? `Počet pretekaných štrbín mriežky: <b>${r.slot}</b>.` : ""} ${g.info}${r.okV ? "" : ` <b>Pozor:</b> v′ = ${nf(r.vs,2)} m/s je mimo rozsahu grafu.`}`
    : `Bod leží v oblasti pretoku, h₁ prekračuje h<sub>max</sub> o <b>${nf(-diff,1)} mm</b>. Zmenši šírku rozliatia B, posuň odvodňovač bližšie k obrubníku alebo zvoľ väčší typ. ${g.info}`;
}

/* small light cross-section for the A4 protocol */
function crossSmall(p, r){
  const W = 300, H = 172, curbX = 232, left = 10, f = v => v.toFixed(1);
  const dMax = p.B*1.14, ppr = p.ppr/100, zMax = dMax*ppr;
  const hs = (curbX - left)/dMax, vs = 46/Math.max(zMax, 1e-6), baseY = 128;
  const X = d => curbX - d*hs, Y = z => baseY - z*vs, exag = vs/hs;
  const ink = "#1C2226", mut = "#5A6670", blue = "#2F6FB0";
  const dIn = p.bobr, dOut = p.bobr + p.a;
  const dL = Math.max(0, p.bobr - Math.min(p.bobr, r.kh1)), dR = Math.min(p.B, p.bobr + p.a + r.kh1);
  let s = `<defs><pattern id="hatchS" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="${blue}" stroke-width="1.2"/></pattern></defs>`;
  s += `<polygon points="${f(X(dMax))},${f(Y(zMax))} ${curbX},${baseY} ${curbX},${baseY+20} ${f(X(dMax))},${f(Y(zMax)+20)}" fill="#E3E8EB" stroke="#9AA6AE" stroke-width="0.8"/>`;
  s += `<polygon points="${f(X(dOut))},${f(Y(dOut*ppr))} ${f(X(dIn))},${f(Y(dIn*ppr))} ${f(X(dIn))},${baseY+26} ${f(X(dOut))},${baseY+26}" fill="#fff" stroke="#3E474E" stroke-width="0.9"/>`;
  s += `<line x1="${f(X(dOut))}" y1="${f(Y(dOut*ppr))}" x2="${f(X(dIn))}" y2="${baseY+26}" stroke="#9AA6AE" stroke-width="0.7"/><line x1="${f(X(dIn))}" y1="${f(Y(dIn*ppr))}" x2="${f(X(dOut))}" y2="${baseY+26}" stroke="#9AA6AE" stroke-width="0.7"/>`;
  s += `<rect x="${curbX}" y="${f(Y(p.B*ppr)-14)}" width="14" height="${f(baseY+20-(Y(p.B*ppr)-14))}" fill="#B8C2C8" stroke="#3E474E" stroke-width="0.8"/>`;
  s += `<polygon points="${f(X(p.B))},${f(Y(r.h))} ${curbX},${f(Y(r.h))} ${curbX},${baseY}" fill="#D6E6F5" stroke="${blue}" stroke-width="0.9"/>`;
  if (dR > dL) s += `<polygon fill="url(#hatchS)" points="${f(X(dR))},${f(Y(r.h))} ${f(X(dL))},${f(Y(r.h))} ${f(X(dL))},${f(Y(dL*ppr))} ${f(X(dR))},${f(Y(dR*ppr))}"/>`;
  s += `<line x1="${f(X(dMax))}" y1="${f(Y(zMax))}" x2="${curbX}" y2="${baseY}" stroke="#3E474E" stroke-width="1.6"/>`;
  s += `<line x1="${f(X(dOut))}" y1="${f(Y(dOut*ppr))}" x2="${f(X(dIn))}" y2="${f(Y(dIn*ppr))}" stroke="${ink}" stroke-width="3"/>`;
  const dim = (xa, xb, y, txt, col) => {
    const a = Math.min(xa, xb), b = Math.max(xa, xb);
    return `<line x1="${f(a)}" x2="${f(b)}" y1="${y}" y2="${y}" stroke="${mut}" stroke-width="0.7"/><line x1="${f(a)}" x2="${f(a)}" y1="${y-3}" y2="${y+3}" stroke="${mut}" stroke-width="0.7"/><line x1="${f(b)}" x2="${f(b)}" y1="${y-3}" y2="${y+3}" stroke="${mut}" stroke-width="0.7"/>`
      + `<text x="${f((a+b)/2)}" y="${y-3}" text-anchor="middle" font-size="8.5" font-weight="700" fill="${col}">${txt}</text>`;
  };
  const yr = 42, yb = 56;
  s += dim(X(p.B), curbX, 12, `B = ${nf(p.B,2)} m`, ink);
  s += dim(X(dR), X(dL), 27, `a₁ = ${nf(r.a1,3)} m`, blue);
  if (r.kh1 > 0) s += dim(X(dR), X(dOut), yr, (X(dOut) - X(dR) > 56) ? `k·h₁ = ${nf(r.kh1,3)}` : "k·h₁", ink);
  s += dim(X(dOut), X(dIn), yr, (X(dIn) - X(dOut) > 42) ? `a = ${nf(p.a,3)}` : "a", ink);
  if (p.bobr > 0){
    s += dim(X(dIn), curbX, yb, "", ink);
    s += `<text x="${f(X(dIn)-4)}" y="${yb+3}" text-anchor="end" font-size="8.5" font-weight="700" fill="${ink}">${sb("b","obr",` = ${nf(p.bobr,3)}`)}</text>`;
  }
  [X(p.B), curbX].forEach(x => s += `<line x1="${f(x)}" x2="${f(x)}" y1="9" y2="${f(x === curbX ? Y(p.B*ppr)-14 : Y(r.h))}" stroke="${mut}" stroke-width="0.6" stroke-dasharray="2 2"/>`);
  [X(dR), X(dL)].forEach(x => s += `<line x1="${f(x)}" x2="${f(x)}" y1="24" y2="${f(Y(r.h))}" stroke="${mut}" stroke-width="0.6" stroke-dasharray="2 2"/>`);
  [X(dOut), X(dIn)].forEach(x => s += `<line x1="${f(x)}" x2="${f(x)}" y1="${yr-3}" y2="${f(Y(r.h))}" stroke="${mut}" stroke-width="0.6" stroke-dasharray="2 2"/>`);
  const ax = X(p.bobr + p.a/2), zAx = (p.bobr + p.a/2)*ppr;
  s += `<line x1="${f(ax)}" x2="${f(ax)}" y1="${f(Y(r.h))}" y2="${f(Y(zAx))}" stroke="${blue}" stroke-width="1.2"/>`;
  s += `<text x="${f(ax)}" y="${f(Y(r.h)-3)}" text-anchor="middle" font-size="8.5" font-weight="700" fill="${blue}" paint-order="stroke" stroke="#fff" stroke-width="3">${sb("h","1",` = ${nf(r.h1*1000,1)} mm`)}</text>`;
  const vx = curbX + 22;
  s += `<line x1="${vx}" x2="${vx}" y1="${f(Y(r.h))}" y2="${baseY}" stroke="${mut}" stroke-width="0.7"/><line x1="${curbX+14}" x2="${vx+3}" y1="${f(Y(r.h))}" y2="${f(Y(r.h))}" stroke="${mut}" stroke-width="0.7"/><line x1="${curbX+14}" x2="${vx+3}" y1="${baseY}" y2="${baseY}" stroke="${mut}" stroke-width="0.7"/>`;
  s += `<text x="${vx+4}" y="${f((Y(r.h)+baseY)/2-2)}" font-size="8.5" font-weight="700" fill="${blue}">h =</text><text x="${vx+4}" y="${f((Y(r.h)+baseY)/2+8)}" font-size="8.5" font-weight="700" fill="${blue}">${nf(r.h*1000,1)} mm</text>`;
  s += `<text x="${left}" y="${f(Y(zMax)+40)}" font-size="8.5" fill="${mut}">${sb("P","pr",` = ${nf(p.ppr,2)} %`)}</text>`;
  s += `<text x="${left}" y="${H-4}" font-size="8" fill="${mut}">výšky prevýšené ${nf(exag,0)}×, šrafa = plocha A₁</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Priečny rez rigolom">${s}</svg>`;
}

/* small light chart for the A4 protocol */
function capSmall(p, r){
  const g = GRATES[p.typ];
  if (!g.curves) return `<svg viewBox="0 0 300 60"><text x="10" y="34" font-size="11" fill="#3E474E">Iný odvodňovač – h max zadané ručne (${nf(r.hmax,1)} mm).</text></svg>`;
  const top = g.curves[g.curves.length-1];
  const ym = Math.ceil((Math.max(top[0][1], r.h1*1000) + 5)/10)*10;
  const W = 300, H = 210, x0 = 30, x1 = W - 26, y0 = H - 28, y1 = 8, f = v => v.toFixed(1);
  const sx = v => x0 + v/g.vlim*(x1 - x0), sy = h => y0 - h/ym*(y0 - y1);
  const P = c => c.map(q => [sx(q[0]), sy(q[1])]);
  const qt = P(top);
  let s = `<path d="M${f(x0)} ${f(y1)} L${f(x0)} ${f(qt[0][1])} L${f(qt[0][0])} ${f(qt[0][1])}${segs(qt, f)} L${f(x1)} ${f(y1)} Z" fill="#FBE9E5"/>`;
  range(0, ym, 10).forEach(h => s += `<line x1="${x0}" x2="${x1}" y1="${f(sy(h))}" y2="${f(sy(h))}" stroke="#E3E8EB"/><text x="${x0-4}" y="${f(sy(h)+3)}" text-anchor="end" font-size="8.5" fill="#5A6670">${h}</text>`);
  range(0, g.vlim, g.vlim > 1 ? 0.5 : 0.2).forEach(v => s += `<text x="${f(sx(v))}" y="${y0+11}" text-anchor="middle" font-size="8.5" fill="#5A6670">${nf(v,1)}</text>`);
  g.curves.forEach((c, i) => { const q = P(c), e = q[q.length-1]; const isTop = i === g.curves.length-1;
    s += `<path d="M${f(q[0][0])} ${f(q[0][1])}${segs(q, f)}" fill="none" stroke="${isTop ? "#1C2226" : "#9AA6AE"}" stroke-width="${isTop ? 1.8 : 0.9}"/>`;
    if (i === g.curves.length-1 || i === 0) s += `<text x="${f(e[0]+3)}" y="${f(e[1]+3)}" font-size="8.5" fill="#3E474E">${g.slots[i]}</text>`; });
  const vx = Math.min(r.vs, g.vlim), hh = r.h1*1000, ok = r.okH && r.okV, col = ok ? "#1D6B41" : "#A93226";
  s += `<line x1="${f(sx(vx))}" x2="${f(sx(vx))}" y1="${f(sy(hh))}" y2="${y0}" stroke="${col}" stroke-dasharray="3 2"/><line x1="${x0}" x2="${f(sx(vx))}" y1="${f(sy(hh))}" y2="${f(sy(hh))}" stroke="${col}" stroke-dasharray="3 2"/>`;
  s += `<rect x="${f(sx(vx)-4)}" y="${f(sy(r.hmax)-4)}" width="8" height="8" fill="#fff" stroke="#1C2226" stroke-width="1.5" transform="rotate(45 ${f(sx(vx))} ${f(sy(r.hmax))})"/>`;
  s += `<circle cx="${f(sx(vx))}" cy="${f(sy(hh))}" r="4" fill="${col}" stroke="#fff" stroke-width="1.5"/>`;
  s += `<line x1="${x0}" x2="${x1}" y1="${y0}" y2="${y0}" stroke="#3E474E"/><line x1="${x0}" x2="${x0}" y1="${y0}" y2="${y1}" stroke="#3E474E"/>`;
  s += `<text x="${f((x0+x1)/2)}" y="${H-3}" text-anchor="middle" font-size="9" fill="#1C2226">v′ [m/s]</text><text x="${x0+4}" y="${y1+10}" font-size="9" fill="#1C2226">h′₁ [mm]</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graf hltnosti s vypočítaným bodom">${s}</svg>`;
}

/* ---------- plan of drains + pipe visual ---------- */
function renderPlan(p, r){
  const nd = Math.min(r.nodv, 80), W = 820, L0 = 10, L1 = 810, w = (L1 - L0)/nd;
  let s = `<rect class="plan-deck" x="${L0}" y="40" width="${L1-L0}" height="70" rx="14"/><line class="plan-water" x1="${L0}" x2="${L1}" y1="100" y2="100"/><line class="flow" x1="${L0}" x2="${L1}" y1="100" y2="100"/><line class="plan-curb" x1="${L0}" x2="${L1}" y1="110" y2="110"/>`;
  for (let i = 1; i <= nd; i++) s += `<rect class="plan-drain" x="${(L0 + w*i - w/2 - 6).toFixed(1)}" y="92" width="12" height="16" rx="3"/>`;
  const d1 = L0 + w/2, d2 = d1 + w;
  s += `<text class="plan-txt" x="20" y="62">smer pozdĺžneho sklonu P pd = ${nf(p.ppd,2)} %  →</text>`;
  if (nd > 1) s += `<line class="plan-dim" x1="${d1}" x2="${d2}" y1="132" y2="132"/><line class="plan-dim" x1="${d1}" x2="${d1}" y1="126" y2="138"/><line class="plan-dim" x1="${d2}" x2="${d2}" y1="126" y2="138"/><text class="plan-num" x="${(d1+d2)/2}" y="154" text-anchor="${nd > 6 ? "start" : "middle"}">L = ${nf(r.Lreal,2)} m</text>`;
  s += `<text class="plan-num" x="${L1}" y="30" text-anchor="end">max. L odv = ${nf(r.Lodv,2)} m</text>`;
  $("plan").innerHTML = `<div class="chartbox"><svg viewBox="0 0 ${W} 170" role="img" aria-label="${r.nodv} odvodňovačov po ${nf(r.Lreal,2)} m">${s}</svg></div>`;
  $("plancap").textContent = `${r.nodv} × ${nf(r.Lreal,2)} m = ${nf(p.l,2)} m` + (p.lines > 1 ? ` · ${p.lines} línie, spolu ${r.ntot} ks` : "");
}
function renderPipeViz(p, r){
  const fl = Math.min(100, Math.max(0, p.fill));
  const y = 18 + 164*(1 - fl/100);
  $("pvwater").style.transform = `translate(0px, ${y.toFixed(1)}px)`;
  $("pvtxt").textContent = `h/d ${nf(fl,1)} %`;
  $("pvsvg").setAttribute("aria-label", `Plnenie potrubia ${nf(fl,1)} %`);
  $("pvtitle").textContent = `Prierez a kapacita potrubia DN ${nf(p.dpot*1000,0)}`;
  const qmax = Math.max(r.QM, r.Qp) || 1;
  $("pvqm").textContent = `${nf(r.QM,2)} l/s`; $("pvqp").textContent = `${nf(r.Qp,2)} l/s`;
  $("pvqmbar").style.width = (r.QM/qmax*100).toFixed(1) + "%";
  $("pvqpbar").style.width = (r.Qp/qmax*100).toFixed(1) + "%";
}

/* ---------- rows, tiles, results, protocol ---------- */
let lastRows = [];
function renderSteps(p, r){
  const g = GRATES[p.typ];
  const k = (row, cls) => { row.cls = cls; return row; };
  const ok1 = r.okH && r.okV;
  const g1 = [
    {title: "Prietok v rigole", rows: [
      ["h","Výška vody pri obrubníku",r.h*1000,"mm",1,"h = B · P<sub>pr</sub>"],
      ["A","Plocha vody v rigole",r.A,"m²",5,"A = 0,5 · B · h"],
      ["O","Omočený obvod",r.O,"m",3,"O = B + h"],
      ["R","Hydraulický polomer",r.R,"m",5,"R = A / O"],
      ["C","Rýchlostný súčiniteľ",r.C,"m<sup>0,5</sup>/s",2,"C = R<sup>1/6</sup> / n"],
      ["v","Rýchlosť na vtoku",r.v,"m/s",3,"v = C · (R · P<sub>pd</sub>)<sup>1/2</sup>"],
      k(["Q","Prietok v rigole",r.Q,"l/s",2,"Q = A · v · 1000"], "key")]},
    {title: "Graf hltnosti", rows: [
      k(["v′","Rýchlosť vody na povrchu",r.vs,"m/s",3,"v′ = 1,15 · v" + (r.vlim ? ` ≤ ${nf(r.vlim,1)}` : "")], r.okV ? "" : "badrow"),
      ["h′<sub>1</sub>","Výška vody v osi odvodňovača",r.h1*1000,"mm",1,"h′<sub>1</sub> = (B − b<sub>obr</sub> − a/2) · P<sub>pr</sub>"],
      k(["h<sub>max</sub>","Max. výška vody",r.hmax,"mm",1, g.curves ? "h<sub>max</sub> z grafu pre v′" : "h<sub>max</sub> zadané ručne"], "key"),
      k(["h<sub>1</sub> ≤ h<sub>max</sub>","Posúdenie mriežky", r.okH ? "vyhovuje" : "nevyhovuje","","","h′<sub>1</sub> ≤ h<sub>max</sub>"], r.okH ? "okrow" : "badrow")]},
    {title: "Zachytené množstvo", rows: [
      ["k","Súčiniteľ bočného nátoku",r.k,"",3,"k = 5 / v"],
      ["k · h<sub>1</sub>","Priľahlá šírka",r.kh1,"m",3,"k · h<sub>1</sub>"],
      ["a<sub>1</sub>","Spolupôsobiaca šírka",r.a1,"m",3,"a<sub>1</sub> = k·h<sub>1</sub> + a + min(b<sub>obr</sub>; k·h<sub>1</sub>)"],
      ["ø h′<sub>1</sub>","Priemerná výška vody",r.hp*1000,"mm",1,"ø h′<sub>1</sub> = (B − a<sub>1</sub>/2) · P<sub>pr</sub>"],
      ["A<sub>1</sub>","Plocha pritekajúcej vody",r.A1,"m²",5,"A<sub>1</sub> = a<sub>1</sub> · ø h′<sub>1</sub>"],
      k(["H<sub>od</sub>","Hltnosť odvodňovača",r.Hod,"l/s",2,"H<sub>od</sub> = A<sub>1</sub> · v · 1000"], "key")]}
  ];
  const sw = p.lines > 1 ? "š<sub>l</sub>" : "š";
  const g2rows = [];
  if (p.lines > 1) g2rows.push(["š<sub>l</sub>","Šírka na jednu líniu",r.swl,"m",2,"š<sub>l</sub> = š / n<sub>l</sub>"]);
  g2rows.push(k(["L<sub>odv</sub>","Vzdialenosť odvodňovačov",r.Lodv,"m",2,`L<sub>odv</sub> = H<sub>od</sub> / (q · ${sw} · φ · s)`], "key"));
  g2rows.push(["n","Min. počet odvodňovačov v línii",String(r.nodv),"ks","","n = ⌈l / L<sub>odv</sub>⌉"]);
  g2rows.push(k(["L","Rovnomerný rozostup",r.Lreal,"m",2,"L = l / n"], "key"));
  if (p.lines > 1) g2rows.push(["n<sub>c</sub>","Počet odvodňovačov spolu",String(r.ntot),"ks","","n<sub>c</sub> = n · n<sub>l</sub>"]);
  const g2 = [
    {title: "Prítok z mosta", rows: [
      ["F<sub>m</sub>","Odvodňovaná plocha mosta",r.Fm,"m²",2,"F<sub>m</sub> = š · l"],
      k(["Q<sub>M</sub>","Množstvo odvádzanej vody",r.QM,"l/s",2,"Q<sub>M</sub> = F<sub>m</sub> · q · φ"], "key")]},
    {title: "Rozmiestnenie", rows: g2rows}
  ];
  const g3 = [
    {title: "Geometria prierezu", rows: [
      ["α","Stredový uhol zaplnenia",r.theta,"°",1,"α = 2 · arccos(1 − 2·h/d)"],
      ["S<sub>pot</sub>","Prietoková plocha",r.Sp,"m²",5,"S<sub>pot</sub> = r²/2 · (α − sin α)"],
      ["O<sub>pot</sub>","Omočený obvod",r.Op,"m",4,"O<sub>pot</sub> = r · α"],
      ["R<sub>pot</sub>","Hydraulický polomer",r.Rp,"m",5,"R<sub>pot</sub> = S<sub>pot</sub> / O<sub>pot</sub>"]]},
    {title: "Prietok", rows: [
      ["c","Rýchlostný súčiniteľ",r.cp,"m<sup>0,5</sup>/s",2,"c = (1/n) · R<sub>pot</sub><sup>1/6</sup>"],
      ["v<sub>pot</sub>","Stredná profilová rýchlosť",r.vp,"m/s",3,"v<sub>pot</sub> = c · (R<sub>pot</sub> · i<sub>pot</sub>)<sup>1/2</sup>"],
      k(["Q<sub>pot</sub>","Prietok potrubia",r.Qp,"l/s",2,"Q<sub>pot</sub> = S<sub>pot</sub> · v<sub>pot</sub> · 1000"], "key"),
      k(["Q<sub>pot</sub> ≥ Q<sub>M</sub>","Posúdenie potrubia", r.okP ? "vyhovuje" : "nevyhovuje","","",`${nf(r.Qp,2)} ${r.okP ? "≥" : "<"} ${nf(r.QM,2)} l/s`], r.okP ? "okrow" : "badrow")]}
  ];
  [[g1,1],[g2,2],[g3,3]].forEach(([gs, i]) => {
    $("calc" + i).innerHTML = calcGroups(gs);
    $("calc" + i + "n").textContent = `${gs.reduce((a, x) => a + x.rows.length, 0)} riadkov · vzorce podľa výpočtového listu 205-00`;
  });

  // results + tiles
  $("res1").innerHTML = result("Hltnosť jedného odvodňovača H<sub>od</sub>", nf(r.Hod,2), "l/s", ok1 ? "ok" : "bad");
  $("res2").innerHTML = result("Odvodňovačov v línii", String(r.nodv), "ks", ok1 ? "info" : "bad");
  $("res3").innerHTML = result("Kapacita potrubia Q<sub>pot</sub>", nf(r.Qp,2), "l/s", r.okP ? "ok" : "bad");
  $("tiles1").innerHTML = [
    tile({label: "Využitie mriežky h′<sub>1</sub> / h<sub>max</sub>", value: nf(r.h1*1000,1), unit: "mm", gauge: r.h1*1000/r.hmax, note: `h<sub>max</sub> ${nf(r.hmax,1)} mm${r.slot ? ` · štrbiny ${r.slot}` : ""}`, kind: r.okH ? "ok" : "bad"}),
    tile(r.vlim ? {label: "Rýchlosť v′ / rozsah grafu", value: nf(r.vs,2), unit: "m/s", gauge: r.vs/r.vlim, note: `max. ${nf(r.vlim,1)} m/s`, kind: r.okV ? "ok" : "bad"}
                : {label: "Rýchlosť vody na povrchu v′", value: nf(r.vs,2), unit: "m/s", note: "rozsah over u výrobcu", kind: "warn"}),
    tile({label: "Hltnosť H<sub>od</sub>", value: nf(r.Hod,2), unit: "l/s", note: "→ do kroku 2", kind: "next"})
  ].join("");
  $("tiles2").innerHTML = [
    tile({label: "Rozostup L / L<sub>odv</sub>", value: nf(r.Lreal,2), unit: "m", gauge: r.Lreal/r.Lodv, note: `max. ${nf(r.Lodv,2)} m`, kind: "ok"}),
    tile({label: p.lines > 1 ? "Odvodňovačov spolu" : "Odvodňovačov v línii", value: String(p.lines > 1 ? r.ntot : r.nodv), unit: "ks", note: p.lines > 1 ? `${r.nodv} ks × ${p.lines} línie` : `po ${nf(r.Lreal,2)} m`}),
    tile({label: "Prítok z mosta Q<sub>M</sub>", value: nf(r.QM,2), unit: "l/s", note: "→ do kroku 3", kind: "next"})
  ].join("");
  $("tiles3").innerHTML = [
    tile({label: "Využitie potrubia Q<sub>M</sub> / Q<sub>pot</sub>", value: nf(r.QM,2), unit: "l/s", gauge: r.QM/r.Qp, note: r.okP ? "kapacita stačí" : "kapacita nestačí", kind: r.okP ? "ok" : "bad"}),
    tile({label: "Kapacita Q<sub>pot</sub>", value: nf(r.Qp,2), unit: "l/s", note: "→ do protokolu", kind: "next"}),
    tile({label: "Rýchlosť v potrubí", value: nf(r.vp,2), unit: "m/s", note: "Manning–Chézy"})
  ].join("");
  $("carry2").innerHTML = `<div class="chip"><span class="cl">Hltnosť odvodňovača <b>H<sub>od</sub></b><em>← z kroku 1</em></span><span class="cv">${nf(r.Hod,2)} <small>l/s</small></span></div>`;
  $("carry3").innerHTML = `<div class="chip"><span class="cl">Prítok z mosta <b>Q<sub>M</sub></b><em>← z kroku 2</em></span><span class="cv">${nf(r.QM,2)} <small>l/s</small></span></div>`;
  const fail = $("fail1");
  if (ok1) fail.classList.add("hidden");
  else { fail.innerHTML = `<h3>Odvodňovač nevyhovuje – možné riešenia</h3><ul>${remedies(p, r).map(x => `<li>${x}</li>`).join("")}</ul>`; fail.classList.remove("hidden"); }
  [["dot1", ok1 ? "ok" : "bad"], ["dot2", ok1 ? "info" : "bad"], ["dot3", r.okP ? "ok" : "bad"], ["dot4", ""]].forEach(([id, c]) => $(id).className = "dot " + c);
  $("bsub").textContent = `Výpočtový list 205-00 · ${g.label}`;

  renderProtocol(p, r, g1, g2, g3);
}

function renderProtocol(p, r, g1, g2, g3){
  const g = GRATES[p.typ], ok1 = r.okH && r.okV;
  const val = row => typeof row[2] === "string" ? row[2] : nf(row[2], row[4]);
  const rhs = t => { t = t || ""; const i = t.indexOf(" = "); return i >= 0 ? t.slice(i + 3) : t; };
  const trs = groups => groups.flatMap(gr => gr.rows).map(row => `<tr class="${row.cls || ""}"><td class="s">${row[0]}</td><td class="n">${row[1]}</td><td class="f">${rhs(row[5])}</td><td class="v">${val(row)} ${row[3]}</td></tr>`).join("");
  const tbl = (groups) => `<table><thead><tr><th>Symbol</th><th>Veličina</th><th>Vzorec</th><th style="text-align:right">Hodnota</th></tr></thead><tbody>${trs(groups)}</tbody></table>`;
  const inputs = GROUPS.map(gr => `<table><thead><tr><th colspan="3">${gr.title}</th></tr></thead><tbody>${gr.fields.filter(f => f.type !== "select").map(f => `<tr><td class="s">${f.sym}</td><td class="n">${f.name}</td><td class="v">${esc(String(state[f.id]).trim())} ${f.unit}</td></tr>`).join("")}</tbody></table>`).join("");
  const box = (title, ok, text, status) => `<div class="box ${ok ? "" : "bad"}"><div class="bh"><span>${title}</span><span>${status || (ok ? "VYHOVUJE" : "NEVYHOVUJE")}</span></div><div>${text}</div></div>`;
  const today = new Date().toLocaleDateString("sk-SK");
  $("sheet").innerHTML = `
    <div class="sh-top">
      <div><div class="sh-kicker">Príloha technickej správy</div><h1>Výpočet odvodnenia mosta</h1><div class="sh-sub">Hltnosť odvodňovača · vzdialenosť odvodňovačov · posúdenie zberného potrubia</div></div>
      <div class="sh-meta"><span>Stavba</span><b>${esc(state.stavba || "–")}</b><span>Objekt</span><b>${esc(state.objekt || "–")}</b><span>Odvodňovač</span><b>${g.label}</b><span>Dátum</span><b>${today}</b></div>
    </div>
    <section><h2>1 Vstupné údaje</h2><div class="g3">${inputs}</div></section>
    <section class="row2">
      <div><h2>2 Hltnosť odvodňovača</h2>${tbl(g1)}</div>
      <figure><figcaption>Priečny rez rigolom</figcaption>${crossSmall(p, r)}
        <figcaption>Graf hltnosti – ${g.label.toLowerCase()}</figcaption>${capSmall(p, r)}
        ${box("h′₁ ≤ h max", ok1, ok1 ? `Rezerva ${nf(r.hmax - r.h1*1000,1)} mm${r.slot ? `, pretekané štrbiny ${r.slot}` : ""}.` : (r.okV ? "Bod leží v oblasti pretoku." : "Rýchlosť v′ je mimo rozsahu grafu."))}
      </figure>
    </section>
    <section class="g2"><div><h2>3 Vzdialenosť odvodňovačov</h2>${tbl(g2)}</div><div><h2>4 Zberné potrubie</h2>${tbl(g3)}</div></section>
    <section><h2>5 Záver</h2><div class="g3">
      ${box("Hltnosť", ok1, `${g.label}: h′₁ = ${nf(r.h1*1000,1)} ${r.okH ? "≤" : ">"} ${nf(r.hmax,1)} mm, H<sub>od</sub> = ${nf(r.Hod,2)} l/s.`)}
      ${box("Rozmiestnenie", ok1, `${r.nodv} ks v línii po ${nf(r.Lreal,2)} m (max. ${nf(r.Lodv,2)} m)${p.lines > 1 ? `, spolu ${r.ntot} ks` : ""}.`, ok1 ? "NÁVRH" : "NEOVERENÉ")}
      ${box("Potrubie", r.okP, `DN ${nf(p.dpot*1000,0)}, i = ${nf(p.ipot,2)} %: Q<sub>pot</sub> = ${nf(r.Qp,2)} ${r.okP ? "≥" : "<"} ${nf(r.QM,2)} l/s.`)}
    </div></section>`;

  // plain-text protocol for clipboard
  const fmt = row => `${plain(row[0])}\t${row[1]}\t${val(row)}\t${plain(row[3])}`;
  const inputsTxt = GROUPS.flatMap(gr => gr.fields).filter(f => f.type !== "select")
    .map(f => `${plain(f.sym)}\t${f.name}\t${String(state[f.id]).trim()}\t${f.unit}`);
  lastRows = [
    "VÝPOČET ODVODNENIA MOSTA", `Stavba\t${state.stavba || ""}`, `Objekt\t${state.objekt || ""}`, `Typ odvodňovača\t${g.label}`, "",
    "VSTUPY", ...inputsTxt, "",
    "HLTNOSŤ ODVODŇOVAČA", ...g1.flatMap(x => x.rows).map(fmt), "",
    "VÝPOČET MNOŽSTVA ODVODŇOVAČOV", ...g2.flatMap(x => x.rows).map(fmt), "",
    "VÝPOČET POTRUBIA", ...g3.flatMap(x => x.rows).map(fmt)
  ];
}

/* ---------- update ---------- */
function update(){
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e) {}
  const g = GRATES[state.typ];
  $("typinfo").innerHTML = g.info + ` Šírka rámu a = ${g.a} m je daná typom.`;
  document.querySelectorAll(".grates button").forEach(b => b.setAttribute("aria-pressed", b.dataset.typ === state.typ ? "true" : "false"));
  const {p, bad} = readParams();
  GROUPS.flatMap(gr => gr.fields).filter(f => f.type !== "select").forEach(f => {
    $("box-" + f.id).classList.toggle("err", bad.includes(f.id));
    $("f-" + f.id).setAttribute("aria-invalid", bad.includes(f.id) ? "true" : "false");
  });
  const msgs = [];
  if (bad.length) msgs.push("Doplň kladné číselné hodnoty v označených poliach (desatinná čiarka aj bodka sú v poriadku).");
  if (!bad.length && p.B <= p.bobr + p.a/2) msgs.push("Šírka rozliatia B musí byť väčšia ako b<sub>obr</sub> + a/2, inak voda k osi odvodňovača nedotečie.");
  if (msgs.length){ $("msg").innerHTML = msgs.join(" "); $("msg").classList.remove("hidden"); return; }
  const r = calc(p);
  if (r.hp <= 0){ $("msg").innerHTML = "Spolupôsobiaca šírka a₁ vychádza väčšia ako 2·B, skontroluj vstupy B, a a b<sub>obr</sub>."; $("msg").classList.remove("hidden"); return; }
  $("msg").classList.add("hidden");
  renderSteps(p, r); renderCross(p, r); renderCapacity(p, r); renderPlan(p, r); renderSens(p, r); renderPipeViz(p, r); renderPipe(p, r); animUpdate(p, r);
}

function toast(t){ const el = $("toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove("show"), 2200); }
$("copy").addEventListener("click", async () => {
  const txt = lastRows.join("\n");
  let ok = false;
  try { await navigator.clipboard.writeText(txt); ok = true; } catch(e) {
    try { const ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); ok = document.execCommand("copy"); ta.remove(); } catch(e2) {}
  }
  toast(ok ? "Protokol skopírovaný, vlož ho do Excelu alebo Wordu" : "Kopírovanie zlyhalo, prehliadač ho nepovolil");
});
$("print").addEventListener("click", () => window.print());
window.addEventListener("beforeprint", () => { if (step !== 4) goStep(4); });
$("reset").addEventListener("click", () => { state = {...DEFAULTS, a: GRATES[DEFAULTS.typ].a}; fillInputs(); update(); toast("Obnovené hodnoty z výpočtového listu 205-00"); });

buildInputs();
setupAnim();
update();
goStep(1);
