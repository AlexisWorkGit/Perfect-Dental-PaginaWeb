!function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";if(!window.postMessage)return t;var i=t.prototype;e.extend(i.options,{youTubeVideoIdProperty:"youtube",youTubePlayerVars:{wmode:"transparent"},youTubeClickToPlay:!1});var a=i.textFactory||i.imageFactory,o=function(e,t,i){this.videoId=e,this.playerVars=t,this.clickToPlay=i,this.element=document.createElement("div"),this.listeners={}};return e.extend(o.prototype,{on:function(e,t){return this.listeners[e]=t,this},loadAPI:function(){var e,t=this,i=window.onYouTubeIframeAPIReady,a="https://www.youtube.com/iframe_api",o=document.getElementsByTagName("script"),s=o.length;for(window.onYouTubeIframeAPIReady=function(){i&&i.apply(this),t.playOnReady&&t.play()};s;)if(o[s-=1].src===a)return;(e=document.createElement("script")).src=a,o[0].parentNode.insertBefore(e,o[0])},onReady:function(){this.ready=!0,this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},onStateChange:function(e){switch(window.clearTimeout(this.pauseTimeout),e.data){case YT.PlayerState.PLAYING:this.hasPlayed=!0,this.onPlaying();break;case YT.PlayerState.UNSTARTED:case YT.PlayerState.PAUSED:this.pauseTimeout=i.setTimeout.call(this,this.onPause,null,500);break;case YT.PlayerState.ENDED:this.onPause()}},onError:function(e){this.listeners.error(e)},play:function(){var e=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.playVideo():(this.playOnReady=!0,window.YT&&YT.Player?this.player||(this.player=new YT.Player(this.element,{videoId:this.videoId,playerVars:this.playerVars,events:{onReady:function(){e.onReady()},onStateChange:function(t){e.onStateChange(t)},onError:function(t){e.onError(t)}}})):this.loadAPI())},pause:function(){this.ready?this.player.pauseVideo():this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),e.extend(i,{YouTubePlayer:o,textFactory:function(e,t){var i=this.options,s=this.getItemProperty(e,i.youTubeVideoIdProperty);return s?(void 0===this.getItemProperty(e,i.urlProperty)&&(e[i.urlProperty]="https://www.youtube.com/watch?v="+s),void 0===this.getItemProperty(e,i.videoPosterProperty)&&(e[i.videoPosterProperty]="https://img.youtube.com/vi/"+s+"/maxresdefault.jpg"),this.videoFactory(e,t,new o(s,i.youTubePlayerVars,i.youTubeClickToPlay))):a.call(this,e,t)}}),t});