// TwitterShareButton.js
import React, { useEffect } from 'react';

function TwitterShareButton({ title, url, hashtags }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
        const width = 550;
        const height = 300;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        window.open(tweetUrl, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
    };

    return (
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`}
           className="twitter-share-button"
           data-size="large"
           data-show-count="false"
           onClick={handleClick}>
            Tweet
        </a>
    );
}

export default TwitterShareButton;
