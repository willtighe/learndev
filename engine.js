/*
 * engine.js
 *
 * Responsible for all runtime logic:
 * - Reading and advancing through STAGES defined in content.js
 * - Rendering the current stage to the DOM
 * - Handling user input and evaluating answers
 * - Tracking progress and score state
 * - Transitioning between stages (correct / incorrect / next)
 */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  showScreen('map-screen');
  renderMap();
}

function renderMap() {
  const container = document.getElementById('map-container');
  container.innerHTML = '';

  STAGES.forEach((stage, index) => {
    // Connector line above every node except the first
    if (index > 0) {
      const connector = document.createElement('div');
      connector.className = 'node-connector';
      container.appendChild(connector);
    }

    const node = document.createElement('div');
    node.className = 'stage-node';
    if (!stage.unlocked) {
      node.style.opacity = '0.35';
    }

    const circle = document.createElement('div');
    circle.className = 'node-circle' + (stage.unlocked ? ' unlocked' : '');
    circle.textContent = stage.unlocked ? stage.icon : '🔒';

    if (stage.unlocked) {
      circle.style.cursor = 'pointer';
      circle.addEventListener('click', () => selectStage(stage.id));
    }

    const label = document.createElement('div');
    label.className = 'node-label';
    label.textContent = stage.title;

    node.appendChild(circle);
    node.appendChild(label);
    container.appendChild(node);
  });
}

const stageState = {
  currentStageId: null,
  currentSlideIndex: 0,
  currentPhase: 'learn'  // "learn" | "reference" | "matching" | "quiz"
};

const matchState = {
  currentRound: 0,
  solved: 0,
  selectedTerm: null
};

function selectStage(id) {
  stageState.currentStageId = id;
  stageState.currentSlideIndex = 0;
  stageState.currentPhase = 'learn';
  showScreen('stage-screen');
  renderStageHeader();
  renderCurrentSlide();
}

function showMap() {
  showScreen('map-screen');
  renderMap();
}

function renderStageHeader() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const total = stage.slides ? stage.slides.length : 0;
  document.getElementById('stage-title').textContent = stage.title;
  document.getElementById('stage-phase').textContent =
    total > 0 ? `Slide ${stageState.currentSlideIndex + 1} of ${total}` : 'LEARN';
}

function renderCurrentSlide() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const content = document.getElementById('stage-content');
  const slide = document.createElement('div');
  slide.className = 'slide';

  if (!stage.slides || stage.slides.length === 0) {
    const heading = document.createElement('h2');
    heading.textContent = stage.title;
    const body = document.createElement('p');
    body.textContent = `Slide ${stageState.currentSlideIndex + 1} — content coming soon`;
    const phase = document.createElement('p');
    phase.textContent = stageState.currentPhase.toUpperCase();
    slide.appendChild(heading);
    slide.appendChild(body);
    slide.appendChild(phase);
  } else {
    const data = stage.slides[stageState.currentSlideIndex];

    if (data.type === 'text') {
      const headline = document.createElement('h2');
      headline.className = 'slide-headline';
      headline.textContent = data.headline;
      const body = document.createElement('p');
      body.className = 'slide-body';
      body.textContent = data.body;
      slide.appendChild(headline);
      slide.appendChild(body);

    } else if (data.type === 'analogy') {
      const visual = document.createElement('div');
      visual.className = 'slide-visual';
      visual.textContent = data.visual;
      const headline = document.createElement('h2');
      headline.className = 'slide-headline';
      headline.textContent = data.headline;
      const body = document.createElement('p');
      body.className = 'slide-body';
      body.textContent = data.body;
      slide.appendChild(visual);
      slide.appendChild(headline);
      slide.appendChild(body);

    } else if (data.type === 'fact') {
      const fact = document.createElement('div');
      fact.className = 'slide-fact';
      fact.textContent = data.text;
      slide.appendChild(fact);

    } else if (data.type === 'image') {
      const headline = document.createElement('h2');
      headline.className = 'slide-headline';
      headline.textContent = data.headline;
      const img = document.createElement('img');
      img.src = data.src;
      img.style.width = '100%';
      img.style.borderRadius = '8px';
      const caption = document.createElement('p');
      caption.className = 'slide-caption';
      caption.textContent = data.caption;
      slide.appendChild(headline);
      slide.appendChild(img);
      slide.appendChild(caption);
    }
  }

  content.innerHTML = '';
  content.appendChild(slide);
}

function showReference() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  document.getElementById('ref-stage-name').textContent = stage.title;

  const grid = document.getElementById('ref-cards');
  grid.innerHTML = '';

  (stage.reference || []).forEach(item => {
    const card = document.createElement('div');
    card.className = 'ref-card';

    const term = document.createElement('p');
    term.className = 'ref-term';
    term.textContent = item.term;

    const def = document.createElement('p');
    def.className = 'ref-definition';
    def.textContent = item.definition;

    card.appendChild(term);
    card.appendChild(def);
    grid.appendChild(card);
  });

  showScreen('reference-screen');
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startMatching() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  matchState.currentRound = 0;
  matchState.solved = 0;
  matchState.selectedTerm = null;
  renderMatchRound();
  showScreen('matching-screen');
}

