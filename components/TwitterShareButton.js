import React from 'react';

function TwitterShareButton({ title, url, hashtags }) {
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
        <>
            <button onClick={handleClick} className="twitter-share-button" style={{ borderRadius: '20px', backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src="/x_logo.svg" alt="Share Icon" style={{ marginRight: '10px', width: '20px', height: '20px'  }} />
                ポスト
            </button>
        </>
    );
}

export default TwitterShareButton;
