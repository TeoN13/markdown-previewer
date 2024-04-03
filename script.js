// markdown previewer interprets carriage returns and renders them as <br> (line break) elements
marked.setOptions({
  breaks: true });


const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "editor-div", style: { position: props.textareaDivPosition, display: props.editorDisplay } }, /*#__PURE__*/
    React.createElement("span", { id: "editor-title" }, "Editor - add your code here", /*#__PURE__*/React.createElement("svg", { id: "editor-title-icon", viewBox: "0 0 512 512", title: "arrow-circle-down" }, /*#__PURE__*/
    React.createElement("path", { d: "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" }))), /*#__PURE__*/

    React.createElement("a", { id: "editor-expand", onClick: props.buttonClick },
    !props.editorExpanded && /*#__PURE__*/
    React.createElement("svg", { className: "expand-icon", viewBox: "0 0 448 512", title: "expand-arrows-alt" }, /*#__PURE__*/
    React.createElement("path", { d: "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z" })),


    props.editorExpanded && /*#__PURE__*/
    React.createElement("svg", { className: "minimize-icon", viewBox: "0 0 512 512", title: "undo" }, /*#__PURE__*/
    React.createElement("path", { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }))), /*#__PURE__*/



    React.createElement("textarea", {
      id: "editor",
      value: props.inputText,
      onChange: props.handleChange,
      style: { height: props.textareaHeight } })));



};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview-div", style: {
        position: props.previewDivPosition,
        display: props.previewDisplay } }, /*#__PURE__*/


    React.createElement("span", { id: "preview-title" }, "Previewer", /*#__PURE__*/React.createElement("svg", { id: "preview-title-icon", viewBox: "0 0 640 512", width: "100", title: "laptop-code" }, /*#__PURE__*/
    React.createElement("path", { d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" }))), /*#__PURE__*/

    React.createElement("a", { id: "preview-expand", onClick: props.buttonClickPreview },
    !props.previewExpanded && /*#__PURE__*/
    React.createElement("svg", { className: "expand-icon", viewBox: "0 0 448 512", title: "expand-arrows-alt" }, /*#__PURE__*/
    React.createElement("path", { d: "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z" })),


    props.previewExpanded && /*#__PURE__*/
    React.createElement("svg", { className: "minimize-icon", viewBox: "0 0 512 512", title: "undo" }, /*#__PURE__*/
    React.createElement("path", { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }))), /*#__PURE__*/



    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize(marked.parse(props.inputText)) },

      style: { height: props.previewHeight } })));



};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: initialText, // Input from editor textarea
      reactDivPosition: 'absolute', // Changes to static when an element is expanded
      // Editor variables
      editorDisplay: 'block', // turn to hidden when PREVIEW expands
      editorExpanded: false, // to check if editor is expanded or not
      textareaDivPosition: 'relative', // turns to fixed when it's expanded
      textareaHeight: '200px', // turns to 100vh when it's expanded
      // Preview variables
      previewDisplay: 'block', // turn to hidden when EDITOR expands
      previewExpanded: false, // to check if editor is expanded or not
      previewDivPosition: 'relative', // turns to fixed when it's expanded
      previewHeight: '400px', // turns to 100vh when it's expanded
      // Main element the DOM-div is in
      mainHeight: '100vh' };

    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.buttonClickPreview = this.buttonClickPreview.bind(this);
  }
  ////////////////////
  // Editor functions
  ////////////////////
  handleChange(event) {
    //console.log('Textarea input is changing!',event.target.value)
    this.setState({
      inputText: event.target.value });

  }
  buttonClick(event) {
    event.preventDefault();
    //console.log('Button was clicked!')
    this.setState({
      editorExpanded: !this.state.editorExpanded, // changes from true to false or other way around
      reactDivPosition: this.state.editorExpanded || this.state.previewExpanded ? 'absolute' : 'static',
      textareaDivPosition: this.state.textareaDivPosition === 'relative' ? 'fixed' : 'relative',
      textareaHeight: this.state.textareaHeight === '200px' ? '100vh' : '200px',
      previewDisplay: this.state.previewDisplay == 'block' ? 'none' : 'block' // hide PREVIEW when editor expands
    });
    //console.log('local variable is:',this.state.editorExpanded)
    //console.log('React-div position changed to:',this.state.reactDivPosition);
  }
  /////////////////////
  // Preview functions
  /////////////////////
  buttonClickPreview(event) {
    //console.log('Preview button was clicked!')
    event.preventDefault();
    this.setState({
      previewExpanded: !this.state.previewExpanded, // changes from true to false or other way around
      reactDivPosition: this.state.editorExpanded || this.state.previewExpanded ? 'absolute' : 'static',
      previewDivPosition: this.state.previewDivPosition === 'relative' ? 'fixed' : 'relative',
      previewHeight: this.state.previewHeight === '400px' ? '96vh' : '400px',
      editorDisplay: this.state.editorDisplay == 'block' ? 'none' : 'block' // hide EDITOR when preview expands
    });
    //console.log('React-div position changed to:',this.state.reactDivPosition);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "React-div", style: {
          position: `${this.state.reactDivPosition}`,
          top: this.state.reactDivPosition === "static" ? 0 : "10%",
          left: this.state.reactDivPosition === "static" ? 0 : "10%" } }, /*#__PURE__*/


      React.createElement(Editor, {
        inputText: this.state.inputText,
        handleChange: this.handleChange,
        buttonClick: this.buttonClick,
        editorExpanded: this.state.editorExpanded,
        textareaDivPosition: this.state.textareaDivPosition,
        textareaHeight: this.state.textareaHeight,
        editorDisplay: this.state.editorDisplay }), /*#__PURE__*/

      React.createElement(Preview, {
        inputText: this.state.inputText,
        previewDisplay: this.state.previewDisplay,
        buttonClickPreview: this.buttonClickPreview,
        previewHeight: this.state.previewHeight })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("DOM-div"));

