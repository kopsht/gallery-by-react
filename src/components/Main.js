require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas=require('../data/imgDatas.json')

imageDatas=(function getImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImaeData=imageDatasArr[i];

    singleImaeData.imageURL=require('../images/' + singleImaeData.fileName)
    imageDatasArr[i]=singleImaeData
  }
  return imageDatasArr
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-src"></section>
        <nav className="controller"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
