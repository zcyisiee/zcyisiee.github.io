/* extra MathJax macros -------------------------------------------------- */
// 主要是自定义了一个热力学中的符号dbar
window.MathJax = window.MathJax || {};
window.MathJax.tex = window.MathJax.tex || {};
window.MathJax.tex.macros = Object.assign(
  {
    /*  ← 你的宏表 */
    dbar: '\\rlap{\\raise1.2ex\\hbox{\\kern0.08em\\rule{0.35em}{0.06em}}}d',
  },
  window.MathJax.tex.macros || {}
);
