//<Erik 12-5-17>
// Commment box
// Not sure why, but this block of JSX syntax code only works with .JS file types. 
// wwwRoot does not recognioce .JSX at all, and if you use js syntax in the.JS it wont render the react code. 
// tutorial.jsx + React code with js syntax = no render and jsx file type is not seen by wwwRoot.
// tutorial.jsx + React code with jsx syntax = no render and jsx file type is not seen by wwwRoot.
// tutorial.js + React code with js syntax = no render but js file type works with wwwRoot.
// tutorial.js + React code with jsx syntax = Render. 
var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            React.createElement('div', { className: "commentBox" },
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);

//var CommentBox = React.createClass({
//    render: function () {
//        return (
//            <div className="commentBox">
//                Hello, world! I am a CommentBox.
//      </div>
//        );
//    }
//});
//ReactDOM.render(
//    <CommentBox />,
//    document.getElementById('content')
//);