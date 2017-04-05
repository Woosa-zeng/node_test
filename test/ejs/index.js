const path = require('path');
const ejs = require('ejs');

// console.log(ejs);

const html = `hello
	<% if(world.match('j')){ %>
	<%- world %>
	<% } %>
	<%- include('./test') %>
	<%= hhh %>`;
// ===> (locals) => 'hello' + locals.world

const f1 = ejs.compile(html,{
	filename: path.resolve(__filename),
	compileDebug: true
});
const finalStr = f1({
	world: 'xxx',
	hhh: '<script>alert(1)</script>'
});
console.log('_____', finalStr);

/**
 * <% %>逻辑
 * <%- %> unescape
 * <%= %> escape  XSS
 */