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

const quizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false
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
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  quizState.questions = shuffle(stage.quiz || []).slice(0, 8);
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answered = false;

  // Rebuild screen structure — handles first load and TRY AGAIN after results view
  const screen = document.getElementById('quiz-screen');
  screen.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-progress" id="quiz-progress"></span>
      <span class="quiz-score" id="quiz-score"></span>
    </div>
    <div class="question-box">
      <div class="quiz-type-label" id="quiz-type-label"></div>
      <p class="question-text" id="quiz-question"></p>
    </div>
    <div class="quiz-answers" id="quiz-answers"></div>
    <div class="quiz-feedback" id="quiz-feedback" style="display: none;">
      <div class="quiz-feedback-banner" id="quiz-feedback-banner"></div>
      <p class="quiz-feedback-explanation" id="quiz-feedback-explanation"></p>
      <button class="btn-primary" id="quiz-next">NEXT →</button>
    </div>
  `;
  document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);

  showScreen('quiz-screen');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;

  document.getElementById('quiz-progress').textContent =
    `Question ${quizState.currentIndex + 1} of ${total}`;
  document.getElementById('quiz-score').textContent =
    `Score: ${quizState.score}`;

  const typeLabels = {
    'multiple-choice': 'MULTIPLE CHOICE',
    'true-false':      'TRUE OR FALSE',
    'fill-blank':      'FILL IN THE BLANK'
  };
  document.getElementById('quiz-type-label').textContent = typeLabels[q.type] || '';

  const questionEl = document.getElementById('quiz-question');
  if (q.type === 'fill-blank') {
    questionEl.innerHTML = q.question.replace(
      '___',
      '<span style="border-bottom: 2px solid var(--border-active); padding: 0 8px; color: var(--border-active);">___</span>'
    );
  } else {
    questionEl.textContent = q.question;
  }

  const answersEl = document.getElementById('quiz-answers');
  answersEl.innerHTML = '';
  document.getElementById('quiz-feedback').style.display = 'none';
  quizState.answered = false;

  if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
    answersEl.classList.add('multiple-choice');
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'quiz-answer-btn';
      btn.textContent = option;
      btn.addEventListener('click', () => submitQuizAnswer(btn, q.answer));
      answersEl.appendChild(btn);
    });

  } else if (q.type === 'true-false') {
    answersEl.classList.remove('multiple-choice');
    ['TRUE', 'FALSE'].forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'quiz-answer-btn';
      btn.textContent = label;
      btn.style.width  = '140px';
      btn.style.margin = '0 auto';
      btn.addEventListener('click', () => submitQuizAnswer(btn, q.answer));
      answersEl.appendChild(btn);
    });
  }
}

function submitQuizAnswer(btnEl, correctAnswer) {
  if (quizState.answered) return;
  quizState.answered = true;

  document.querySelectorAll('#quiz-answers .quiz-answer-btn').forEach(btn => {
    btn.disabled = true;
  });

  const chosen  = btnEl.textContent.trim().toLowerCase();
  const correct = correctAnswer.trim().toLowerCase();
  const q       = quizState.questions[quizState.currentIndex];
  const banner  = document.getElementById('quiz-feedback-banner');

  if (chosen === correct) {
    btnEl.classList.add('correct');
    quizState.score += 1;
    banner.textContent = '> CORRECT';
    banner.className   = 'quiz-feedback-banner correct';
  } else {
    btnEl.classList.add('wrong');
    document.querySelectorAll('#quiz-answers .quiz-answer-btn').forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === correct) {
        btn.classList.add('correct');
      }
    });
    banner.textContent = '> WRONG';
    banner.className   = 'quiz-feedback-banner wrong';
  }

  document.getElementById('quiz-feedback-explanation').textContent = q.explanation;

  const isLast = quizState.currentIndex >= quizState.questions.length - 1;
  document.getElementById('quiz-next').textContent =
    isLast ? '> SEE RESULTS' : '> NEXT QUESTION';

  document.getElementById('quiz-feedback').style.display = 'block';
}

function nextQuizQuestion() {
  if (quizState.currentIndex >= quizState.questions.length - 1) {
    showQuizResults();
  } else {
    quizState.currentIndex += 1;
    renderQuizQuestion();
  }
}

function showQuizResults() {
  const screen     = document.getElementById('quiz-screen');
  const total      = quizState.questions.length;
  const passed     = quizState.score >= 6;
  const stageIndex = STAGES.findIndex(s => s.id === stageState.currentStageId);
  const nextStage  = stageIndex !== -1 && stageIndex + 1 < STAGES.length
    ? STAGES[stageIndex + 1] : null;

  if (passed && nextStage) {
    nextStage.unlocked = true;
  }

  screen.innerHTML = '';

  // ── Heading ────────────────────────────────────────
  const heading = document.createElement('h2');
  if (passed) {
    heading.textContent  = 'STAGE COMPLETE';
    heading.style.cssText =
      'color: var(--green); font-size: 1.8rem; letter-spacing: 0.15em; margin: 0 0 24px;' +
      'text-shadow: 0 0 20px rgba(63,185,80,0.4);';
  } else {
    heading.textContent  = 'QUIZ FAILED';
    heading.style.cssText =
      'color: var(--red); font-size: 1.8rem; letter-spacing: 0.15em; margin: 0 0 24px;';
  }

  // ── Score display ──────────────────────────────────
  const scoreWrap = document.createElement('div');
  scoreWrap.style.cssText = 'text-align: center; margin-bottom: 8px;';

  const scoreBig = document.createElement('p');
  scoreBig.className   = 'results-score-big';
  scoreBig.textContent = `${quizState.score} / ${total}`;
  if (!passed) scoreBig.style.color = 'var(--red)';

  const scoreLabel = document.createElement('p');
  scoreLabel.className   = 'results-score-label';
  scoreLabel.textContent = 'correct';

  scoreWrap.appendChild(scoreBig);
  scoreWrap.appendChild(scoreLabel);

  // ── Info box ───────────────────────────────────────
  const infoBox = document.createElement('div');

  if (passed) {
    infoBox.className = 'results-achievement-box';

    const line1 = document.createElement('p');
    line1.style.cssText = 'color: var(--green); font-size: 0.9rem; margin: 0;';
    line1.textContent   = `✓ STAGE UNLOCKED: ${nextStage ? nextStage.title.toUpperCase() : 'NEXT STAGE'}`;

    const line2 = document.createElement('p');
    line2.style.cssText = 'color: var(--text-secondary); font-size: 0.85rem; margin-top: 8px; margin-bottom: 0;';
    line2.textContent   = `Next up: ${nextStage ? nextStage.title : 'Next stage'}`;

    infoBox.appendChild(line1);
    infoBox.appendChild(line2);
  } else {
    infoBox.className = 'results-fail-box';

    const msg = document.createElement('p');
    msg.style.cssText = 'color: var(--red); font-size: 0.9rem; margin: 0;';
    msg.textContent   = 'Score 6 or higher to unlock the next stage.';

    infoBox.appendChild(msg);
  }

  // ── Buttons ────────────────────────────────────────
  const btnRow = document.createElement('div');
  btnRow.className = 'results-btn-row';

  if (passed) {
    const mapBtn = document.createElement('button');
    mapBtn.className   = 'btn-primary';
    mapBtn.textContent = 'BACK TO MAP →';
    mapBtn.addEventListener('click', showMap);
    btnRow.appendChild(mapBtn);
  } else {
    const retryBtn = document.createElement('button');
    retryBtn.className   = 'btn-primary';
    retryBtn.textContent = 'TRY AGAIN →';
    retryBtn.addEventListener('click', startQuiz);

    const mapBtn = document.createElement('button');
    mapBtn.className   = 'btn-secondary';
    mapBtn.textContent = '← BACK TO MAP';
    mapBtn.addEventListener('click', showMap);

    btnRow.appendChild(retryBtn);
    btnRow.appendChild(mapBtn);
  }

  screen.appendChild(heading);
  screen.appendChild(scoreWrap);
  screen.appendChild(infoBox);
  screen.appendChild(btnRow);
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
