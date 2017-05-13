module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Components',
      content: 'docs/components.md',
      components: '../src/*.tsx'
    }
  ]
};
