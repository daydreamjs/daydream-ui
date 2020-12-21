const path = require('path')

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    }],
    // eslint-disable-next-line no-unused-vars
    actions: () => [
      {
        type: 'add',
        path: path.join(__dirname, 'src/{{pascalCase name}}/{{pascalCase name}}.tsx'),
        templateFile: path.join(__dirname, 'plop-templates/Component/Component.tsx.hbs'),
      },
      {
        type: 'add',
        path: path.join(__dirname, 'src/{{pascalCase name}}/index.ts'),
        templateFile: path.join(__dirname, 'plop-templates/Component/index.ts.hbs'),
      },
      {
        type: 'add',
        path: path.join(__dirname, 'stories/{{pascalCase name}}/{{pascalCase name}}.stories.tsx'),
        templateFile: path.join(__dirname, 'plop-templates/Component/docs/stories.tsx.hbs'),
      },
      {
        type: 'add',
        path: path.join(__dirname, 'stories/{{pascalCase name}}/Playground.tsx'),
        templateFile: path.join(__dirname, 'plop-templates/Component/docs/Playground.tsx.hbs'),
      },
      {
        type: 'add',
        path: path.join(__dirname, 'stories/{{pascalCase name}}/docs.mdx'),
        templateFile: path.join(__dirname, 'plop-templates/Component/docs/docs.mdx.hbs'),
      },
      {
        type: 'append',
        path: path.join(__dirname, 'src/index.tsx'),
        templateFile: path.join(__dirname, 'plop-templates/Component/src/index.tsx.hbs'),
      },
    ],
  })
}
