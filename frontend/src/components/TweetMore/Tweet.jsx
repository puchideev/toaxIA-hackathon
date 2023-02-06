import React from 'react'
import './Tweet.style.css'
function Tweet({ tweet, profileURL }) {
  const confidences = tweet.tweetMore

  console.log('tweet', tweet)

  return (
    <div>
      {confidences.Positivo.confidence !== 0 ?
      <div>
          <p>Tweet de caracter mas positivo:</p>
        <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="tweet-header">
              <img className='rounded-full width-20 h-20' src={profileURL} alt="timeline" />
          </div>
          <div className="tweet-content">{confidences.Positivo.input}</div>
        </div> 
        </div>: null}
      {confidences.Toxico.confidence !== 0 ?
      <div>
          <p>Tweet de caracter mas Toxico:</p>
        <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="tweet-header">
            <img className='rounded-full width-20 h-20' src={profileURL} alt="timeline" />
          </div>
          <div className="tweet-content">{confidences.Toxico.input}</div>
        </div> 
        </div>: null}
      {confidences.Developer.confidence !== 0 ?
      <div>
          <p>Tweet de caracter mas Developer:</p>
        <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="tweet-header">
            <img className='rounded-full width-20 h-20' src={profileURL} alt="timeline" />
          </div>
          <div className="tweet-content">{confidences.Developer.input}</div>
        </div> </div> : null}
      {confidences.Gamer.confidence !== 0 ?
      <div>
          <p>Tweet de caracter mas Gamer:</p>
        <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="tweet-header">
            <img className='rounded-full width-20 h-20' src={profileURL} alt="timeline" />
          </div>
          <div className="tweet-content">{confidences.Gamer.input}</div>
        </div>
        </div> : null}
    </div>

  )
}

export default Tweet