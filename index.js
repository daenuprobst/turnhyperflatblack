exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#ecf0f1',
    backgroundColor: '#2c3e50',
    borderColor: '#34495e',
    colors: {
      black: '#2c3e50',
      red: '#c0392b',
      green: '#27ae60',
      yellow: '#f39c12',
      blue: '#2980b9',
      magenta: '#8e44ad',
      cyan: '#16a085',
      white: '#bdc3c7',
      lightBlack: '#34495e',
      lightRed: '#e74c3c',
      lightGreen: '#2ecc71',
      lightYellow: '#f1c40f',
      lightBlue: '#3498db',
      lightMagenta: '#9b59b6',
      lightCyan: '#1abc9c',
      lightWhite: '#ecf0f1'
    },
    padding: '6px 6px',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #16a085;
      }
      .tabs_nav .tabs_title {
        color: #16a085;
      }
    `
  });
}
