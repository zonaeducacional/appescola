const portalScript = document.currentScript;

if (portalScript) {
  const siteRoot = new URL('../', portalScript.src);
  const navigation = document.createElement('nav');
  navigation.className = 'portal-shortcuts';
  navigation.setAttribute('aria-label', "Navegação EDOCENTIA");

  [
    { href: 'index.html', label: 'EDOCENTIA' },
    { href: 'apps.html', label: "Biblioteca aberta" },
    { href: 'https://curiousminds123.github.io/APP-NOTICIAS/', label: "Observatório de IA", external: true }
  ].forEach(({ href, label, external }) => {
    const link = document.createElement('a');
    link.href = external ? href : new URL(href, siteRoot).href;
    if (external) {
      link.target = '_blank';
      link.rel = 'noopener';
    }
    link.textContent = label;
    navigation.append(link);
  });

  document.body.append(navigation);

  // Pie de página unificado para todos los módulos y herramientas
  const portalFooter = document.createElement('footer');
  portalFooter.className = 'portal-footer-bar';
  portalFooter.innerHTML = "<div class=\"portal-footer-inner\"><span>Criado por<strong>Ana H. Iranzo</strong>, auxiliada com IA.</span>·<a href=\"" + new URL('index.html', siteRoot).href + "\">EDOCENTIA</a>· Biblioteca<a href=\"" + new URL('apps.html', siteRoot).href + "\"></a>·<a href=\"https://curiousminds123.github.io/APP-NOTICIAS/\" target=\"_blank\" rel=\"noopener\">Observatório IA</a>·<a href=\"https://forms.cloud.microsoft/e/3y0R4JnkGf\" target=\"_blank\" rel=\"noopener\">Carregar materiais</a>·<a href=\"https://t.me/+F0qGBNdHTVowZjI0\" target=\"_blank\" rel=\"noopener\">Comunidade de telegramas</a></div>";
  document.body.append(portalFooter);
}