const textarea = document.getElementById("editor");
const previewDiv = document.getElementById("preview-div");
const preview = document.getElementById("preview");
const main = document.querySelector('main');

let isResizing = false;
let mainHeight = '100vh';

textarea.previousOffsetHeight = textarea.offsetHeight;

textarea.addEventListener("mousedown", () => {
  isResizing = true;
});

textarea.addEventListener("mouseup", () => {
  isResizing = false;
});

function keepDistance() {
  if (isResizing) {
    // Check if the height of the textarea has changed
    //console.log('HERE')
    //console.log('Textarea height was ',textarea.previousOffsetHeight)
    if (textarea.offsetHeight !== textarea.previousOffsetHeight) {
      // Update the position of the other elements on the page
      //console.log('HEEEEEEEEEEERRRREEEEEE')
      //console.log('Textarea height is now',textarea.offsetHeight)
      previewDiv.style.marginTop = `${textarea.offsetHeight - 200}px`;
    }
    // Save the current height of the textarea for comparison
    textarea.previousOffsetHeight = textarea.offsetHeight;

    // Fix main element height
    // It should be textatea height + preview height + some space for the top and bottom of the page
    mainHeight = textarea.offsetHeight + previewDiv.scrollHeight + 100; // 100 pixels for top and bottom margins
    main.style.height = `${mainHeight}px`;
    console.log('Main element is now ', mainHeight, ' px high');
  }
}

textarea.addEventListener("mousemove", keepDistance);

// Fix height when textarea was manually dragged down and then expanded 
const ancestorElement = document.getElementById('editor-expand'); // for the editor
const ancestorElement2 = document.getElementById('preview-expand'); // for the preview

ancestorElement.addEventListener('click', event => {
  if (event.target.matches('.minimize-icon')) {
    setTimeout(() => {
      //console.log('Minimize icon was clicked!');
      previewDiv.style.marginTop = `${textarea.offsetHeight - 200}px`;
      textarea.previousOffsetHeight = textarea.offsetHeight;
      mainHeight = textarea.offsetHeight + previewDiv.scrollHeight + 100; // 100 pixels for top and bottom margins
      main.style.height = `${mainHeight}px`;
    }, 10);
  }
});

ancestorElement2.addEventListener('click', event => {
  if (event.target.matches('.minimize-icon')) {
    setTimeout(() => {
      //console.log('Minimize icon was clicked!');
      previewDiv.style.marginTop = `${textarea.offsetHeight - 200}px`;
      textarea.previousOffsetHeight = textarea.offsetHeight;
      mainHeight = textarea.offsetHeight + previewDiv.scrollHeight + 100; // 100 pixels for top and bottom margins
      main.style.height = `${mainHeight}px`;
    }, 10);
  }
});