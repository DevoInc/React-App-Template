import mustache from 'mustache';

const templateHtml = `
<html lang="en">
<head></head>
<body>
    <div id="app" class="devo-app"></div>
</body>
</html>`;

const generateHtml = (template) => {
  const composedTemplate = { ...template.devoApp };
  return mustache.render(templateHtml, composedTemplate);
};

export default generateHtml;
