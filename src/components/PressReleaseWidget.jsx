import React, { useEffect } from 'react';

function PressReleaseWidget() {


 useEffect(() => {
    
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-04-13&sortBy=publishedAt&apiKey=f7dcbef118f54930afe072411d4eb061')
        .then(res => res.json())
        .then(data => console.log(data.articles))
        .catch(err => console.log(err))
 }, [])
 

  return (
    <div id="press-release-widget"></div>
  );
}

export default PressReleaseWidget;
