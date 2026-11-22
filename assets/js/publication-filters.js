(() => {
  const filters = document.querySelector('.publication-filters');
  const list = document.querySelector('#publication-list');
  const toggle = document.querySelector('.publication-toggle');
  const buttons = filters.querySelectorAll('button[data-filter]');
  const publications = [...list.querySelectorAll('.paper-box[data-publication-category]')];
  const previewLimit = 4;
  let category = 'all';
  let expanded = false;

  function render() {
    const matching = publications.filter((publication) =>
      category === 'all' || publication.dataset.publicationCategory === category
    );
    const preview = expanded ? null : matching[previewLimit];
    const visible = new Set(expanded ? matching : matching.slice(0, previewLimit + 1));

    publications.forEach((publication) => {
      publication.hidden = !visible.has(publication);
      publication.classList.toggle('paper-box--preview', publication === preview);
      publication.inert = publication === preview;
    });

    toggle.hidden = matching.length <= previewLimit;
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.textContent = expanded ? 'Click to collapse' : 'Click to expand';
  }

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    render();
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      buttons.forEach((option) => {
        option.setAttribute('aria-pressed', String(option === button));
      });
      render();
    });
  });

  render();
  filters.hidden = false;
})();
