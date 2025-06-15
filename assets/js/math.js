// 创建文件: /assets/js/math.js
window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    macros: {
      dbar: ['\\mathbf{đ}', 0],
    },
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
    tags: 'ams', // 'none' 或 'ams' 或 'all'
    tagSide: 'right',
    tagIndent: '0.8em',
    useLabelIds: true,
    multlineWidth: '85%',
  },
  options: {
    renderActions: {
      addMenu: [0, '', ''],
    },
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
  },
  svg: {
    fontCache: 'global', // 提高性能
  },
};
