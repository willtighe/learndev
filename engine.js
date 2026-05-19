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
  document.getElementById('stage-title').textContent = stage.title;
  document.getElementById('stage-phase').textContent = 'LEARN';
}

function renderCurrentSlide() {
  const stage = STAGES.find(s => s.id === stageState.currentStageId);
  const content = document.getElementById('stage-content');

  const slide = document.createElement('div');
  slide.className = 'slide';

  const heading = document.createElement('h2');
  heading.textContent = stage.title;

  const body = document.createElement('p');
  body.textContent = `Slide ${stageState.currentSlideIndex + 1} — content coming soon`;

  const phase = document.createElement('p');
  phase.textContent = stageState.currentPhase.toUpperCase();

  slide.appendChild(heading);
  slide.appendChild(body);
  slide.appendChild(phase);

  content.innerHTML = '';
  content.appendChild(slide);
}

function stageNext() {
  stageState.currentSlideIndex += 1;
  renderCurrentSlide();
}

function stagePrev() {
  stageState.currentSlideIndex = Math.max(0, stageState.currentSlideIndex - 1);
  renderCurrentSlide();
}

// Entry point
showScreen('splash');
