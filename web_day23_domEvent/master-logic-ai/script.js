

  // -------------------------------
  // Utility helpers
  // -------------------------------
  const $ = (id) => document.getElementById(id);
  const show = (el) => el.classList.remove('hidden');
  const hide = (el) => el.classList.add('hidden');
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  // -------------------------------
  // Rule Engine (mini DSL)
  // -------------------------------
  const defaultRules = [
    {
      id: 'teen-study',
      when: { all: [ { f:'age', op:'<=', v:17, explain:'Age <= 17 → likely student' } ] },
      show: ['study','interests','time'],
      suggest: { study: ['Computer Science','Mathematics','Design'], interests: ['Competitive Programming','Robotics','UI/UX'] },
      message: 'Focus on study plan and interests.'
    },
    {
      id: 'adult-career',
      when: { all: [ { f:'age', op:'>=', v:18 }, { f:'age', op:'<=', v:60 } ] },
      show: ['career','interests','budget','time'],
      suggest: { career: ['Frontend Engineer','Data Analyst','Product Designer'], interests: ['AI','WebGL','System Design'] },
      message: 'Prioritize career progression and upskilling.'
    },
    {
      id: 'senior-retire',
      when: { any: [ { f:'age', op:'>', v:60, explain:'Age > 60 → retirement track' }, { f:'retire', op:'==', v:'yes' } ] },
      show: ['retire','interests','time'],
      suggest: { interests: ['Mentoring','Community Teaching','Hobby Projects'] },
      message: 'Lean into mentoring, legacy projects, and well‑being.'
    },
    {
      id: 'low-budget',
      when: { all: [ { f:'budget', op:'<=', v:20 } ] },
      show: ['time','interests'],
      message: 'Low budget → emphasize free resources and timeboxing.'
    },
    {
      id: 'bd-localization',
      when: { any: [ { f:'country', op:'regex', v:/bangladesh/i } ] },
      message: 'Localize suggestions for BD context (community, pricing).'
    }
  ];

  function cmp(op, a, b){
    switch(op){
      case '==': return a == b;
      case '!=': return a != b;
      case '>': return Number(a) > Number(b);
      case '<': return Number(a) < Number(b);
      case '>=': return Number(a) >= Number(b);
      case '<=': return Number(a) <= Number(b);
      case 'in': return Array.isArray(b) && b.includes(a);
      case 'notin': return Array.isArray(b) && !b.includes(a);
      case 'regex': return (b instanceof RegExp) && (typeof a === 'string') && b.test(a);
      case 'exists': return a != null && a !== '';
      case 'between': return Number(a) >= Number(b[0]) && Number(a) <= Number(b[1]);
      default: return false;
    }
  }

  function evalCond(cond, state, trace){
    if(!cond) return true;
    if(cond.all){
      return cond.all.every(c=>{ const ok = cmp(c.op, state[c.f], c.v); if(trace && c.explain){ trace.push(`${ok ? '✓':'✗'} ${c.explain}`);} return ok; });
    }
    if(cond.any){
      return cond.any.some(c=>{ const ok = cmp(c.op, state[c.f], c.v); if(trace && c.explain){ trace.push(`${ok ? '✓':'✗'} ${c.explain}`);} return ok; });
    }
    return true;
  }

  class LogicEngine{
    constructor(rules){ this.rules = rules; }
    evaluate(state){
      const fired = [];
      const fieldsToShow = new Set();
      const suggestions = {}; let messages=[]; let trace=[];
      for(const r of this.rules){
        const localTrace=[];
        if(evalCond(r.when, state, localTrace)){
          fired.push({ id:r.id, trace:localTrace });
          (r.show||[]).forEach(f=>fieldsToShow.add(f));
          if(r.suggest){ for(const k in r.suggest){ suggestions[k] = (suggestions[k]||[]).concat(r.suggest[k]); } }
          if(r.message) messages.push(r.message);
        }
        trace = trace.concat(localTrace);
      }
      return { fired, fields:[...fieldsToShow], suggestions, messages, trace };
    }
  }

  // -------------------------------
  // Multi‑armed bandit (epsilon‑greedy) to pick next best field
  // -------------------------------
  const BANDIT_KEY = 'masterlogic.bandit.v1';
  function loadBandit(){ try { return JSON.parse(localStorage.getItem(BANDIT_KEY)) || {}; } catch { return {}; } }
  function saveBandit(b){ localStorage.setItem(BANDIT_KEY, JSON.stringify(b)); }
  function pickNextField(candidates, bandit){
    if(candidates.length===0) return null;
    const eps = 0.15; // explore 15%
    if(Math.random() < eps){ return candidates[Math.floor(Math.random()*candidates.length)]; }
    // exploit: highest avg reward
    let best = candidates[0]; let bestScore = -Infinity;
    for(const f of candidates){
      const arm = bandit[f] || { n:0, r:0 };
      const avg = arm.n ? (arm.r/arm.n) : 0.01; // small prior
      if(avg > bestScore){ bestScore = avg; best = f; }
    }
    return best;
  }
  function rewardField(field, positive=true){
    const b = loadBandit();
    const arm = b[field] || { n:0, r:0 };
    arm.n += 1; arm.r += positive ? 1 : 0;
    b[field] = arm; saveBandit(b);
  }

  // -------------------------------
  // State / Undo‑Redo
  // -------------------------------
  const history = []; let ptr = -1;
  function pushState(st){ history.splice(ptr+1); history.push(JSON.stringify(st)); ptr = history.length-1; }
  function canUndo(){ return ptr>0; }
  function canRedo(){ return ptr < history.length-1; }
  function undo(){ if(canUndo()){ ptr--; return JSON.parse(history[ptr]); } }
  function redo(){ if(canRedo()){ ptr++; return JSON.parse(history[ptr]); } }

  // -------------------------------
  // AI Suggest hook (plug in your API)
  // -------------------------------
  async function aiSuggest(ctx){
    if(window.AI_SUGGEST){ try { return await window.AI_SUGGEST(ctx); } catch(e){ console.warn('AI_SUGGEST failed', e); } }
    // Fallback heuristic suggestions (mock)
    const out = {};
    if(ctx.age!=null){
      if(ctx.age <= 17){ out.study = ['Intro to CS (free)','Math Olympiad','Figma Basics']; }
      else if(ctx.age <= 35){ out.career = ['TypeScript Deep Dive','System Design Primer','LeetCode 75']; }
      else if(ctx.age > 60){ out.interests = ['Mentor on local forums','Open‑source docs','Photography']; }
    }
    if((ctx.interests||'').toLowerCase().includes('ai')){
      (out.career ||= []).push('Hands‑on LLM Apps');
    }
    return out;
  }

  // -------------------------------
  // App wiring
  // -------------------------------
  let rules = JSON.parse(localStorage.getItem('masterlogic.rules.v1') || 'null') || defaultRules;
  const engine = new LogicEngine(rules);

  const fields = {
    age: $('age'), country: $('country'), career: $('career'), study: $('study'), retire: $('retire'), interests: $('interests'), budget: $('budget'), time: $('time')
  };
  const containers = {
    career: $('career-field'), study: $('study-field'), retire: $('retire-field'), interests: $('interests-field'), budget: $('budget-field'), time: $('time-field')
  };

  function readState(){
    return {
      age: Number(fields.age.value || NaN),
      country: fields.country.value || '',
      career: fields.career.value || '',
      study: fields.study.value || '',
      retire: fields.retire.value || '',
      interests: fields.interests.value || '',
      budget: Number(fields.budget.value || NaN),
      time: Number(fields.time.value || NaN)
    };
  }

  function setState(st){
    for(const k in st){ if(fields[k]){ fields[k].value = (st[k] ?? ''); } }
    runEvaluation();
  }

  function setSuggestions(sug){
    // clear old
    ['career','study'].forEach(k=>{ const el = $(k+'-suggestions'); if(el){ el.innerHTML=''; }});
    for(const k in sug){ const el = $(k+'-suggestions'); if(!el) continue; el.innerHTML = ''; (sug[k]||[]).slice(0,6).forEach(v=>{
      const b = document.createElement('button'); b.textContent = v; b.addEventListener('click', ()=>{ fields[k].value = v; rewardField(k, true); runEvaluation(); }); el.appendChild(b);
    }); }
  }

  function visibleContainers(list){
    // hide all first
    Object.values(containers).forEach(hide);
    // always show bound to fields present in list
    list.forEach(id=>{ if(containers[id]) show(containers[id]); });
  }

  function infoGain(state){
    // a toy metric: each answered field contributes based on type; unanswered reduces gain
    let answered = 0, total = 0;
    for(const k of Object.keys(fields)){
      if(!fields[k]) continue; total++;
      const v = state[k]; if(v !== '' && !Number.isNaN(v)) answered++;
    }
    return answered/Math.max(1,total);
  }

  function personalizationScore(state){
    let p = 0; if(state.country) p += 0.2; if(state.interests) p += 0.3; if(!Number.isNaN(state.budget)) p += 0.2; if(!Number.isNaN(state.time)) p += 0.3; return Math.min(1, p);
  }

  function runEvaluation(){
    const state = readState();
    pushState(state);
    const res = engine.evaluate(state);

    // Show/hide fields
    const mustShow = new Set(res.fields);
    // Always ensure critical fields appear once we know age band
    if(!Number.isNaN(state.age)){
      mustShow.add('interests');
      if(state.age <= 17) mustShow.add('study');
      if(state.age >= 18 && state.age <= 60) mustShow.add('career');
      if(state.age > 60) mustShow.add('retire');
    }
    visibleContainers([...mustShow]);

    // Suggestions
    setSuggestions(res.suggestions);

    // Explainability
    $('activeRulesCount').textContent = `${res.fired.length} rule${res.fired.length!==1?'s':''} fired`;
    const traceLines = res.fired.map(f => `• Rule: ${f.id}\n  ${f.trace.map(t=>'  ' + t).join('\n')}`).join('\n');
    $('explain').textContent = traceLines || 'No rules fired yet. Start typing…';

    // KPIs
    $('kpiAsked').textContent = [...mustShow].length;
    $('kpiGain').textContent = infoGain(state).toFixed(2);
    $('kpiPers').textContent = Math.round(personalizationScore(state)*100) + '%';
    $('kpiConfidence').textContent = Math.round((0.4 + 0.6*infoGain(state))*100) + '%';

    // Next best field via bandit
    const candidates = [...mustShow].filter(k => {
      const v = state[k]; return (v==='' || Number.isNaN(v));
    });
    const next = pickNextField(candidates, loadBandit());
    if(next && fields[next]){ fields[next].setAttribute('aria-live','polite'); fields[next].focus({ preventScroll:false }); }

    // Summary
    const plan = planFromState(state, res.messages);
    $('summary').innerHTML = plan;
  }

  function planFromState(st, messages){
    const lines = [];
    if(!Number.isNaN(st.age)){
      if(st.age <= 17) lines.push('📚 <strong>Track:</strong> Student growth plan');
      else if(st.age <= 60) lines.push('💼 <strong>Track:</strong> Career acceleration plan');
      else lines.push('🌿 <strong>Track:</strong> Legacy & mentoring plan');
    }
    if(st.interests) lines.push(`🎯 <strong>Interests:</strong> ${st.interests}`);
    if(!Number.isNaN(st.time)) lines.push(`⏱️ <strong>Weekly time:</strong> ${st.time}h`);
    if(!Number.isNaN(st.budget)) lines.push(`💸 <strong>Budget:</strong> $${st.budget}/mo`);
    if(messages && messages.length) lines.push(`🧠 <em>${messages.join(' · ')}</em>`);
    return lines.length? lines.map(l=>`<div>${l}</div>`).join('') : '<span class="muted">Fill a few fields and click <strong>Generate Plan</strong>.</span>';
  }

  // Wire inputs
  Object.values(fields).forEach(el=>{ if(!el) return; el.addEventListener('input', ()=>{ const state = readState(); const before = state[el.id]; const positive = (el.value !== '' && el.value !== undefined); rewardField(el.id, positive); runEvaluation(); }); });

  $('submit').addEventListener('click', ()=>{ runEvaluation(); });
  $('undoBtn').addEventListener('click', ()=>{ const st = undo(); if(st) setState(st); });
  $('redoBtn').addEventListener('click', ()=>{ const st = redo(); if(st) setState(st); });

  // Config editor
  function refreshCfg(){ $('configEditor').value = JSON.stringify(rules, null, 2); }
  $('applyCfg').addEventListener('click', ()=>{
    try { const cfg = JSON.parse($('configEditor').value); rules = cfg; localStorage.setItem('masterlogic.rules.v1', JSON.stringify(rules)); location.reload(); }
    catch(e){ alert('Invalid JSON: ' + e.message); }
  });
  $('resetCfg').addEventListener('click', ()=>{ localStorage.removeItem('masterlogic.rules.v1'); location.reload(); });

  // AI Assist button
  $('aiAssist').addEventListener('click', async ()=>{
    const ctx = readState();
    $('aiAssist').disabled = true; $('aiAssist').textContent = 'Thinking…';
    try {
      const sug = await aiSuggest(ctx);
      // merge with engine suggestions and show
      setSuggestions(sug);
      $('explain').textContent = ($('explain').textContent + "\n• AI Assist proposed: " + Object.entries(sug).map(([k,v])=>`${k}(${v.length})`).join(', ')).trim();
    } finally {
      $('aiAssist').disabled = false; $('aiAssist').textContent = 'AI Assist';
    }
  });

  // Initialize
  refreshCfg();
  runEvaluation();

  // Accessibility niceties
  for(const k in containers){ containers[k].setAttribute('role','region'); containers[k].setAttribute('aria-live','polite'); }


  // -------------------------------
  // AI Assist
  // -------------------------------
  

//336dd093-97f9-4903-8356-cba94df0aa1a

  window.AI_SUGGEST = async (ctx) => {
  const res = await fetch("http://localhost:3000/ai-suggest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ctx)
  });
  return await res.json();
};
