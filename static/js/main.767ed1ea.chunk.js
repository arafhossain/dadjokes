(this.webpackJsonpdadjokes=this.webpackJsonpdadjokes||[]).push([[0],{24:function(e,t,s){e.exports=s(53)},29:function(e,t,s){},30:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s.n(o),n=s(18),r=s.n(n),i=(s(29),s(30),s(19)),c=s(8),l=s.n(c),u=s(23),p=s(20),m=s(2),h=s(3),k=s(7),d=s(5),f=s(4),v=s(6),j=s(21),g=s.n(j),b=(s(49),s(50),function(e){function t(){return Object(m.a)(this,t),Object(k.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FFD700":this.props.votes>=-3?"#FF8C00":this.props.votes<-3?"#FF6347":void 0}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smile":this.props.votes>=6?"em em-grinning":this.props.votes>=3?"em em-slightly_smiling_face":this.props.votes>=0?"em em-neutral_face":this.props.votes>=-3?"em em-anguished":this.props.votes>=-6?"em em-face_with_raised_eyebrow":this.props.votes<-6?"em em-angry":void 0}},{key:"render",value:function(){return a.a.createElement("div",{className:"Joke"},a.a.createElement("div",{className:"Joke-buttons"},a.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upVote}),a.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),a.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downVote})),a.a.createElement("div",{className:"Joke-text"},this.props.text),a.a.createElement("div",{className:"Joke-smiley"},a.a.createElement("i",{className:this.getEmoji(),"aria-label":"ROLLING ON THE FLOOR LAUGHING"})))}}]),t}(o.Component)),O=s(22),y=s.n(O);function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}var J=function(e){function t(e){var s;return Object(m.a)(this,t),(s=Object(k.a)(this,Object(d.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoading:!1},s.currentJokes=new Set(s.state.jokes.map((function(e){return e.joke}))),s.handleClick=s.handleClick.bind(Object(f.a)(s)),s}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,s,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numJokesToGet)){e.next=8;break}return e.next=4,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 4:s=e.sent,this.currentJokes.has(s.data.joke)||t.push({joke:s.data.joke,votes:0,id:y()()}),e.next=1;break;case 8:this.setState((function(e){return{isLoading:!1,jokes:[].concat(Object(u.a)(e.jokes),t)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(s,!0).forEach((function(t){Object(i.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},s,{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({isLoading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.isLoading)return a.a.createElement("div",{className:"JokeList-loading"},a.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),a.a.createElement("h1",{className:"JokeList-title"},"Loading"));var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return a.a.createElement("div",{className:"JokeList"},a.a.createElement("div",{className:"JokeList-sidebar"},a.a.createElement("h1",{className:"JokeList-title"},a.a.createElement("span",null,"Dad")," Jokes"),a.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"laugh emoji"}),a.a.createElement("button",{className:"Jokelist-getJoke",onClick:this.handleClick},"More Jokes")),a.a.createElement("div",{className:"JokeList-jokes"},t.map((function(t){return a.a.createElement(b,{votes:t.votes,text:t.joke,key:t.id,id:t.id,upVote:function(){return e.handleVote(t.id,1)},downVote:function(){return e.handleVote(t.id,-1)}})}))))}}]),t}(o.Component);J.defaultProps={numJokesToGet:10};var w=J;var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(w,null))};r.a.render(a.a.createElement(N,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.767ed1ea.chunk.js.map