function renderMatchRound() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const round = stage.matching[matchState.currentRound];
  const totalRounds = stage.matching.length;

  document.getElementById('match-round').textContent =
    `Round ${matchState.currentRound + 1} of ${totalRounds}`;

  const shuffledTerms = shuffle(round.pairs);
  const shuffledDefs  = shuffle(round.pairs);

  const termsContainer = document.getElementById('match-terms');
  const defsContainer  = document.getElementById('match-definitions');
  termsContainer.innerHTML = '';
  defsContainer.innerHTML  = '';
  document.getElementById('match-status').textContent = '';
  document.getElementById('match-next').style.display = 'none';

  shuffledTerms.forEach(pair => {
    const el = document.createElement('div');
    el.className    = 'match-term';
    el.dataset.term = pair.term;
    el.draggable    = true;
    el.textContent  = pair.term;

    el.addEventListener('dragstart', e => {
      matchState.selectedTerm = el;
      el.classList.add('dragging');
      e.dataTransfer.setData('text/plain', pair.term);
    });

    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
    });

    el.addEventListener('click', () => selectTerm(el));

    termsContainer.appendChild(el);
  });

  shuffledDefs.forEach(pair => {
    const el = document.createElement('div');
    el.className      = 'match-definition';
    el.dataset.match  = pair.match;
    el.textContent    = pair.match;

    el.addEventListener('dragover', e => {
      e.preventDefault();
      el.classList.add('drag-over');
    });

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over');
    });

    el.addEventListener('drop', e => {
      el.classList.remove('drag-over');
      const termText = e.dataTransfer.getData('text/plain');
      const termEl   = document.querySelector(`.match-term[data-term="${CSS.escape(termText)}"]`);
      if (termEl) checkMatch(termEl, el);
    });

    el.addEventListener('click', () => dropOnDefinition(el));

    defsContainer.appendChild(el);
  });
}

function selectTerm(el) {
  if (el.classList.contains('correct')) return;
  if (matchState.selectedTerm) {
    matchState.selectedTerm.classList.remove('selected');
  }
  matchState.selectedTerm = el;
  el.classList.add('selected');
}

function dropOnDefinition(el) {
  if (el.classList.contains('correct')) return;
  if (!matchState.selectedTerm) return;
  checkMatch(matchState.selectedTerm, el);
  matchState.selectedTerm = null;
}

function checkMatch(termEl, defEl) {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const round = stage.matching[matchState.currentRound];
  const term  = termEl.dataset.term || termEl.textContent;
  const pair  = round.pairs.find(p => p.term === term);

  if (pair && pair.match === defEl.dataset.match) {
    termEl.classList.add('correct');
    defEl.classList.add('correct');
    termEl.classList.remove('selected');
    matchState.selectedTerm = null;
    matchState.solved += 1;
    document.getElementById('match-status').textContent = '✓ Correct!';
    checkRoundComplete();
  } else {
    termEl.classList.add('wrong');
    defEl.classList.add('wrong');
    document.getElementById('match-status').textContent = '✗ Try again';
    setTimeout(() => {
      termEl.classList.remove('wrong');
      defEl.classList.remove('wrong');
      document.getElementById('match-status').textContent = '';
      termEl.classList.remove('selected');
      matchState.selectedTerm = null;
    }, 800);
  }
}

function checkRoundComplete() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const round = stage.matching[matchState.currentRound];

  if (matchState.solved >= round.pairs.length) {
    if (matchState.currentRound + 1 < stage.matching.length) {
      setTimeout(() => {
        matchState.currentRound += 1;
        matchState.solved = 0;
        renderMatchRound();
      }, 800);
    } else {
      document.getElementById('match-status').textContent = '✓ All matched! Ready for the quiz.';
      const nextBtn = document.getElementById('match-next');
      nextBtn.style.display = 'block';
      nextBtn.onclick = startQuiz;
    }
  }
}

function startQuiz() {
  console.log('Quiz starting');
}

function stageNext() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const lastIndex = stage.slides ? stage.slides.length - 1 : 0;
  if (stageState.currentSlideIndex >= lastIndex) {
    showReference();
    return;
  }
  stageState.currentSlideIndex += 1;
  renderStageHeader();
  renderCurrentSlide();
}

function stagePrev() {
  stageState.currentSlideIndex = Math.max(0, stageState.currentSlideIndex - 1);
  renderStageHeader();
  renderCurrentSlide();
}

// Entry point
showScreen('splash');
